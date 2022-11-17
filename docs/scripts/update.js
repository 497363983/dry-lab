// import { join, relative, resolve } from 'path'
// import fs from 'fs-extra'
// import fg from 'fast-glob'
// import Git from 'simple-git'

const { join, relative, resolve } = require('path')
const fs = require('fs-extra')
const fg = require('fast-glob')
const Git = require('simple-git')

const DIR_ROOT = resolve(__dirname, '../..')
const DIR_DOCS = join(DIR_ROOT, 'docs')

const git = Git(DIR_ROOT)

async function listPages(dir, ignore = []) {
    const files = await fg('**/*.md', {
        cwd: dir,
        ignore,
    })
    const pages = files.map((i) => {
        const name = i.replace(/\.md$/, '')
        const pageName = name.split('/').pop().replace(/-/g, ' ')
        const section = name.split('/').length >= 3 ? name.split('/')[1] : 'root'
        // pageName = "[1]What-is-dry-lab"
        // index = 1
        const index = pageName.match(/^\[(\d+)\]/)?.[1]
        const title = pageName.replace(/\[[0-9]+\]/g, '').trim()
        const path = join(dir, i)
        const docPath = relative(DIR_DOCS, path)
        const collection = i.split('/')[0]
        return {
            name,
            path,
            collection,
            docPath,
            pageName,
            title,
            index,
            section
        }
    })
    await fs.writeJSON(join(DIR_DOCS, 'index.json'), pages, { spaces: 2 })
    return pages

}

async function readMetaData() {
    // Read the metadata file

}

listPages(join(DIR_DOCS, 'document'))



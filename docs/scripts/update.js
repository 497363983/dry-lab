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
    const pages = await Promise.all(files.map(async (i) => {
        const name = i.replace(/\.md$/, '')
        const pageName = name.split('/').pop().replace(/-/g, ' ')
        const section = name.split('/').length >= 3 ? name.split('/')[1] : 'root'
        // pageName = "[1]What-is-dry-lab"
        // index = 1
        const index = pageName.match(/^\[(\d+)\]/)?.[1]
        const title = pageName.replace(/\[[0-9]+\]/g, '').trim()
        const path = join(dir, i)
        const docPath = relative(DIR_DOCS, path).replace(/\\/g, '/')
        const collection = i.split('/')[0]
        const meta = (await git.raw(['log', '--pretty=format:"%ad|%an"', path])).replace(/"/g, '').split('\n').pop().split('|')
        const publishTime = meta[0]
        const author = meta[1]
        return {
            name,
            path,
            collection,
            docPath,
            pageName,
            title,
            index,
            section,
            publishTime,
            author
        }
    }))
    await fs.writeJSON(join(dir, 'index.json'), pages, { spaces: 2 })
}

async function listContributors() {
    try {
        const contributiors = (await fs.readJSON(join(DIR_ROOT, '.all-contributorsrc'))).contributors
        await fs.writeJSON(join(DIR_ROOT, 'contributors.json'), contributiors, { spaces: 2 })
    } catch (e) {
        console.error(e)
    }
}

async function copyREADME() {
    await fs.copy(join(DIR_ROOT, 'README.md'), join(DIR_DOCS, 'about.md'))
}

async function run() {
    listPages(join(DIR_DOCS, 'document'))
    listPages(join(DIR_DOCS, 'zh-cn/document'))
    listContributors()
    copyREADME()
}

run()


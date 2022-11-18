import Git from 'simple-git'
import md5 from 'md5'
import { unique } from './utils'

const git = Git({
    maxConcurrentProcesses: 200,
})

let cache = null

export async function getChangeLog(count = 200) {
    if (cache) {
        return cache
    }
    const logs = (await git.log({ maxCount: count })).all.filter(i =>
        i.message.includes('new:')
        || i.message.includes('edit:')
        || i.message.startsWith('fix:'),
    )

    for (const log of logs) {
        const raw = await git.raw(['diff-tree', '--no-commit-id', '--name-only', '-r', log.hash])
        delete log.body
        const files = raw.replace(/\\/g, '/').replace('docs/', '').trim().split('\n')
        console.log(files)
        log.pages = unique(files)
    }

    const result = logs.filter(i => i.pages?.length)
    cache = result
    return result
}

export async function getContributorsAt(path) {
    try {
        const list = (await git.raw(['log', '--pretty=format:"%an|%ae"', '--', path]))
            .split('\n')
            .map(i => i.slice(1, -1).split("|"))
        const map = {}
        list.filter(i => i[1])
            .forEach((i) => {
                if (!map[i[1]]) {
                    map[i[1]] = {
                        name: i[0],
                        count: 0,
                        hash: md5(i[1])
                    }
                }
                map[i[1]].count++
            })
        return Object.values(map).sort((a, b) => b.count - a.count)
    } catch (e) {
        console.error(e)
        return []
    }
}

export async function getPageContributors(pages) {
    const result = await Promise.all(pages.map(async (i) => {
        return [i.docPath, await getContributorsAt(i.path)]
    }))
    return Object.fromEntries(result)
}
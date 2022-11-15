import Git from 'simple-git'
import md5 from 'md5'

const git = Git({
    maxConcurrentProcesses: 200,
})

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

export async function getPageContributors() {
    const result = await Promise.all(pages.map(async (i) => {
        return [i.name, await getContributorsAt(`docs/document/${i.package}/${i.name}`)]
    }))
    return Object.fromEntries(result)
}
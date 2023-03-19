import { createContentLoader } from 'vitepress';
import Git from 'simple-git';
import { join } from 'path';

function formatDate(t) {
    if (!t) return null
    return new Date(t).getTime()
}

function getTitleFromURL(url) {
    return url.replace(/\.html$/, '').replace(/\[[0-9]+\]/g, '').split('/').pop().replace(/-/g, ' ')
}

function getInformationFromURL(url) {
    const el = url.split('/');
    el.pop();
    const name = el.pop();
    let section = null;
    let collection = null;
    let sectionIndex = null;
    let articleIndex = null;
    if (el.length > 3) {
        section = el.pop();
        collection = el.pop();
        sectionIndex = section.match(/^\[(\d+)\]/)?.[1];
        articleIndex = name.match(/^\[(\d+)\]/)?.[1];
        section = section.replace(/\[[0-9]+\]/g, '').trim();
        collection = collection.replace(/\[[0-9]+\]/g, '').trim();
    } else {
        collection = name;
    }
    const lang = el.pop();
    return {
        name,
        section,
        collection,
        lang,
        sectionIndex,
        articleIndex
    }
}

async function gitInformation(root, path) {
    const git = Git(root)
    const meta = (await git.raw(['log', '--pretty=format:"%ad|%an"', path])).replace(/"/g, '').split('\n').pop().split('|')
    const publishTime = meta[0]
    const author = meta[1]
    return {
        publishTime,
        author
    }
}


export default createContentLoader('**/*.md', {
    transform: async (raw) => {
        let articles = {};
        for (let item of raw){
            console.log(item)
            const { publishTime, author } = await gitInformation(process.cwd(), join('docs', item.url.replace(/\.html$/, '.md')));
            item.git = [publishTime, author ];
            item.author = item.frontmatter.author || author;
            item.date = formatDate(publishTime);
            item = {...item, ...getInformationFromURL(item.url)}
            if (articles[item.lang]){
                if (articles[item.lang][item.collection]) {
                    if (item.section) {
                        if (articles[item.lang][item.collection][item.section]) {
                            articles[item.lang][item.collection][item.section].push(item)
                        }else {
                            articles[item.lang][item.collection][item.section] = [item]
                        }
                    }else {
                        articles[item.lang][item.collection].push(item)
                    }
                }else {
                    articles[item.lang][item.collection] = [item]
                }
            }
        }
        // return Promise.all(raw.map(async ({ url, frontmatter }) => {
        //     const { publishTime, author } = await gitInformation(process.cwd(), join('docs', url.replace(/\.html$/, '.md')));
        //     return {
        //         url,
        //         title: frontmatter.title || getTitleFromURL(url),
        //         git: [publishTime, author ],
        //         author: frontmatter.author || author,
        //         date: formatDate(publishTime),
        //         ...getInformationFromURL(url)
        //     }
            
        // }))
        return articles
    }
});
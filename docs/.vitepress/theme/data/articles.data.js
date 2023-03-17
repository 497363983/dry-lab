import { createContentLoader } from 'vitepress';
import Git from 'simple-git';
import { join, relative, resolve } from 'path';

// const { createContentLoader } = require('vitepress');
// const Git = require('simple-git');
// const { join, relative, resolve } = require('path');

function formatDate(t) {
    if (!t) return null
    return new Date(t).getTime()
}

async function gitInformation(root, path) {
    const DIR_DOCS = join(root, 'docs')
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
    excerpt: true,
    includeSrc: true,
    transform(raw) {
        return raw.map(({ url, frontmatter, excerpt }) => {
            const { publishTime, author } = gitInformation(process.cwd(), join('/docs',url.replace(/\.html$/, '.md')));
            return ({
                url,
                title: frontmatter.title || url.replace(/\.html$/, '').split('/').pop().replace(/-/g, ' '),
                excerpt,
                author: frontmatter.author || author,
                date: formatDate(publishTime),
                frontmatter,
            })
        })
    }
});
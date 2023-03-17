import inquirer from 'inquirer';
import fs from 'fs-extra';
import pc from 'picocolors';
import path from 'path';
import fg from 'fast-glob';
import Git from 'simple-git';
import inquirerFileTreeSelection from 'inquirer-file-tree-selection-prompt';

inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection);
const prompt = inquirer.prompt;
const args = process.argv.slice(2);
const git = Git(process.cwd());

const DIR_ROOT = process.cwd();
const DIR_DOCS = path.join(DIR_ROOT, 'docs');
const DIR_DOCS_EN = path.join(DIR_DOCS, 'en/document');
const DIR_DOCS_ZH = path.join(DIR_DOCS, 'zh-cn/document');

const DOCUMENTS = {
    en: DIR_DOCS_EN,
    zh: DIR_DOCS_ZH,
};

const questions = [
    {
        type: 'list',
        name: 'action',
        message: 'What do you want to do?',
        choices: [
            {
                name: 'Create a new collection',
                value: 'newCollection',
            },
            {
                name: 'Create a new chapter',
                value: 'newSection',
            },
            {
                name: 'Create a new article',
                value: 'newArticle',
            },
            // {
            //     name: 'Delete a collection',
            //     value: 'deleteCollection',
            // },
            // {
            //     name: 'Delete a chapter',
            //     value: 'deleteSection',
            // },
            // {
            //     name: 'Delete an article',
            //     value: 'deleteArticle',
            // },
            // {
            //     name: 'Rename a collection',
            //     value: 'renameCollection',
            // },
            // {
            //     name: 'Rename a chapter',
            //     value: 'renameSection',
            // },
            // {
            //     name: 'Rename an article',
            //     value: 'renameArticle',
            // },
            // {
            //     name: 'Move an article',
            //     value: 'moveArticle',
            // },
            // {
            //     name: 'Move a chapter',

            //     value: 'moveSection',
            // },
            // {
            //     name: 'Move a collection',
            //     value: 'moveCollection',
            // },
            // {
            //     name: 'Exit',
            //     value: 'exit',
            // },
        ],
    },
    {
        type: 'list',
        name: 'lang',
        message: 'Language:',
        choices: [
            {
                name: 'English',
                value: 'en',
            },
            {
                name: 'Chinese',
                value: 'zh',
            },
        ]
    },
    {
        type: 'input',
        name: 'targetCollection',
        message: 'Collection name:',
        when: (answers) => answers.action === 'newCollection',
    },

    {
        type: 'input',
        name: 'title',
        message: 'Article title:',
        when: (answers) => answers.action === 'newArticle',
        validate: (input) => {
            if (input.trim() === '') {
                return 'Title cannot be empty';
            }
            return true;
        },
    },
    {
        type: 'list',
        name: 'targetCollection',
        message: 'Target collection:',
        choices: (answers) => getDirs(DOCUMENTS[answers.lang]),
        when: (answers) => ['newSection', 'newArticle'].includes(answers.action),
    },
    {
        type: 'list',
        name: 'targetSection',
        message: 'Target section:',
        choices: (answers) => getDirs(path.join(DOCUMENTS[answers.lang], answers.targetCollection)),
        when: (answers) => answers.action === 'newArticle',
    },
    {
        type: 'input',
        name: 'targetSection',
        message: 'Chapter name:',
        when: (answers) => ['newSection', 'newCollection'].includes(answers.action),
        validate: (input, answers) => {
            if (input.trim() === '') {
                return 'Chapter name cannot be empty';
            } else if (getDirs(path.join(DOCUMENTS[answers.lang], answers.targetCollection)).map(i => i.replace(/^\[(\d+)\]/, '')).includes(`${input.trim().replace(/\s+/g, '-')}`)) {
                return 'This chapter already exists';
            }
            return true;
        }
    },
    // {
    //     type: 'list',
    // },
    {
        type: 'number',
        name: 'index',
        message: 'Index:',
        when: (answers) => answers.action === 'newArticle',
        default: (answers) => getIndexes(getFiles(path.resolve(DOCUMENTS[answers.lang], answers.targetCollection, answers.targetSection))).pop() + 1,
    },
    {
        type: 'number',
        name: 'index',
        message: 'Index:',
        when: (answers) => answers.action === 'newSection',
        default: (answers) => getIndexes(getDirs(path.join(DOCUMENTS[answers.lang], answers.targetCollection))).pop() + 1,
    },
    {
        type: 'confirm',
        name: 'confirmOrder',
        message: 'The index already exists. Do you want to continue this setting?',
        when: (answers) => ['newSection', 'newArticle'].includes(answers.action) && getIndexes(answers.action === 'newSection' ? getDirs(path.join(DOCUMENTS[answers.lang], answers.targetCollection)) : getFiles(path.resolve(DOCUMENTS[answers.lang], answers.targetCollection, answers.targetSection))).includes(answers.index),
        default: true,
        validate: (input) => {
            if (input) {
                return true;
            }
            return 'Please set the index again';
        }
    },
];

const authorInfo = [
    {
        type: 'input',
        name: 'author',
        message: 'Author:',
        default: async (answers) => {
            const author = (await git
                .raw(['config', 'user.name']))
                .replace(/\n$/, '');
            return author;
        },
    },
    {
        type: 'input',
        name: 'email',
        message: 'Email:',
        default: async (answers) => {
            const email = (await git
                .raw(['config', 'user.email']))
                .replace(/\n$/, '');
            return email;
        },
    },
]

// prompt(questions).then(async (answers) => {
//     const { action, lang, collection, section, title, targetCollection, targetSection, index, confirmOrder } = answers;
//     const dir = DOCUMENTS[lang];
// });
// prompt(authorInfo).then(async (answers) => {
//     console.log(answers);
// });



/**
 * 
 * @param {string} p 
 * @param {number} deep 
 * @returns 
 */
function getDirs(p, deep = 1) {
    return fg.sync('*', { cwd: p, onlyDirectories: true, deep });
}

/**
 * 
 * @param {string} p 
 * @returns 
 */
function getFiles(p) {
    return fg.sync('\\[([[:digit:]])\\]*.md', { cwd: p, onlyFiles: true });
}

/**
 * 
 * @param {string} p 
 * @returns 
 */
function getDirNum(p) {
    return getDirs(p).length;
}

/**
 * 
 * @param {string} name 
 * @returns 
 */
function getIndex(name) {
    //get the index of an article
    return parseInt(name.match(/^\[(\d+)\]/)?.[1], 10);
}

/**
 * 
 * @param {string[]} arr 
 * @returns 
 */
function getIndexes(arr) {
    return arr.map((name) => getIndex(name)).sort((a, b) => a - b);
}


/**
 * 
 * @param {string} p 
 * @returns 
 */
function getFileNum(p) {
    return getFiles(p).length;
}

function insertArticle(index, targetDir, title, lang, author) {
    const articles = getFiles(targetDir);
    let cache = 0;
    articles.forEach((article) => {
        const i = getIndex(article);
        if (i === index || i === cache) {
            fs.renameSync(path.resolve(targetDir, article), path.resolve(targetDir, article.replace(/^\[(\d+)\]/, `[${i + 1}]`)));
            cache = i + 1;
        }
    });
    fs.writeFileSync(path.resolve(targetDir, `[${index}]${title.replace(/\s+/g, '-')}.md`),
        `\-\-\-\ntitle: ${title}\nlang: ${lang}\nauthor: ${author.author}\nemail: ${author.email}${author.profile ? '\nlink: ' + author.profile : ''}\n\-\-\-\n\n# ${title}\n\n`);
}

/**
 * 
 * @param {Object} article 
 * @param {Object} author 
 */
function createArticle(article, author) {
    //create a new article
    const { lang, targetCollection, targetSection, title, index, confirmOrder } = article;
    if (confirmOrder === false) {
        return;
    } else {
        insertArticle(index, path.resolve(DOCUMENTS[lang], targetCollection, targetSection), title, lang, author);
    }
}

async function run() {
    let author = {};
    console.log(path.resolve(process.cwd(), 'author.json'))
    if (fs.existsSync(path.resolve(process.cwd(), 'author.json'))) {
        author = await fs.readJSON(path.resolve(process.cwd(), 'author.json'));
    } else {
        author = await prompt(authorInfo);
        fs.writeJSON(path.resolve(process.cwd(), 'author.json'), author);
    };
    prompt(questions).then(async (answers) => {
        const { action, lang, title, targetCollection, targetSection, index } = answers;
        const dir = DOCUMENTS[lang];
        switch (action) {
            case 'newCollection':
                if (!fs.existsSync(path.resolve(dir, targetCollection, targetSection))) {
                    fs.mkdirSync(path.resolve(dir, targetCollection, targetSection));
                }
                break;
            case 'newSection':
                if (!fs.existsSync(path
                    .resolve(dir, targetCollection, `[${index}]${targetSection.replace(/\s+/g, '-')}`))) {
                    fs.mkdirSync(path
                        .resolve(dir, targetCollection, `[${index}]${targetSection.replace(/\s+/g, '-')}`));
                }
                break;
            case 'newArticle':
                if (!fs.existsSync(path
                    .resolve(dir, targetCollection, targetSection, `[${index}]${title.replace(/\s+/g, '-')}.md`))) {
                    createArticle(answers, author);
                }
                break;
            default:
                break;
        }
    });
}


run();

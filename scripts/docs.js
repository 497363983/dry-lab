import inquirer from 'inquirer';
import fs from 'fs-extra';
import pc from 'picocolors';
import path, { join } from 'path';
import fg from 'fast-glob';
import Git from 'simple-git';
import inquirerFileTreeSelection from 'inquirer-file-tree-selection-prompt';

inquirer.registerPrompt('file-tree-selection', inquirerFileTreeSelection);
const prompt = inquirer.prompt;
const args = process.argv.slice(2);

const DIR_ROOT = process.cwd();
const DIR_DOCS = path.join(DIR_ROOT, 'docs');
const DIR_DOCS_VITEPRESS = path.join(DIR_DOCS, '.vitepress');
const DIR_DOCS_EN = path.join(DIR_DOCS, 'document');
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
            {
                name: 'Delete a collection',
                value: 'deleteCollection',
            },
            {
                name: 'Delete a chapter',
                value: 'deleteSection',
            },
            {
                name: 'Delete an article',
                value: 'deleteArticle',
            },
            {
                name: 'Rename a collection',
                value: 'renameCollection',
            },
            {
                name: 'Rename a chapter',
                value: 'renameSection',
            },
            {
                name: 'Rename an article',
                value: 'renameArticle',
            },
            {
                name: 'Move an article',
                value: 'moveArticle',
            },
            {
                name: 'Move a chapter',

                value: 'moveSection',
            },
            {
                name: 'Move a collection',
                value: 'moveCollection',
            },
            {
                name: 'Exit',
                value: 'exit',
            },
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
        name: 'collection',
        message: 'Collection name:',
        when: (answers) => answers.action === 'newCollection',
    },
    {
        type: 'input',
        name: 'section',
        message: 'Chapter name:',
        when: (answers) => answers.action === 'newSection',
    },
    {
        type: 'input',
        name: 'title',
        message: 'Article title:',
        when: (answers) => answers.action === 'newArticle',
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
        choices: (answers) => getDirs(answers.targetCollection),
        when: (answers) => answers.action === 'newArticle',
    },
    {
        type: 'number',
        name: 'index',
        message: 'Index:',
        when: (answers) => answers.action === 'newArticle',
        default: (answers) => getFileNum(answers.targetSection) + 1,
    },
    {
        type: 'number',
        name: 'index',
        message: 'Index:',
        when: (answers) => answers.action === 'newSection',
        default: (answers) => getDirNum(answers.targetCollection) + 1,
    },
    {
        type: 'confirm',
        name: 'confirmOrder',
        message: 'Confirm order?',
        when: (answers) => ['newSection', 'newArticle'].includes(answers.action) && getIndexes(answers.action === 'newArticle' ? getDirs(answers.targetCollection) : getFiles(answers.targetSection)).includes(answers.index),
        default: true,
    },
];

// const answers = await prompt(questions);

// console.log(answers);

/**
 * 
 * @param {string} p 
 * @param {number} deep 
 * @returns 
 */
function getDirs(p, deep = 1) {
    return fg.sync('*', { cwd: p, onlyDirectories: true, deep });
}

// console.log(getDirs('E:\\develop\\dry-lab\\docs\\document'));

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
    return name.match(/^\[(\d+)\]/)?.[1];
}

/**
 * 
 * @param {string[]} arr 
 * @returns 
 */
function getIndexes(arr) {
    return arr.map((name) => getIndex(name));
}

console.log(getIndexes(getFiles('E:\\develop\\dry-lab\\docs\\document\\contributing\\[1]Introduction')));


/**
 * 
 * @param {string} p 
 * @returns 
 */
function getFileNum(p) {
    return getFiles(p).length;
}

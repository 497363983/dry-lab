import fs from 'fs-extra';
import fg from 'fast-glob';
import { join, relative, resolve } from 'path';
import { fdatasync } from 'fs';


const files = await fg('**/*.md', {
    cwd: join(process.cwd(), 'docs/document'),
})


console.log(files)

await Promise.all(files.map(async (i) => {
    const el = i.split('/');
    const name = el.pop();
    if (name !== 'index.md') {
        fs.mkdir(join(process.cwd(), 'docs/document', el.join('/'), name.replace(/\.md$/, '')), { recursive: true }, (err) => {
            if (err) { 
                throw err; 
            }
            else {
                fs.copyFile(join(process.cwd(), 'docs/document', i), join(process.cwd(), 'docs/document', el.join('/'), name.replace(/\.md$/, ''), 'index.md'), (err) => {
                    if (err) {
                        throw err;
                    }else {
                        fs.remove(join(process.cwd(), 'docs/document', i), (err) => {
                            if (err) {
                                throw err;
                            }
                        })
                    }
                })
            }
        });
    }
}))
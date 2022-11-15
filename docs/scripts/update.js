import {join, relative, resolve} from 'path'
import fs from 'fs-extra'
import Git from 'simple-git'

export const DIR_ROOT = resolve(__dirname, '../..')

export const git = Git(DIR_ROOT)

export async function readMetaData(){
    // Read the metadata file
    
}



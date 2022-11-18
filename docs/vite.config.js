import { defineConfig } from 'vite'
import { getPageContributors, getChangeLog } from '../scripts/changelog'
import { SearchPlugin } from 'vitepress-plugin-search'
import { Contributors } from './.vitepress/plugins/contributors'
import { ChangeLog } from './.vitepress/plugins/changeLog'
import enPages from './document/index.json'
import zhPages from './zh-cn/document/index.json'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Components from 'unplugin-vue-components/vite'
import { resolve } from 'path'

export default defineConfig(async () => {
    const [changeLog, contributors] = await Promise.all([
        getChangeLog(),
        getPageContributors([...enPages, ...zhPages]),
    ])
    return {
        plugins: [
            SearchPlugin({
                encode: false,
                tokenize: 'full',
            }),
            Contributors(contributors),
            ChangeLog(changeLog),
            Components({
                dirs: resolve(__dirname, '.vitepress/theme/components'),
                include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
                resolvers: [IconsResolver({ componentPrefix: '' })],
                transformer: 'vue3',
            }),
            Icons({
                compiler: 'vue3',
                defaultStyle: 'display:inline-block;',
            }),
        ],
    }

})
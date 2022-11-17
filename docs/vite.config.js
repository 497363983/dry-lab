import { defineConfig } from 'vite'
import { getContributorsAt } from '../scripts/changelog'
import { SearchPlugin } from 'vitepress-plugin-search'


export default defineConfig(async () => {
    return {
        plugins: [
            SearchPlugin({
                encode: false,
                tokenize: 'full',
            }),
        ],
    }

})
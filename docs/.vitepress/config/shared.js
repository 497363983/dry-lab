import { defineConfig } from "vitepress";

export const sharedConfig = defineConfig({
    title: "Dry Lab",
    lastUpdated: true,
    vue: { reactivityTransform: true },
    themeConfig: {
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/497363983/iGEM-ToolBox'
            }
        ],
    },
    markdown: {
        config: (md) => {
            md.use(require('markdown-it-texmath'), {
                engine: require('katex'),
                delimiters: 'github',
            })
        }
    },
    base: '/dry-lab/',
    footer: {
        message: `Released under the MIT License.`
    }
});
import { withMermaid } from "vitepress-plugin-mermaid";
/**
 * @type {import('vitepress').UserConfig}
 */

export default withMermaid({
    title: "Dry Lab",
    description: "A document for dry lab in iGEM",
    lastUpdated: true,
    themeConfig: {
        nav: [

        ],
        sidebar: {
            
        },
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/497363983/iGEM-ToolBox'
            }
        ]
    },
    markdown: {
        config: (md) => {
            md.use(require('markdown-it-texmath'), {
                engine: require('katex'),
                delimiters: 'github',
            })
        }
    }
})
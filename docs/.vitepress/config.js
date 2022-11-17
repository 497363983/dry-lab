// import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { getSideBarItems } from "./config/sidebar";
export default withMermaid({
    title: "Dry Lab",
    description: "A knowledge base for dry lab in iGEM",
    lastUpdated: true,
    cleanUrls: 'without-subfolders',
    themeConfig: {
        nav: [
            {
                text: "Document",
                items: [
                    {
                        text: "About Dry Lab",
                        link: "/document/introduction/[1]Introduction/[1]What-is-dry-lab"
                    },
                    {
                        text: "Model",
                        link: "/document/model/[1]Introduction/[1]What-is-model"
                    },
                    {
                        text: "WIKI",
                        link: "/document/wiki/[1]Introduction/[1]What-is-WIKI"
                    }
                ]
            },
            {
                text: "About",
                link: "/about"
            }
        ],
        sidebar: {
            "/document/introduction/": getSideBarItems("introduction"),
            "/document/model/": getSideBarItems("model"),
            "/document/wiki/": getSideBarItems("wiki")
        },
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/497363983/dry-lab'
            }
        ],
        footer: {
            message: `Released under the MIT License.`
        },
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

})
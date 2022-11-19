// import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { getSideBarItems } from "./config/sidebar";
import enPages from "../document/index.json";
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
                    },
                    {
                        text: "Hardware",
                        link: "/document/hardware/[1]Introduction/[1]What-is-hardware"
                    }
                ]
            },
            {
                text: "Contributing",
                link: "/document/contributing/[1]Introduction/[1]File-structure"
            },
            {
                text: "About",
                link: "/about"
            }
        ],
        sidebar: {
            "/document/introduction/": getSideBarItems(enPages, "introduction"),
            "/document/model/": getSideBarItems(enPages, "model"),
            "/document/wiki/": getSideBarItems(enPages, "wiki"),
            "/document/hardware/": getSideBarItems(enPages, "hardware"),
            "/document/contributing/": getSideBarItems(enPages, "contributing")
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
        editLink: {
            text: 'Edit this page on GitHub',
            pattern: 'https://github.com/497363983/dry-lab/edit/main/docs/:path'
        }
    },
    markdown: {
        config: (md) => {
            md.use(require('markdown-it-texmath'), {
                engine: require('katex'),
                delimiters: 'github',
            })
            md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
                let htmlResult = slf.renderToken(tokens, idx, options, env, slf)
                if (tokens[idx].tag === 'h1') htmlResult += `\n<ClientOnly><articleInformation :article="$frontmatter" /></ClientOnly>`
                return htmlResult
            }
        }
    },
    base: '/dry-lab/',

})
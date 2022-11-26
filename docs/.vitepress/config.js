import { defineConfig } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import { getSideBarItems } from "./config/sidebar";
import enPages from "../document/index.json";
import { getNavItem, getNavItems } from "./config/nav";
import { customElement } from "./config/customElement";
import texmath from "markdown-it-texmath";
import katex from "katex";
export default withMermaid({
    title: "Dry Lab",
    description: "A knowledge base for dry lab in iGEM",
    lastUpdated: true,
    cleanUrls: 'without-subfolders',
    themeConfig: {
        nav: [
            {
                text: "Document",
                items: getNavItems(enPages)
            },
            getNavItem(enPages, "contributing", "Contributing"),
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
        },
        localeLinks: {
            text: "Languages",
            items: [
                {
                    text: "简体中文",
                    link: "/zh-cn/"
                },
                {
                    text: "English",
                    link: "/"
                }
            ]
        }
    },
    markdown: {
        toc: {
            level: [2]
        },
        config: (md) => {
            // md.use(require('markdown-it-mathjax3'))
            md.use(texmath, {
                engine: katex,
            });
            md.renderer.rules.heading_close = (tokens, idx, options, env, slf) => {
                let htmlResult = slf.renderToken(tokens, idx, options, env, slf)
                if (tokens[idx].tag === 'h1') htmlResult += `\n<ClientOnly><articleInformation :article="$frontmatter" /></ClientOnly>`
                return htmlResult
            }
        },
    },
    base: '/dry-lab/',
    vue: {
        template: {
            compilerOptions: {
                isCustomElement: (tag) => customElement.includes(tag)
            }
        }
    }
})
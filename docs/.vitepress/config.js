import { withMermaid } from "vitepress-plugin-mermaid";


export default withMermaid(
    /**
     * @type {import('vitepress').UserConfig}
     */
    {
        title: "Dry Lab",
        description: "A document for dry lab in iGEM",
        lastUpdated: true,
        themeConfig: {
            nav: [
                {
                    text: "Document",
                    link: "/document/introduction/What-is-dry-lab"
                }
            ],
            sidebar: {
                '/zh-cn/document/': [
                    {
                        text: '介绍',
                        items: [
                            {
                                text: "什么是Dry lab",
                                link: "/zh-cn/document/introduction/"
                            }
                        ]
                    }
                ],
                '/document/': [
                    {
                        text: '介绍',
                        items: [
                            {
                                text: "What is dry lab",
                                link: "/document/introduction/What-is-dry-lab"
                            }
                        ]
                    }
                ]
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
        },
        base: '/dry-lab/'
    })
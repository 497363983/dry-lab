
/**
 * @type {import('vitepress').UserConfig}
 */
export const cnConfig = {
    description: "Dry lab知识库",
    themeConfig: {
        nav: [
            {
                text: "文档",
                items: [
                    {
                        text: "About Dry Lab",
                        link: "/zh-cn/document/introduction/"
                    },
                    {
                        text: "Model",
                        link: "/zh-cn/document/model/"
                    },
                    {
                        text: "WIKI",
                        link: "/zh-cn/document/wiki/"
                    }
                ]
            }
        ],
    },
}
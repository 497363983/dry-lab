
/**
 * @type {import('vitepress').UserConfig}
 */
export const enConfig = {
    description: "A document for dry lab in iGEM",
    themeConfig: {
        nav: [
            {
                text: "Document",
                items: [
                    {
                        text: "About Dry Lab",
                        link: "/document/introduction/"
                    },
                    {
                        text: "Model",
                        link: "/document/model/"
                    },
                    {
                        text: "WIKI",
                        link: "/document/wiki/"
                    }
                ]
            }
        ],
    },
}
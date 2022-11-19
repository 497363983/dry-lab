export function getSideBarItems(pages, collection, path = '/') {
    const items = pages.filter((i) => i.collection === collection);
    const sidebar = [];
    items.forEach((i) => {
        if (i.section === 'root') {
            sidebar.push({
                text: i.title,
                link: path + i.docPath,
                index: i.index,
            });
        } else {
            const section = sidebar.find((j) => j.text === i.section.replace(/\[[0-9]+\]/g, '').trim());
            if (section) {
                section.items.push({
                    text: i.title,
                    link: path + i.docPath,
                    index: i.index,
                });
            } else {
                sidebar.push({
                    text: i.section.replace(/\[[0-9]+\]/g, '').trim(),
                    collapsible: true,
                    items: [
                        {
                            text: i.title,
                            link: path + i.docPath,
                            index: i.index,
                        },
                    ],
                });
            }
        }
    });
    sidebar.forEach((i) => {
        if (i.items) {
            i.items.sort((a, b) => a.index - b.index);
        }
    });
    sidebar.sort((a, b) => a.index - b.index);
    console.log(sidebar);
    return sidebar;
}
export function getNavItem(pages, collection, title) {
    const items = pages.filter((i) => i.collection === collection);
    return {
        text: title,
        link: items[0].docPath,
    }
}

export function getNavItems(pages) {
    const items = [
        getNavItem(pages, 'introduction', 'About Dry Lab'),
        getNavItem(pages, 'wiki', 'WIKI'),
        getNavItem(pages, 'model', 'Model'),
        getNavItem(pages, 'hardware', 'Hardware'),
    ];
    return items;
}
    
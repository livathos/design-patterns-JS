const sidebars = {
    behavioural: [
        '',
        'observer',
        'command'
    ],
    creational: [
        '',
        'factory-method'
    ],
    structural: [
        '',
        'flyweight',
        'proxy'
    ]
}

function genSidebarConfig(...names) {
    return names.map(t => {
        return {
            title: t,
            collapsable: false,
            children: sidebars[t.toLowerCase()]
        }
    })
}

module.exports = {
    title: 'Design patterns JavaScript',
    description: 'Exploring Design Patterns with ES6 and diagrams.',
    serviceWorker: true,
    base: '/design-patterns-JS/',
    head: [
        ['meta', { charset: 'utf-8' }],
        ['meta', { name: "msapplication-TileColor", content: "#ffffff" }],
        ['meta', { name: "theme-color", content: "#41b883" }],
        ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }]
    ],
    themeConfig: {
        repo: 'livathos/design-patterns-JS',
        docsRepo: 'livathos/design-patterns-JS',
        docsDir: 'docs',
        editLinks: true,
        serviceWorker: {
            updatePopup: { message: "New content is available.", buttonText: "Refresh" }
        },
        locales: {
            '/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Help to improve this page!',
                nav: [
                    { text: 'Behavioural', link: '/behavioural/' },
                    { text: 'Creational', link: '/creational/' },
                    { text: 'Structural', link: '/structural/' }
                ],
                sidebarDepth: 3,
                sidebar: {
                    '/behavioural/': genSidebarConfig('Behavioural'),
                    '/creational/': genSidebarConfig('Creational'),
                    '/structural/': genSidebarConfig('Structural')
                }
            }
        }
    }
}

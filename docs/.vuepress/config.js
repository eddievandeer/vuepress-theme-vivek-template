module.exports = {
    title: 'vuepress-theme-vivek主题博客',
    description: 'This is blog\'s description',
    plugins: [],
    head: [
        [
            'link',
            {
                rel: 'icon',
                href: '/assets/icon/favicon.ico',
            },
        ],
    ],
    theme: 'vuepress-theme-vivek',
    themeConfig: require('./themeConfig'),
    markdown: {
        lineNumbers: true,
    },
    smoothScroll: true,
    lastUpdated: 'Last Updated',
};

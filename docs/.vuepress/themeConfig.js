module.exports = {
    nav: require('./nav'),
    author: '[Your name]',
    license: 'CC BY-NC-SA 4.0',
    sidebarDepth: 2,
    appId: 'input your appId',
    appKey: 'input your appKey',
    logo: '/assets/img/logo.jpg',
    background: 'https://upyun.cavalheiro.cn/images/background.jpg',
    externalLinks: [
        {
            text: 'GitHub',
            link: 'https://github.com/eddievandeer/vuepress-theme-vivek',
            target: '_blank'
        }
    ],
    footer: {
        // 页脚信息
        createYear: 2020, // 博客创建年份
        currentYear: new Date().getFullYear(), // 当前年份
        beian: {
            link: 'https://beian.miit.gov.cn/#/Integrated/index',
            context: '备案号'
        },
        // 授权信息
        copyrightInfo: 'MIT Licensed | Copyright © 2020-present [Your name]',
        // 服务提供商信息，支持html标签
        support: '<span>本网站由</span>xxx<span>提供 <b>CDN</b> 加速</span>',
    },
}
// https://www.vuepress.cn/config/#%E5%9F%BA%E6%9C%AC%E9%85%8D%E7%BD%AE
module.exports = {
  title: 'Angular学习笔记',
  description: '目录',
  base: '/docs/',
  head: [['link', { rel: 'icon', href: '/assets/img/favicon.ico' }]],
  plugins: [],
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  themeConfig: {
    logo: '/assets/img/logo.svg',
    nav: [
      { text: 'home', link: '/' },
      {
        text: 'ts docs',
        ariaLabel: 'typescript docs',
        items: [
          { text: 'gitbook', link: 'http://ftp6356157.host119.sanfengyun.cn' },
          { text: 'vuepress', link: 'https://wzh327083434.github.io/mypage' }
        ]
      }
    ],
    sidebar: [
      {
        title: 'Angular', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: []
      },
      {
        title: 'TypeScript', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: []
      },
      {
        title: 'UiRouter', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: []
      },
      {
        title: 'RxJs', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: []
      },
      {
        title: 'Tools', // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: ['pages/tools/extensions', 'pages/tools/faq', 'pages/tools/todo']
      }
    ],
    lastUpdated: 'Last Updated',
    repo: 'https://github.com/wzh327083434/ng-repo.git',
    repoLabel: 'github',
    docsDir: 'docs',
    smoothScroll: true
  }
};

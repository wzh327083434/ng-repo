module.exports = {
  title: "Angular学习笔记",
  description: "目录",
  base: "/docs/",
  plugins: [],
  themeConfig: {
    logo: "/assets/img/logo.svg",
    nav: [
      { text: "目录", link: "/" },
      {
        text: "ts docs",
        ariaLabel: "typescript docs",
        items: [
          { text: "gitbook", link: "http://ftp6356157.host119.sanfengyun.cn" },
          { text: "vuepress", link: "https://wzh327083434.github.io/mypage" }
        ]
      }
    ],
    sidebar: [
      {
        title: "Angular", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: []
      },
      {
        title: "TypeScript", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: []
      },
      {
        title: "UiRouter", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: []
      },
      {
        title: "RxJs", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: []
      },
      {
        title: "Tools", // 必要的
        collapsable: false, // 可选的, 默认值是 true,
        children: ["pages/vs-code/extensions", "pages/vs-code/env"]
      }
    ],
    lastUpdated: "Last Updated",
    repo: "https://github.com/wzh327083434/ng-repo.git",
    repoLabel: "github",
    docsDir: "docs",
    smoothScroll: true
  }
};

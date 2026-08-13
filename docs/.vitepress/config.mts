import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: '测度论与概率论基础 习题解答',
  description: '程士宏《测度论与概率论基础》（北京大学出版社）课后习题参考解答',
  base: '/Measure-theory-and-probability-theory/',
  cleanUrls: true,
  lastUpdated: true,
  markdown: {
    math: true
  },
  head: [
    ['meta', { name: 'keywords', content: '测度论,概率论基础,程士宏,习题解答,课后答案,北京大学出版社,可测空间,可测映射' }]
  ],
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '第一章 可测空间和可测映射', link: '/ch01/' }
    ],
    sidebar: [
      {
        text: '习题解答',
        items: [
          { text: '第一章 可测空间和可测映射', link: '/ch01/' }
        ]
      }
    ],
    outline: { level: [2, 3], label: '本页目录' },
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lessen-xu/Measure-theory-and-probability-theory' }
    ],
    editLink: {
      pattern: 'https://github.com/lessen-xu/Measure-theory-and-probability-theory/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页'
    },
    docFooter: { prev: '上一页', next: '下一页' },
    lastUpdatedText: '最后更新',
    returnToTopLabel: '回到顶部',
    darkModeSwitchLabel: '主题',
    sidebarMenuLabel: '目录',
    outlineTitle: '本页目录',
    footer: {
      message: '内容以 CC BY-NC-SA 4.0 授权',
      copyright: '© 2026 lessen-xu'
    }
  }
})

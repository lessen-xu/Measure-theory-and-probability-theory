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
        text: '第一章 可测空间和可测映射',
        link: '/ch01/',
        collapsed: false,
        items: [
          { text: '1. 指示函数的性质', link: '/ch01/01' },
          { text: '2. 两两不交集列的极限', link: '/ch01/02' },
          { text: '3. 空集属于半环', link: '/ch01/03' },
          { text: '4. 半环中的差集分解', link: '/ch01/04' },
          { text: '5. ℛ_R 是 R 上的环', link: '/ch01/05' },
          { text: '6. 含 X 的环是域', link: '/ch01/06' },
          { text: '7. 由环生成的域', link: '/ch01/07' },
          { text: '8. 对可列不交并封闭的域', link: '/ch01/08' },
          { text: '9. 直线上的半环与 σ 域', link: '/ch01/09' },
          { text: '10. 不交集列生成的 σ 域', link: '/ch01/10' },
          { text: '11. 可列集上的 σ 域', link: '/ch01/11' },
          { text: '12. 半环与其生成环的 σ 域', link: '/ch01/12' },
          { text: '13. 迹 σ 域', link: '/ch01/13' },
          { text: '14. 单调系与取迹是否可交换', link: '/ch01/14' },
          { text: '15. 定理与推论的等价性', link: '/ch01/15' },
          { text: '16. 原像的性质', link: '/ch01/16' },
          { text: '17. 用可数稠集判别可测性', link: '/ch01/17' },
          { text: '18. aI_A + bI_B 的可测性', link: '/ch01/18' },
          { text: '19. 简单函数的刻画', link: '/ch01/19' },
          { text: '20. 有限分割上的全体可测函数', link: '/ch01/20' },
          { text: '21. 单调函数是随机变量', link: '/ch01/21' },
          { text: '22. 连续函数是随机变量', link: '/ch01/22' },
          { text: '23. 分割上的可测性', link: '/ch01/23' },
          { text: '24. 收敛点集的可测性', link: '/ch01/24' },
          { text: '25. 次序统计量的可测性', link: '/ch01/25' }
        ]
      }
    ],
    outline: false,
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
    footer: {
      message: '内容以 CC BY-NC-SA 4.0 授权',
      copyright: '© 2026 lessen-xu'
    }
  }
})

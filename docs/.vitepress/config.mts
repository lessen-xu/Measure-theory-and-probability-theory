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
      { text: '第一章 可测空间和可测映射', link: '/ch01/' },
      { text: '第二章 测度空间', link: '/ch02/' }
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
      },
      {
        text: '第二章 测度空间',
        link: '/ch02/',
        collapsed: false,
        items: [
          { text: '1. 测度的有限可加性与可减性', link: '/ch02/01' },
          { text: '2. 三个测度例子的验证', link: '/ch02/02' },
          { text: '3. 由实数列定义的集函数', link: '/ch02/03' },
          { text: '4. 半环上 σ 有限的等价刻画', link: '/ch02/04' },
          { text: '5. 有限可加集函数的可列上界', link: '/ch02/05' },
          { text: '6. 域上的容斥公式', link: '/ch02/06' },
          { text: '7. 上下极限集的测度', link: '/ch02/07' },
          { text: '8. 紧集合系与可列可加性', link: '/ch02/08' },
          { text: '9. L 测度是缺原子的', link: '/ch02/09' },
          { text: '10. 外测度的限制', link: '/ch02/10' },
          { text: '11. 外测度的上确界与和', link: '/ch02/11' },
          { text: '12. τ 可测集的判别', link: '/ch02/12' },
          { text: '13. 由测度生成的外测度', link: '/ch02/13' },
          { text: '14. 外测度程序未必给出扩张', link: '/ch02/14' },
          { text: '15. 有限测度与准分布函数', link: '/ch02/15' },
          { text: '16. 可数集的 L 测度', link: '/ch02/16' },
          { text: '17. 满外测度子集上的诱导测度', link: '/ch02/17' },
          { text: '18. 半环上 σ 有限测度的扩张', link: '/ch02/18' },
          { text: '19. 域上测度的惟一性', link: '/ch02/19' },
          { text: '20. 用半环中的集合逼近', link: '/ch02/20' },
          { text: '21. 完全化 σ 域的对称差表示', link: '/ch02/21' },
          { text: '22. 极限的惟一性', link: '/ch02/22' },
          { text: '23. a.e. 相等的函数列收敛性相同', link: '/ch02/23' },
          { text: '24. 一致连续函数保持依测度收敛', link: '/ch02/24' },
          { text: '25. a.e. 收敛的依测度刻画', link: '/ch02/25' },
          { text: '26. 算术平均的收敛性', link: '/ch02/26' },
          { text: '27. 依测度基本列', link: '/ch02/27' },
          { text: '28. 依分布收敛加依概率趋零', link: '/ch02/28' },
          { text: '29. 依分布收敛到常数', link: '/ch02/29' },
          { text: '30. 左连续逆的性质', link: '/ch02/30' },
          { text: '31. 弱收敛传递到左连续逆', link: '/ch02/31' },
          { text: '32. 连续极限下的一致收敛', link: '/ch02/32' }
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

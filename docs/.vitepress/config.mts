import { defineConfig } from 'vitepress'

const SITE = 'https://lessen-xu.github.io/Measure-theory-and-probability-theory/'

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
  sitemap: {
    hostname: SITE
  },
  head: [
    ['meta', { name: 'keywords', content: '测度论,概率论基础,程士宏,习题解答,课后答案,北京大学出版社,可测空间,可测映射,测度空间,积分,符号测度,条件期望' }],
    ['meta', { name: 'robots', content: 'index,follow' }],
    ['meta', { property: 'og:site_name', content: '测度论与概率论基础 习题解答' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }]
  ],
  transformPageData(pageData) {
    const path = pageData.relativePath.replace(/index\.md$/, '').replace(/\.md$/, '')
    const url = SITE + path
    const title = pageData.title

    if (!pageData.description) {
      pageData.description = title
        ? `程士宏《测度论与概率论基础》（北京大学出版社）课后习题参考解答：${title}，含完整证明过程。`
        : '程士宏《测度论与概率论基础》（北京大学出版社）课后习题参考解答'
    }

    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:type', content: 'article' }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:title', content: title ?? '测度论与概率论基础 习题解答' }],
      ['meta', { property: 'og:description', content: pageData.description }]
    )
  },
  themeConfig: {
    sidebar: [
      {
        text: '第一章 可测空间和可测映射',
        link: '/ch01/',
        collapsed: true,
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
        collapsed: true,
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
      },
      {
        text: '第三章 积分',
        link: '/ch03/',
        collapsed: true,
        items: [
          { text: '1. 积分存在则在任何可测集上存在', link: '/ch03/01' },
          { text: '2. 积分形式的 Chebyshev 不等式', link: '/ch03/02' },
          { text: '3. 积分第一中值定理', link: '/ch03/03' },
          { text: '4. σ 有限空间上积分相等推出 a.e. 相等', link: '/ch03/04' },
          { text: '5. 可积函数的非零集有 σ 有限测度', link: '/ch03/05' },
          { text: '6. 完成推论 3.2.5 的证明', link: '/ch03/06' },
          { text: '7. 完成推论 3.2.7 的证明', link: '/ch03/07' },
          { text: '8. 完成定理 3.2.10 的证明', link: '/ch03/08' },
          { text: '9. 广义单调收敛定理', link: '/ch03/09' },
          { text: '10. 广义 Fatou 引理', link: '/ch03/10' },
          { text: '11. L₁ 收敛蕴含依测度收敛', link: '/ch03/11' },
          { text: '12. 非负情形的 Scheffé 定理', link: '/ch03/12' },
          { text: '13. L∞ 上的范数', link: '/ch03/13' },
          { text: '14. 完成定理 3.3.5 的证明', link: '/ch03/14' },
          { text: '15. L₂ 是 Hilbert 空间', link: '/ch03/15' },
          { text: '16. 证明引理 3.3.6', link: '/ch03/16' },
          { text: '17. 0 < p < 1 时的 Minkowski 不等式', link: '/ch03/17' },
          { text: '18. 平均收敛不蕴含 a.e. 收敛', link: '/ch03/18' },
          { text: '19. L∞ 有界与弱收敛', link: '/ch03/19' },
          { text: '20. 期望有限的级数判别', link: '/ch03/20' },
          { text: '21. 证明定理 3.4.1', link: '/ch03/21' },
          { text: '22. 依概率收敛的距离化', link: '/ch03/22' },
          { text: '23. L-S 积分与 Riemann-Stieltjes 积分', link: '/ch03/23' },
          { text: '24. 纯离散分布的积分', link: '/ch03/24' },
          { text: '25. 弱收敛与有界连续函数', link: '/ch03/25' },
          { text: '26. 方差公式', link: '/ch03/26' },
          { text: '27. 有可积控制则一致可积', link: '/ch03/27' },
          { text: '28. 一致可积族的线性组合', link: '/ch03/28' },
          { text: '29. Lₛ 有界则 |f|ʳ 一致可积', link: '/ch03/29' },
          { text: '30. 依分布收敛加期望收敛推出一致可积', link: '/ch03/30' }
        ]
      },
      {
        text: '第四章 符号测度',
        link: '/ch04/',
        collapsed: true,
        items: [
          { text: '1. 表为两个测度之差是否惟一', link: '/ch04/01' },
          { text: '2. 符号测度的上下连续性', link: '/ch04/02' },
          { text: '3. 下变差的变分表示', link: '/ch04/03' },
          { text: '4. Jordan 分解的极小性', link: '/ch04/04' },
          { text: '5. 存在控制可列个有限测度的测度', link: '/ch04/05' },
          { text: '6. 绝对连续的等价刻画', link: '/ch04/06' },
          { text: '7. 绝对连续的 ε-δ 形式', link: '/ch04/07' },
          { text: '8. 用 R-N 导数换测度积分', link: '/ch04/08' },
          { text: '9. R-N 导数的链式法则', link: '/ch04/09' },
          { text: '10. 互相绝对连续与导数的倒数', link: '/ch04/10' },
          { text: '11. R-N 导数的线性', link: '/ch04/11' },
          { text: '12. 奇异性对测度加法封闭', link: '/ch04/12' },
          { text: '13. 证明推论 4.4.6', link: '/ch04/13' },
          { text: '14. 分布函数的三分解', link: '/ch04/14' },
          { text: '15. 均匀分布在有限个点上的分布函数', link: '/ch04/15' },
          { text: '16. 离散型随机变量的期望与方差', link: '/ch04/16' },
          { text: '17. 密度函数的判别', link: '/ch04/17' },
          { text: '18. 连续型随机变量的期望与方差', link: '/ch04/18' },
          { text: '19. 可测分割生成的 σ 域上的条件概率', link: '/ch04/19' },
          { text: '20. 完成引理 4.5.1 的证明', link: '/ch04/20' },
          { text: '21. 完成定理 4.5.2 之 (1) 和 (4) 的证明', link: '/ch04/21' },
          { text: '22. 条件期望是 L₂ 中的最佳逼近', link: '/ch04/22' },
          { text: '23. 离散随机变量给定值的条件概率', link: '/ch04/23' },
          { text: '24. 由有理点上的单调函数造分布函数', link: '/ch04/24' },
          { text: '25. 正则条件分布函数的存在性', link: '/ch04/25' },
          { text: '26. 证明推论 4.5.8', link: '/ch04/26' },
          { text: '27. 条件 Hölder 不等式', link: '/ch04/27' },
          { text: '28. 条件 Minkowski 不等式', link: '/ch04/28' }
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

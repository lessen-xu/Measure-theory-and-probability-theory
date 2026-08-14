# 第六章 独立随机变量序列

程士宏《测度论与概率论基础》习题 6（教材第 213–216 页，第 1–27 题）参考解答。

## 题目一览

| 题号 | 内容 |
| --- | --- |
| [第 1 题](./01) | 两个尾事件 |
| [第 2 题](./02) | 级数和等于给定随机变量是否为尾事件 |
| [第 3 题](./03) | 概率级数收敛推出 a.s. 收敛 |
| [第 4 题](./04) | 适当正则化后 a.s. 趋于零 |
| [第 5 题](./05) | 造出两个独立的同分布副本 |
| [第 6 题](./06) | Chebyshev 不等式与弱大数律 |
| [第 7 题](./07) | 三级数定理中截断方式的替换 |
| [第 8 题](./08) | 两个级数条件保证 a.s. 收敛 |
| [第 9 题](./09) | 用 $\alpha_n$ 阶矩判别级数收敛 |
| [第 10 题](./10) | 取值 $\pm1/n$ 的级数 |
| [第 11 题](./11) | 指数分布的级数 |
| [第 12 题](./12) | 退化的方差刻画 |
| [第 13 题](./13) | 证明引理 6.2.1 和引理 6.2.2 |
| [第 14 题](./14) | 完成推论 6.2.8 的证明 |
| [第 15 题](./15) | 方差条件不必要的例子 |
| [第 16 题](./16) | 两点分布的强大数律 |
| [第 17 题](./17) | 特征函数导数的一致连续性 |
| [第 18 题](./18) | 特征函数在原点的展开式 |
| [第 19 题](./19) | 特征函数可积时的反演公式 |
| [第 20 题](./20) | 密度存在时特征函数趋于零 |
| [第 21 题](./21) | 分位点的存在性与不惟一性 |
| [第 22 题](./22) | 中心化后依概率趋零的三个等价命题 |
| [第 23 题](./23) | Chebyshev 大数律 |
| [第 24 题](./24) | Khinchine 大数律 |
| [第 25 题](./25) | 有界随机变量的中心极限定理 |
| [第 26 题](./26) | 经验分布函数 |
| [第 27 题](./27) | 自正则化的中心极限定理 |

## 记号与定义约定（教材 §1–§5）

### §1 零壹律和三级数定理

- **尾 $\sigma$ 域**：$\mathscr{G}_n=\sigma(\{f_k,k\ge n\})$，$\mathscr{G}=\bigcap_{n=1}^{\infty}\mathscr{G}_n$。$\mathscr{G}$ 中的事件称为**尾事件**，关于 $\mathscr{G}$ 可测的随机变量称为**尾随机变量**。
- **定理 6.1.1（Kolmogorov 零壹律）**：独立随机变量序列的任一尾事件的概率非 $0$ 即 $1$，任一尾随机变量 a.s. 为一个常数。
- **定理 6.1.2（Borel-Cantelli 引理）**：(1) $\sum_nP(A_n)<\infty$ 时 $P(\limsup_nA_n)=0$；(2) $\{A_n\}$ 独立且 $\sum_nP(A_n)=\infty$ 时 $P(\limsup_nA_n)=1$。
- **部分和** $S_n=\sum_{k=1}^{n}f_k$。**引理 6.1.3**：$\sum_nf_n$ a.s. 收敛当且仅当 (6.1.1) 式
  $$\lim_{n\to\infty}\lim_{N\to\infty}P\Big(\max_{n\le l\le N}|S_l-S_n|\ge\varepsilon\Big)=0$$
  对一切 $\varepsilon>0$ 成立。
- **退化**（p.171）：存在 $a\in R$ 使 $f=a$ a.s.，否则称为**非退化**。
- **引理 6.1.4（Kolmogorov 不等式）**：$f_1,\dots,f_n$ 独立、$\mathrm{E}f_k=0$、$\sigma_k^2=\mathrm{var}f_k<\infty$ 时 (6.1.2) 式
  $$P\Big(\max_{1\le k\le n}|S_k|\ge\varepsilon\Big)\le\frac1{\varepsilon^2}\sum_{k=1}^{n}\sigma_k^2;$$
  再设 $|f_k|\le C$ a.s. 且至少一个 $f_k$ 非退化时 (6.1.3) 式 $P(\max_{1\le k\le n}|S_k|<\varepsilon)\le(C+\varepsilon)^2/\sum_{k\le n}\sigma_k^2$。
- **对称化**：$f'$ 与 $f$ 独立同分布，$f^s=f-f'$；序列的情形是 $f_n^s=f_n-f_n'$。教材约定概率空间足够大使这样的 $f'$ 存在，第 5 题给出了这个约定的严格化。
- **命题 6.1.5**：独立、$\mathrm{E}f_n=0$ 且 $\sum_n\sigma_n^2<\infty$ 时 $\sum_nf_n$ a.s. 收敛；反之 $|f_n|\le C$ a.s. 且 $\sum_nf_n$ a.s. 收敛时 $\sum_n\sigma_n^2<\infty$。
- **定理 6.1.6（Kolmogorov 三级数定理）**：$\sum_nf_n$ a.s. 收敛的必要充分条件是对某一个 $C>0$ 或对任意的 $C>0$，
  $$\sum_{n=1}^{\infty}P(|f_n|>C)<\infty;\qquad\sum_{n=1}^{\infty}\mathrm{E}f_nI_{\{|f_n|\le C\}}\ \text{收敛};\qquad\sum_{n=1}^{\infty}\mathrm{var}f_nI_{\{|f_n|\le C\}}<\infty$$
  同时成立，即 (6.1.5) 至 (6.1.7) 式。

### §2 强大数律

- **弱大数律**指部分和依概率收敛，**强大数律**指 a.s. 收敛。
- **引理 6.2.1（Abel 引理）**、**引理 6.2.2**（$u_n\to u$、$v_n\ge0$、$\sum_nv_n=\infty$ 时加权平均趋于 $u$）、**命题 6.2.3（Kronecker 引理）**：$0<b_n\uparrow\infty$ 且 $\sum_na_n/b_n$ 收敛时 $b_n^{-1}\sum_{k\le n}a_k\to0$。
- **定理 6.2.4**：$\{f_n\}\subset L_2$ 独立且 $\sum_n\mathrm{var}f_n/n^2<\infty$ 时 (6.2.2) 式 $(S_n-\mathrm{E}S_n)/n\xrightarrow{\text{a.s.}}0$。
- **引理 6.2.5**、**引理 6.2.6**（(6.2.3) 式）。**定理 6.2.7（Kolmogorov 强大数律）**：独立同分布时 $\mathrm{E}|f_1|<\infty$ 蕴含 (6.2.5) 式 $S_n/n\xrightarrow{\text{a.s.}}\mathrm{E}f_1$；反之 $\lim_nS_n/n$ a.s. 存在时 $\mathrm{E}|f_1|<\infty$ 且极限就是 $\mathrm{E}f_1$。**推论 6.2.8**：$\mathrm{E}f_1$ 有意义时结论仍成立。
- 例 1（正规数集的 L 测度为 $1$）、例 2（$\{0,1\}$ 的可列维乘积空间）、例 3（奇异型随机变量的存在性，第四章第 14 题里用到过）。

### §3 特征函数

- 复值函数的可积性与积分 $\mathrm{E}g=\mathrm{E}(\mathrm{Re}g)+\mathrm{i}\mathrm{E}(\mathrm{Im}g)$，(6.3.1) 式 $|\mathrm{E}g|\le\mathrm{E}|g|$。
- **特征函数**：$\phi(t)=\mathrm{E}\mathrm{e}^{\mathrm{i}tf}$；分布函数的特征函数由 (6.3.2) 式 $\phi(t)=\int_R\mathrm{e}^{\mathrm{i}tx}\mathrm{d}F(x)$ 给出。例 1（在 $a$ 处退化时 $\phi=\mathrm{e}^{\mathrm{i}at}$）、例 2（标准正态 $\mathrm{e}^{-t^2/2}$）、例 3（Cauchy 分布 $\mathrm{e}^{-|t|}$）。
- **引理 6.3.1** 与常用不等式 (6.3.4) 式
  $$\Big|\mathrm{e}^{\mathrm{i}x}-\sum_{j=0}^{n}\frac{(\mathrm{i}x)^j}{j!}\Big|\le\min\Big\{\frac{|x|^{n+1}}{(n+1)!},\frac{2|x|^n}{n!}\Big\},\qquad\forall x\in R,\ n=0,1,2,\dots$$
- **命题 6.3.2**：$\phi(0)=1$、$|\phi|\le1$、$\phi$ 在 $R$ 上一致连续。**命题 6.3.3**：$k$ 阶矩存在时 (6.3.5) 式 $\phi^{(k)}(t)=\mathrm{i}^k\mathrm{E}f^k\mathrm{e}^{\mathrm{i}tf}$，特别地 $\phi^{(k)}(0)=\mathrm{i}^k\mathrm{E}f^k$。**命题 6.3.4**：独立随机变量之和的特征函数是各特征函数之积。
- **定理 6.3.5（反演公式）**：
  $$\overline F(b)-\overline F(a)=\frac1{2\pi}\lim_{T\to\infty}\int_{-T}^{T}\frac{\mathrm{e}^{-\mathrm{i}tb}-\mathrm{e}^{-\mathrm{i}ta}}{-\mathrm{i}t}\phi(t)\mathrm{d}t,\qquad\overline F(x)=\frac{F(x)+F(x-0)}2.$$
  **推论 6.3.6（惟一性定理）**：分布函数由其特征函数惟一决定。
- **定理 6.3.7（连续性定理）**、**定理 6.3.8**（$F_n\xrightarrow{w}F$ 时 $\phi_n\to\phi$ 在每个 $[-T,T]$ 上一致）。
- **命题 6.3.9（Helly 引理）**、**定义 6.3.1 弱列紧**、**命题 6.3.10**、**定义 6.3.2 胎紧**、**命题 6.3.11**（胎紧与弱列紧等价）、**引理 6.3.12**、**定理 6.3.13**。

### §4 弱大数律

- 主要问题：求 $S_n/a_n\xrightarrow{P}0$（(6.4.1) 式）成立的充要条件。**命题 6.4.1**：(6.4.2) 式的三条
  $$\lim_n\sum_{k=1}^{n}P(|f_k|\ge a_n)=0,\quad\lim_n\frac1{a_n}\sum_{k=1}^{n}\mathrm{E}f_kI_{\{|f_k|<a_n\}}=0,\quad\lim_n\frac1{a_n^2}\sum_{k=1}^{n}\mathrm{var}f_kI_{\{|f_k|<a_n\}}=0$$
  蕴含 (6.4.1) 式。
- **引理 6.4.2**。**$q$ 分位点**：满足 $P(f\le m_q)\ge q$ 与 $P(f\ge m_q)\ge1-q$ 的实数；$q=1/2$ 时称**中位数**。**引理 6.4.3**：$P(|f-m|\ge\varepsilon)\le2P(|f^s|\ge\varepsilon)\le4P(|f-a|\ge\varepsilon/2)$（教材末端印成 $4P(|f-a|\ge1/2)$，按其证明应为 $\varepsilon/2$，这里写正确形式）。
- **引理 6.4.4**、**一致渐近可忽略**（$\lim_n\max_{1\le k\le n}P(|g_{n,k}|\ge\varepsilon)=0$）、**命题 6.4.5**、**引理 6.4.6**、**命题 6.4.7**。
- **定理 6.4.8**：$0<a_n\uparrow\infty$ 时 (6.4.1) 式成立的充要条件是 (6.4.2) 式成立。**定理 6.4.9**：独立同分布时，$S_n/n-b_n\xrightarrow{P}0$ 对某个 $\{b_n\subset R\}$ 成立当且仅当 (6.4.8) 式 $\lim_nnP(|f_1|\ge n)=0$。

### §5 中心极限定理

- $\{S_n\}$ 服从**中心极限定理**指存在正数列 $\{a_n\}$ 与实数列 $\{b_n\}$ 使 $(S_n-b_n)/a_n\xrightarrow{d}\Phi$，$\Phi$ 是标准正态分布函数。例 1（Cauchy）、例 2（$S_n/\sqrt{n\ln n}\xrightarrow{d}\Phi$ 而方差不存在）。
- 记号：$M_n=\sum_{k\le n}\mathrm{E}f_k$、$D_n^2=\sum_{k\le n}\sigma_k^2$、$g_{n,k}=(f_k-\mathrm{E}f_k)/D_n$，(6.5.1) 式 $\sum_{k\le n}\sigma_{n,k}^2=1$。
- **Lindeberg 条件**：对任给 $\varepsilon>0$
  $$\lim_{n\to\infty}\frac1{D_n^2}\sum_{k=1}^{n}\mathrm{E}(f_k-\mathrm{E}f_k)^2I_{\{|f_k-\mathrm{E}f_k|\ge\varepsilon D_n\}}=0,$$
  用阵列 $\{g_{n,k}\}$ 表达即 (6.5.3) 式。**引理 6.5.1**、**引理 6.5.2**。
- **定理 6.5.3（Lindeberg 定理）**：独立不全退化且满足 Lindeberg 条件时 (6.5.4) 式 $(S_n-M_n)/D_n\xrightarrow{d}\Phi$。**定理 6.5.4（Lyapounov 定理）**、**定理 6.5.5**（独立同分布有正方差时 $(S_n-n\mathrm{E}f_1)/(\sqrt n\sigma)\xrightarrow{d}\Phi$）、**定理 6.5.6（Feller 定理）**、**定理 6.5.7**。

### 前五章中反复引用的结论

- **定理 1.5.1** 与**定理 1.5.2**（可测函数的运算与上下极限）、**定理 1.5.3**（简单函数逼近）、第一章第 22 题（连续函数可测）、第一章第 24 题（收敛点集的可测性）。
- **命题 2.5.1**（(2.5.2) 式，a.e. 收敛的判别）、**定理 2.5.3**、**定理 2.5.6**（依概率收敛蕴含依分布收敛）、**引理 2.5.5**（左连续逆，第二章第 30 题）、第二章第 20 题（用半环中的集合逼近）、第二章第 28 题（依分布收敛加依概率趋零）。
- **定理 3.1.3**、**定理 3.1.4** 与**推论 3.1.5**、**定理 3.2.1**、**定理 3.2.4**（Levi）、**定理 3.2.8**（Lebesgue 控制收敛）、**定理 3.2.10**（变数替换）、**引理 3.3.1**、**定理 3.4.1**、第三章第 2 题（Chebyshev 不等式）、第三章第 23 题（Riemann 可积时两个积分相等）、第三章第 26 题（方差公式）。
- 第四章第 8 题（用 R-N 导数换测度积分）。
- **命题 5.1.2**、**定理 5.1.3**、**定理 5.1.7**（Fubini）、**命题 5.2.3**、**推论 5.2.6**（第五章第 16 题）、**命题 5.2.7**（第五章第 17 题）、第五章第 22 题（给定分布函数列造独立随机变量序列）。

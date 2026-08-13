# 第一章 可测空间和可测映射 · 习题解答

程士宏《测度论与概率论基础》习题 1（教材第 20–22 页，第 1–25 题）参考解答。

## 记号与定义约定（教材 §1–§5）

- **指示函数**（p.1）：$I_A(x)=1\ (x\in A)$，$I_A(x)=0\ (x\notin A)$。
- **$\pi$ 系**（p.3）：非空集合系，对有限交封闭。
- **半环**（p.4）：满足下列条件的 $\pi$ 系 $\mathscr{D}$——对任意 $A,B\in\mathscr{D}$ 且 $A\supset B$，存在有限个两两不交的 $C_1,\dots,C_n\in\mathscr{D}$ 使 $A\setminus B=\bigcup_{k=1}^n C_k$。
- **环**（p.4）：非空集合系，对并与差封闭。
- **域**（p.5）：满足 $X\in\mathscr{A}$ 且 $A\in\mathscr{A}\Rightarrow A^c\in\mathscr{A}$ 的 $\pi$ 系。
- **单调系、$\lambda$ 系、$\sigma$ 域、$\sigma$ 环**：见 p.5–7。
- 常用集合系（教材 p.4 例 2、例 4）：
  $$\mathscr{P}_R=\{(-\infty,a]:a\in R\},\qquad
  \mathscr{D}_R=\{(a,b]:a,b\in R\}\ \text{（左开右闭）},$$
  $$\mathscr{R}_R=\bigcup_{n=1}^{\infty}\Big\{\bigcup_{k=1}^{n}(a_k,b_k]:a_k,b_k\in R\Big\},\qquad
  \mathscr{O}_R=\{(a,b):a,b\in R,\ a\le b\},$$
  $$\mathscr{B}_R=\sigma(\mathscr{D}_R)=\sigma(\mathscr{P}_R).$$
- **生成**（定义 1.3.1）：$r(\mathscr{E}),m(\mathscr{E}),l(\mathscr{E}),\sigma(\mathscr{E})$ 分别是由 $\mathscr{E}$ 生成的环、单调系、$\lambda$ 系、$\sigma$ 域，即包含 $\mathscr{E}$ 的最小者。
- **可测函数**（定义 1.4.1）：$(X,\mathscr{F})\to(\overline{R},\mathscr{B}_{\overline{R}})$ 的可测映射；取值于 $R$ 者称为**随机变量**。约定 $0\cdot(\pm\infty)=0$（p.12）。
- **简单函数**（p.17）：存在有限可测分割 $\{A_i\in\mathscr{F},i=1,\dots,n\}$ 和实数 $\{a_i\}$ 使 $f=\sum_{i=1}^n a_iI_{A_i}$。

---

## 第 1 题

**题目** 证明下列指示函数的性质。

以下等式均理解为对每个 $x\in X$ 都成立的函数等式。

### (1) $I_{A\cap B}=I_AI_B$

任取 $x\in X$。

- 若 $x\in A\cap B$，则 $I_A(x)=I_B(x)=1$，故 $I_A(x)I_B(x)=1=I_{A\cap B}(x)$。
- 若 $x\notin A\cap B$，则 $x\notin A$ 或 $x\notin B$，从而 $I_A(x),I_B(x)$ 中至少一个为 $0$，故 $I_A(x)I_B(x)=0=I_{A\cap B}(x)$。

因此 $I_{A\cap B}=I_AI_B$。

### (2) 若 $A\cap B=\varnothing$，则 $I_{A\cup B}=I_A+I_B$

任取 $x\in X$。由 $A\cap B=\varnothing$ 知 $x$ 不能同时属于 $A$ 与 $B$。

- 若 $x\in A\cup B$，则 $x$ 恰属于 $A,B$ 之一，故 $I_A(x)+I_B(x)=1=I_{A\cup B}(x)$。
- 若 $x\notin A\cup B$，则 $I_A(x)+I_B(x)=0=I_{A\cup B}(x)$。

故 $I_{A\cup B}=I_A+I_B$。

### (3) 若 $A\supset B$，则 $I_{A\setminus B}=I_A-I_B$

任取 $x\in X$。由 $B\subset A$ 知只有三种可能：

1. $x\in A\setminus B$：$I_A(x)=1,I_B(x)=0$，故 $I_A(x)-I_B(x)=1=I_{A\setminus B}(x)$；
2. $x\in B$：此时 $x\in A$，故 $I_A(x)-I_B(x)=1-1=0=I_{A\setminus B}(x)$；
3. $x\notin A$：此时也有 $x\notin B$，故 $I_A(x)-I_B(x)=0=I_{A\setminus B}(x)$。

故 $I_{A\setminus B}=I_A-I_B$。

### (4) $I_{A\triangle B}=I_A(1-I_B)+I_B(1-I_A)$

首先 $I_{B^c}=1-I_B$，$I_{A^c}=1-I_A$。于是由 (1)，
$$I_{A\setminus B}=I_{A\cap B^c}=I_AI_{B^c}=I_A(1-I_B),\qquad
I_{B\setminus A}=I_B(1-I_A).$$
因 $A\setminus B$ 与 $B\setminus A$ 不交，由 (2) 及 $A\triangle B=(A\setminus B)\cup(B\setminus A)$ 得
$$I_{A\triangle B}=I_{A\setminus B}+I_{B\setminus A}=I_A(1-I_B)+I_B(1-I_A)=I_A+I_B-2I_AI_B.$$

### (5) 若 $\{A_n\}$ 单调，则 $I_{\lim_n A_n}=\lim_n I_{A_n}$

**情形一：$A_n\uparrow$，$\lim_n A_n=\bigcup_{n=1}^\infty A_n$。**

- 若 $x\in\bigcup_n A_n$，则存在 $N$ 使 $x\in A_N$；由非降性，$n\ge N$ 时 $x\in A_n$，即 $I_{A_n}(x)=1$，故 $\lim_n I_{A_n}(x)=1=I_{\cup_nA_n}(x)$。
- 若 $x\notin\bigcup_n A_n$，则对一切 $n$ 有 $I_{A_n}(x)=0$，故 $\lim_n I_{A_n}(x)=0=I_{\cup_nA_n}(x)$。

**情形二：$A_n\downarrow$，$\lim_n A_n=\bigcap_{n=1}^\infty A_n$。**

- 若 $x\in\bigcap_n A_n$，则一切 $n$ 有 $I_{A_n}(x)=1$，故极限为 $1=I_{\cap_nA_n}(x)$。
- 若 $x\notin\bigcap_n A_n$，则存在 $N$ 使 $x\notin A_N$；由非增性，$n\ge N$ 时 $A_n\subset A_N$，故 $x\notin A_n$，$I_{A_n}(x)=0$，极限为 $0=I_{\cap_nA_n}(x)$。

综上 $I_{\lim_n A_n}=\lim_n I_{A_n}$。

### (6) $I_{\liminf_n A_n}=\liminf_n I_{A_n}$，$I_{\limsup_n A_n}=\limsup_n I_{A_n}$

对任意集合族 $\{B_k\}$，因指示函数只取 $0,1$ 两值，交的指示函数为 $1$ 当且仅当所有指示函数为 $1$；并的指示函数为 $1$ 当且仅当至少一个为 $1$。故
$$I_{\cap_kB_k}=\inf_k I_{B_k},\qquad I_{\cup_kB_k}=\sup_k I_{B_k}.$$

于是对任意 $x\in X$，
$$I_{\liminf_nA_n}(x)=I_{\bigcup_{n\ge1}\bigcap_{k\ge n}A_k}(x)
=\sup_{n\ge1}I_{\bigcap_{k\ge n}A_k}(x)
=\sup_{n\ge1}\inf_{k\ge n}I_{A_k}(x)
=\liminf_{n\to\infty}I_{A_n}(x),$$
$$I_{\limsup_nA_n}(x)=I_{\bigcap_{n\ge1}\bigcup_{k\ge n}A_k}(x)
=\inf_{n\ge1}I_{\bigcup_{k\ge n}A_k}(x)
=\inf_{n\ge1}\sup_{k\ge n}I_{A_k}(x)
=\limsup_{n\to\infty}I_{A_n}(x).$$

---

## 第 2 题

**题目** 设 $\{A_n,n=1,2,\dots\}$ 两两不交，证明 $\lim_{n\to\infty}A_n=\varnothing$。

$x\in\limsup_nA_n$ 当且仅当 $x$ 属于无穷多个 $A_n$，而由两两不交知任意 $x$ 至多属于一个 $A_n$，故
$$\limsup_{n\to\infty}A_n=\varnothing .$$
又 $\liminf_nA_n\subset\limsup_nA_n$，所以 $\liminf_nA_n=\limsup_nA_n=\varnothing$，即
$$\lim_{n\to\infty}A_n=\varnothing .$$

---

## 第 3 题

**题目** 证明空集属于半环。

设 $\mathscr{D}$ 是半环。半环首先是 $\pi$ 系，而 $\pi$ 系按定义是非空集合系，故可取 $A\in\mathscr{D}$。由 $A\supset A$ 及半环定义，存在有限个两两不交的 $C_1,\dots,C_n\in\mathscr{D}$ 使
$$\varnothing=A\setminus A=\bigcup_{k=1}^{n}C_k .$$
由于并为空集，每个 $C_k\subset\varnothing$，即 $C_k=\varnothing$。故 $\varnothing=C_1\in\mathscr{D}$。

---

## 第 4 题

**题目** 证明：如果 $\mathscr{D}$ 是一个半环且 $A,B\in\mathscr{D}$，则 $A\setminus B$ 可表成 $\mathscr{D}$ 中有限个不交集之并。

因半环是 $\pi$ 系（命题 1.2.1），故
$$A\cap B\in\mathscr{D},$$
且显然 $A\supset A\cap B$。由半环定义，存在两两不交的 $C_1,\dots,C_m\in\mathscr{D}$ 使
$$A\setminus(A\cap B)=\bigcup_{i=1}^{m}C_i .$$
而 $A\setminus(A\cap B)=A\setminus B$，所以
$$A\setminus B=\bigsqcup_{i=1}^{m}C_i ,$$
即 $A\setminus B$ 是 $\mathscr{D}$ 中有限个不交集之并。

---

## 第 5 题

**题目** 证明 $\mathscr{R}_R$ 是 $R$ 上的环。

按教材 p.4 例 4，$\mathscr{R}_R$ 由有限个左开右闭区间 $(a,b]$ 之并组成。设
$$E=\bigcup_{i=1}^{m}I_i,\qquad F=\bigcup_{j=1}^{n}J_j\in\mathscr{R}_R,\qquad I_i,J_j\in\mathscr{D}_R .$$

**非空**：取 $a=b$ 得 $\varnothing=(a,a]\in\mathscr{D}_R\subset\mathscr{R}_R$，故 $\mathscr{R}_R\ne\varnothing$。

**对并封闭**：$E\cup F=\bigcup_{i}I_i\cup\bigcup_{j}J_j$ 仍是有限个左开右闭区间之并，故 $E\cup F\in\mathscr{R}_R$。

**对差封闭**：由第 9 题 (1)，$\mathscr{D}_R$ 是半环，故由第 4 题，任意 $I,J\in\mathscr{D}_R$ 有 $I\setminus J$ 为 $\mathscr{D}_R$ 中有限个不交集之并（具体地至多两个：$(a,b]\setminus(c,d]=(a,b\wedge c]\ \dot\cup\ (a\vee d,b]$）。于是逐次作差
$$I_i\setminus F=\Big(\cdots\big((I_i\setminus J_1)\setminus J_2\big)\cdots\Big)\setminus J_n ,$$
每一步都把"有限个 $\mathscr{D}_R$ 中集合之并"再减去一个 $\mathscr{D}_R$ 中集合，结果仍是有限个 $\mathscr{D}_R$ 中集合之并。故 $I_i\setminus F\in\mathscr{R}_R$，从而
$$E\setminus F=\bigcup_{i=1}^{m}(I_i\setminus F)\in\mathscr{R}_R .$$

所以 $\mathscr{R}_R$ 非空且对并、差封闭，即 $\mathscr{R}_R$ 是 $R$ 上的环。

---

## 第 6 题

**题目** 证明：如果 $\mathscr{R}$ 是一个环（或 $\sigma$ 环）而且 $X\in\mathscr{R}$，则它也是域（或 $\sigma$ 域）。

设 $\mathscr{R}$ 是环且 $X\in\mathscr{R}$。

1. $X\in\mathscr{R}$（已知）。
2. 对任意 $A\in\mathscr{R}$，由环对差封闭得 $A^c=X\setminus A\in\mathscr{R}$。
3. $\mathscr{R}$ 是 $\pi$ 系：环必是半环、半环必是 $\pi$ 系（命题 1.2.1）；也可直接验证 $A\cap B=A\setminus(A\setminus B)\in\mathscr{R}$。

故 $\mathscr{R}$ 满足域的三条要求，是域。

若 $\mathscr{R}$ 还是 $\sigma$ 环，则它对可列并封闭；结合上面证得的对余封闭与 $X\in\mathscr{R}$，即知 $\mathscr{R}$ 是 $\sigma$ 域。

---

## 第 7 题

**题目** 证明：如果 $\mathscr{R}$ 是一个环，则 $\mathscr{F}=\mathscr{R}\cup\{A^c:A\in\mathscr{R}\}$ 是域。

余集均相对全集 $X$ 而言。

**含 $X$**：由第 3 题（环必是半环）知 $\varnothing\in\mathscr{R}$，故 $X=\varnothing^c\in\mathscr{F}$。

**对余封闭**：设 $E\in\mathscr{F}$。若 $E\in\mathscr{R}$，则按 $\mathscr{F}$ 的定义 $E^c\in\mathscr{F}$；若 $E=A^c$ 且 $A\in\mathscr{R}$，则 $E^c=A\in\mathscr{R}\subset\mathscr{F}$。

**对有限并封闭**：设 $A,B\in\mathscr{R}$，则
$$A\cup B\in\mathscr{R}\subset\mathscr{F};$$
$$A\cup B^c=(B\setminus A)^c\in\mathscr{F}\quad(\text{因 }B\setminus A\in\mathscr{R});$$
$$A^c\cup B=(A\setminus B)^c\in\mathscr{F};$$
$$A^c\cup B^c=(A\cap B)^c\in\mathscr{F}\quad\big(\text{因 }A\cap B=A\setminus(A\setminus B)\in\mathscr{R}\big).$$

**是 $\pi$ 系**：由上面两条，$A\cap B=(A^c\cup B^c)^c\in\mathscr{F}$。

故 $\mathscr{F}$ 是域。

---

## 第 8 题

**题目** 证明：如果域对可列不交并运算是封闭的，则它是 $\sigma$ 域。

设域 $\mathscr{F}$ 对可列不交并封闭。任取 $A_1,A_2,\dots\in\mathscr{F}$，令
$$B_1=A_1,\qquad B_n=A_n\setminus\bigcup_{k=1}^{n-1}A_k\quad(n\ge2).$$
域必是环（命题 1.2.1），故对有限并与差封闭，从而每个 $B_n\in\mathscr{F}$。且 $\{B_n\}$ 两两不交，
$$\bigcup_{n=1}^{\infty}B_n=\bigcup_{n=1}^{\infty}A_n .$$
由题设，$\bigcup_{n\ge1}B_n\in\mathscr{F}$，即 $\bigcup_{n\ge1}A_n\in\mathscr{F}$。

所以 $\mathscr{F}$ 含 $X$、对余封闭、对可列并封闭，是 $\sigma$ 域。

---

## 第 9 题

按教材 p.4 例 2，$\mathscr{D}_R=\{(a,b]:a,b\in R\}$ 为左开右闭区间全体，$\mathscr{O}_R=\{(a,b):a,b\in R,a\le b\}$ 为开区间全体。

### (1) $\mathscr{D}_R$ 是 $R$ 上的半环

**$\pi$ 系**：$\varnothing=(a,a]\in\mathscr{D}_R$，故非空；且对 $A=(a,b],B=(c,d]$，
$$A\cap B=\begin{cases}(a\vee c,\ b\wedge d], & a\vee c<b\wedge d,\\[2pt] \varnothing, & \text{其他},\end{cases}$$
均属 $\mathscr{D}_R$。

**差的分解**：对任意 $A=(a,b],B=(c,d]\in\mathscr{D}_R$，
$$A\setminus B=(a,\ b\wedge c\,]\ \dot\cup\ (a\vee d,\ b],$$
右端两个区间都属于 $\mathscr{D}_R$（空者可删去），且互不相交：若两块都非空，则 $a<c$ 且 $d<b$，于是 $b\wedge c=c\le d=a\vee d$。

特别地，当 $A\supset B$ 时上式给出半环定义所需的分解。故 $\mathscr{D}_R$ 是半环。

### (2) $\mathscr{D}=\{(a,b),(a,b],[a,b),[a,b]:a,b\in R,\ a\le b\}$ 是 $R$ 上的半环

**$\pi$ 系**：$\varnothing=(a,a)\in\mathscr{D}$；两个区间之交仍是区间，其左端点取二者左端点的较大者、开闭性由该端点是否同属两区间决定，右端点同理，故交仍属 $\mathscr{D}$（或为空）。

**差的分解**：设 $A,B\in\mathscr{D}$，$A\supset B$。若 $B=\varnothing$，则 $A\setminus B=A\in\mathscr{D}$。否则设 $B$ 的端点为 $c\le d$，则
$$A\setminus B=\{x\in A:x<c\ \text{或}\ (x=c,\ c\notin B)\}\ \dot\cup\ \{x\in A:x>d\ \text{或}\ (x=d,\ d\notin B)\},$$
左块是以 $A$ 的左端点为左端点、以 $c$ 为右端点的区间（$c$ 处闭当且仅当 $B$ 在 $c$ 处开），右块类似；二者都属于 $\mathscr{D}$ 且不交。故 $\mathscr{D}$ 是半环。

### (3) $\mathscr{O}_R$ 不是 $R$ 上的半环

$\mathscr{O}_R$ 是 $\pi$ 系（两开区间之交仍为开区间），失效的是差的分解条件。取
$$A=(0,2),\qquad B=(1,2),$$
则 $A,B\in\mathscr{O}_R$ 且 $A\supset B$，但
$$A\setminus B=(0,1].$$
若 $(0,1]$ 能表成有限个开区间之并，则它是开集；然而 $1$ 不是 $(0,1]$ 的内点，$(0,1]$ 不是开集，矛盾。故 $\mathscr{O}_R$ 不是半环。

### (4) $\sigma(\mathscr{D}_R)=\sigma(\mathscr{O}_R)$

对任意 $a<b$，
$$(a,b)=\bigcup_{\substack{n\ge1\\ b-1/n>a}}\big(a,\ b-\tfrac1n\big]\in\sigma(\mathscr{D}_R),$$
故 $\mathscr{O}_R\subset\sigma(\mathscr{D}_R)$，从而 $\sigma(\mathscr{O}_R)\subset\sigma(\mathscr{D}_R)$。

反之，对任意 $a\le b$，
$$(a,b]=\bigcap_{n=1}^{\infty}\big(a,\ b+\tfrac1n\big)\in\sigma(\mathscr{O}_R),$$
故 $\mathscr{D}_R\subset\sigma(\mathscr{O}_R)$，从而 $\sigma(\mathscr{D}_R)\subset\sigma(\mathscr{O}_R)$。

综上 $\sigma(\mathscr{D}_R)=\sigma(\mathscr{O}_R)$。

---

## 第 10 题

**题目** 设 $\{\varnothing,E_n,n=1,2,\dots\}$ 是 $X$ 中两两不交的集合。证明它是一个半环，并求由这个半环生成的 $\sigma$ 域。

记 $\mathscr{S}=\{\varnothing,E_1,E_2,\dots\}$，$E_i\cap E_j=\varnothing\ (i\ne j)$。

**$\mathscr{S}$ 是半环**：$\varnothing\in\mathscr{S}$ 故非空；对交封闭，因为
$$E_i\cap E_j=\begin{cases}E_i,&i=j,\\ \varnothing,&i\ne j,\end{cases}$$
且 $\varnothing$ 与任何集合之交为 $\varnothing$。又 $\mathscr{S}$ 中的包含关系只有 $\varnothing\subset E_i$ 与 $E_i\subset E_i$（非空的 $E_i,E_j$ 在 $i\ne j$ 时互不包含），而
$$E_i\setminus E_i=\varnothing\in\mathscr{S},\qquad E_i\setminus\varnothing=E_i\in\mathscr{S},$$
均为 $\mathscr{S}$ 中有限个不交集之并。故 $\mathscr{S}$ 是半环。

**生成的 $\sigma$ 域**：令
$$R=X\setminus\bigcup_{n=1}^{\infty}E_n ,$$
则 $R,E_1,E_2,\dots$ 两两不交且并为 $X$。断言
$$\sigma(\mathscr{S})=\Big\{\bigcup_{n\in I}E_n:I\subset N\Big\}\ \cup\ \Big\{R\cup\bigcup_{n\in I}E_n:I\subset N\Big\}\ \stackrel{\text{def}}{=}\ \mathscr{G}.$$

事实上：

- $\varnothing\in\mathscr{G}$（取 $I=\varnothing$），$X=R\cup\bigcup_{n\in N}E_n\in\mathscr{G}$；
- 对余封闭：$\big(\bigcup_{n\in I}E_n\big)^c=R\cup\bigcup_{n\notin I}E_n\in\mathscr{G}$，$\big(R\cup\bigcup_{n\in I}E_n\big)^c=\bigcup_{n\notin I}E_n\in\mathscr{G}$；
- 对可列并封闭：诸集之并中若无一含 $R$，则并为第一类；若至少一个含 $R$，则并为第二类，指标集取诸 $I$ 之并即可。

故 $\mathscr{G}$ 是 $\sigma$ 域且 $\mathscr{G}\supset\mathscr{S}$。另一方面，任何包含 $\mathscr{S}$ 的 $\sigma$ 域必含一切 $\bigcup_{n\in I}E_n$（可列并）及其余集 $R\cup\bigcup_{n\notin I}E_n$，即必含 $\mathscr{G}$。所以 $\sigma(\mathscr{S})=\mathscr{G}$。

特别地，若 $R=\varnothing$（即 $\bigcup_nE_n=X$），两部分重合，
$$\sigma(\mathscr{S})=\Big\{\bigcup_{n\in I}E_n:I\subset N\Big\}.$$

---

## 第 11 题

**题目** 设 $X$ 是一可列集，令 $\mathscr{E}=\{\{x\}:x\in X\}$，求 $\sigma(\mathscr{E})$。

因 $X$ 可列，任意 $A\subset X$ 至多可列，故可写成至多可列个单点集之并：
$$A=\bigcup_{x\in A}\{x\}.$$
由 $\sigma$ 域对可列并封闭得 $A\in\sigma(\mathscr{E})$。因此 $\mathscr{P}(X)\subset\sigma(\mathscr{E})$，而显然 $\sigma(\mathscr{E})\subset\mathscr{P}(X)$，所以
$$\sigma(\mathscr{E})=\mathscr{P}(X)=\{A:A\subset X\}.$$

---

## 第 12 题

**题目** 设 $\mathscr{D}$ 是一个半环，证明 $\sigma(\mathscr{D})=\sigma(r(\mathscr{D}))$。

由 $\mathscr{D}\subset r(\mathscr{D})$ 得 $\sigma(\mathscr{D})\subset\sigma(r(\mathscr{D}))$。

反之，$\sigma(\mathscr{D})$ 是 $\sigma$ 域，因而是域，因而是环（命题 1.2.1），且含 $\mathscr{D}$；由 $r(\mathscr{D})$ 是包含 $\mathscr{D}$ 的最小环得
$$r(\mathscr{D})\subset\sigma(\mathscr{D}),$$
于是 $\sigma(r(\mathscr{D}))\subset\sigma(\sigma(\mathscr{D}))=\sigma(\mathscr{D})$。

故 $\sigma(\mathscr{D})=\sigma(r(\mathscr{D}))$。

---

## 第 13 题

**题目** 设 $A$ 是 $X$ 中的非空集合，$\mathscr{F}$ 是 $X$ 上的 $\sigma$ 域。证明 $(A,A\cap\mathscr{F})$ 是一个可测空间，其中 $A\cap\mathscr{F}=\{A\cap E:E\in\mathscr{F}\}$。

只需证 $A\cap\mathscr{F}$ 是 $A$ 上的 $\sigma$ 域。

1. **含全集**：$X\in\mathscr{F}$，故 $A=A\cap X\in A\cap\mathscr{F}$。
2. **对余封闭**（余相对于 $A$）：设 $B=A\cap E$，$E\in\mathscr{F}$，则
   $$A\setminus B=A\setminus(A\cap E)=A\cap E^c\in A\cap\mathscr{F},$$
   因为 $E^c\in\mathscr{F}$。
3. **对可列并封闭**：设 $B_n=A\cap E_n$，$E_n\in\mathscr{F}$，则
   $$\bigcup_{n=1}^{\infty}B_n=\bigcup_{n=1}^{\infty}(A\cap E_n)=A\cap\bigcup_{n=1}^{\infty}E_n\in A\cap\mathscr{F}.$$

故 $A\cap\mathscr{F}$ 是 $A$ 上的 $\sigma$ 域，$(A,A\cap\mathscr{F})$ 是可测空间。

---

## 第 14 题

**题目** 设 $\varnothing\ne A\subset X$，$\mathscr{E}$ 是 $X$ 上的集合系。试问 $m(A\cap\mathscr{E})=A\cap m(\mathscr{E})$ 是否成立？

**结论：一般不成立**，只有单向包含
$$A\cap m(\mathscr{E})\subset m(A\cap\mathscr{E}).$$

**包含关系的证明** 令
$$\mathscr{H}=\{F\subset X:\ A\cap F\in m(A\cap\mathscr{E})\}.$$
若 $F_n\uparrow F$，则 $A\cap F_n\uparrow A\cap F$；若 $F_n\downarrow F$，则 $A\cap F_n\downarrow A\cap F$。由 $m(A\cap\mathscr{E})$ 是单调系知 $\mathscr{H}$ 是单调系。又对每个 $E\in\mathscr{E}$ 有 $A\cap E\in A\cap\mathscr{E}\subset m(A\cap\mathscr{E})$，故 $\mathscr{H}\supset\mathscr{E}$。由 $m(\mathscr{E})$ 的最小性得 $m(\mathscr{E})\subset\mathscr{H}$，即对一切 $F\in m(\mathscr{E})$ 有 $A\cap F\in m(A\cap\mathscr{E})$，这就是所要的包含关系。

**反向包含的反例** 取两个不交的可列集
$$A=\{a_0,a_1,a_2,\dots\},\qquad B=\{b_1,b_2,\dots\},\qquad X=A\cup B,$$
并令
$$E_n=\{a_1,\dots,a_n,b_n\},\qquad \mathscr{E}=\{E_n:n\ge1\}.$$

一方面，$A\cap E_n=\{a_1,\dots,a_n\}\uparrow C:=\{a_1,a_2,\dots\}$，故
$$C\in m(A\cap\mathscr{E}).$$

另一方面，令 $\mathscr{M}=\{\varnothing,X\}\cup\{E_n:n\ge1\}$。当 $m\ne n$ 时 $b_m\in E_m\setminus E_n$，故诸 $E_n$ 两两不可比较；于是 $\mathscr{M}$ 中的单调序列只能是最终常值的，或形如 $\varnothing\subset E_n\subset X$ 一类，其极限仍在 $\mathscr{M}$ 中。所以 $\mathscr{M}$ 是包含 $\mathscr{E}$ 的单调系，从而
$$m(\mathscr{E})\subset\mathscr{M}.$$
而
$$A\cap\mathscr{M}=\{\varnothing,\ A\}\cup\big\{\{a_1,\dots,a_n\}:n\ge1\big\},$$
其中 $C\ne A$（因 $a_0\in A\setminus C$），且 $C$ 不等于 $\varnothing$ 或任何 $\{a_1,\dots,a_n\}$。故
$$C\notin A\cap m(\mathscr{E}).$$

因此 $m(A\cap\mathscr{E})\ne A\cap m(\mathscr{E})$，等式一般不成立。

---

## 第 15 题

**题目** 证明：定理 1.3.3 等价于推论 1.3.4；定理 1.3.5 等价于推论 1.3.6。

四个命题为：

- **定理 1.3.3** 如果 $\mathscr{A}$ 是域，则 $\sigma(\mathscr{A})=m(\mathscr{A})$。
- **推论 1.3.4** 如果 $\mathscr{A}$ 是域，$\mathscr{M}$ 是单调系，则 $\mathscr{A}\subset\mathscr{M}\Rightarrow\sigma(\mathscr{A})\subset\mathscr{M}$。
- **定理 1.3.5** 如果 $\mathscr{P}$ 是 $\pi$ 系，则 $\sigma(\mathscr{P})=l(\mathscr{P})$。
- **推论 1.3.6** 如果 $\mathscr{P}$ 是 $\pi$ 系，$\mathscr{L}$ 是 $\lambda$ 系，则 $\mathscr{P}\subset\mathscr{L}\Rightarrow\sigma(\mathscr{P})\subset\mathscr{L}$。

**引理** 对任意集合系 $\mathscr{E}$，有 $m(\mathscr{E})\subset\sigma(\mathscr{E})$ 且 $l(\mathscr{E})\subset\sigma(\mathscr{E})$。

*证* $\sigma(\mathscr{E})$ 是 $\sigma$ 域；由命题 1.2.2，$\sigma$ 域是 $\lambda$ 系，$\lambda$ 系是单调系。故 $\sigma(\mathscr{E})$ 既是包含 $\mathscr{E}$ 的单调系，又是包含 $\mathscr{E}$ 的 $\lambda$ 系。再由 $m(\mathscr{E})$、$l(\mathscr{E})$ 的最小性即得。

### (1) 定理 1.3.3 $\Longrightarrow$ 推论 1.3.4

设 $\mathscr{A}$ 是域，$\mathscr{M}$ 是单调系且 $\mathscr{A}\subset\mathscr{M}$。由 $m(\mathscr{A})$ 是包含 $\mathscr{A}$ 的最小单调系得
$$m(\mathscr{A})\subset\mathscr{M}.$$
再由定理 1.3.3，
$$\sigma(\mathscr{A})=m(\mathscr{A})\subset\mathscr{M}.$$

### (2) 推论 1.3.4 $\Longrightarrow$ 定理 1.3.3

设 $\mathscr{A}$ 是域。

- 在推论 1.3.4 中取 $\mathscr{M}=m(\mathscr{A})$：它是单调系且包含 $\mathscr{A}$，故 $\sigma(\mathscr{A})\subset m(\mathscr{A})$。
- 由引理，$m(\mathscr{A})\subset\sigma(\mathscr{A})$。

故 $\sigma(\mathscr{A})=m(\mathscr{A})$。

### (3) 定理 1.3.5 $\Longrightarrow$ 推论 1.3.6

设 $\mathscr{P}$ 是 $\pi$ 系，$\mathscr{L}$ 是 $\lambda$ 系且 $\mathscr{P}\subset\mathscr{L}$。由 $l(\mathscr{P})$ 的最小性得 $l(\mathscr{P})\subset\mathscr{L}$，再由定理 1.3.5，
$$\sigma(\mathscr{P})=l(\mathscr{P})\subset\mathscr{L}.$$

### (4) 推论 1.3.6 $\Longrightarrow$ 定理 1.3.5

设 $\mathscr{P}$ 是 $\pi$ 系。在推论 1.3.6 中取 $\mathscr{L}=l(\mathscr{P})$，得 $\sigma(\mathscr{P})\subset l(\mathscr{P})$；又由引理 $l(\mathscr{P})\subset\sigma(\mathscr{P})$。故 $\sigma(\mathscr{P})=l(\mathscr{P})$。

综上，定理 1.3.3 与推论 1.3.4 等价，定理 1.3.5 与推论 1.3.6 等价。

---

## 第 16 题

**题目** 证明命题 1.4.1。

设 $f$ 是 $X$ 到 $Y$ 的映射，对 $B\subset Y$，$f^{-1}B=\{x\in X:f(x)\in B\}$。

### (1) $f^{-1}\varnothing=\varnothing$，$f^{-1}Y=X$

$x\in f^{-1}\varnothing\iff f(x)\in\varnothing$，此式对任何 $x$ 都不成立，故 $f^{-1}\varnothing=\varnothing$。

因 $f$ 取值于 $Y$，对每个 $x\in X$ 均有 $f(x)\in Y$，故 $f^{-1}Y=X$。

### (2) $B_1\subset B_2\Rightarrow f^{-1}B_1\subset f^{-1}B_2$

设 $x\in f^{-1}B_1$，则 $f(x)\in B_1\subset B_2$，故 $f(x)\in B_2$，即 $x\in f^{-1}B_2$。

### (3) $(f^{-1}B)^c=f^{-1}B^c$，$\forall B\subset Y$

左端的余相对于 $X$，右端的余相对于 $Y$。对任意 $x\in X$，
$$x\in(f^{-1}B)^c\iff x\notin f^{-1}B\iff f(x)\notin B\iff f(x)\in B^c\iff x\in f^{-1}B^c .$$
（第二个等价用到 $f$ 在每点有惟一取值，第三个用到 $f(x)\in Y$。）

### (4) $f^{-1}\bigcup_{t\in T}A_t=\bigcup_{t\in T}f^{-1}A_t$，$\forall\{A_t\subset Y,t\in T\}$

对任意 $x\in X$，
$$x\in f^{-1}\bigcup_{t\in T}A_t
\iff f(x)\in\bigcup_{t\in T}A_t
\iff \exists\,t\in T:\ f(x)\in A_t
\iff \exists\,t\in T:\ x\in f^{-1}A_t
\iff x\in\bigcup_{t\in T}f^{-1}A_t .$$

### (5) $f^{-1}\bigcap_{t\in T}A_t=\bigcap_{t\in T}f^{-1}A_t$，$\forall\{A_t\subset Y,t\in T\}$

对任意 $x\in X$，
$$x\in f^{-1}\bigcap_{t\in T}A_t
\iff f(x)\in\bigcap_{t\in T}A_t
\iff \forall\,t\in T:\ f(x)\in A_t
\iff \forall\,t\in T:\ x\in f^{-1}A_t
\iff x\in\bigcap_{t\in T}f^{-1}A_t .$$

命题 1.4.1 证毕。由 (3)(5) 还立得
$$f^{-1}(B_1\setminus B_2)=f^{-1}(B_1\cap B_2^c)=f^{-1}B_1\setminus f^{-1}B_2 .$$

---

## 第 17 题

**题目** 设 $D$ 是 $R$ 中的可数稠集，证明定理 1.4.6 中把"$\forall a\in R$"改为"$\forall a\in D$"以后，结论仍然成立。

即要证下列五条等价：

1. $f$ 是 $(X,\mathscr{F})$ 上的可测函数；
2. $\{f<a\}\in\mathscr{F},\ \forall a\in D$；
3. $\{f\le a\}\in\mathscr{F},\ \forall a\in D$；
4. $\{f>a\}\in\mathscr{F},\ \forall a\in D$；
5. $\{f\ge a\}\in\mathscr{F},\ \forall a\in D$。

由定理 1.4.6，(1) 蕴涵这四个集合对一切 $a\in R$ 属于 $\mathscr{F}$，因 $D\subset R$，故 (1) 蕴涵 (2)—(5)。以下证每一条都反过来蕴涵 (1)。

**准备** $D$ 在 $R$ 中稠密，故对任意 $b\in R$ 与任意 $n\ge1$，开区间 $(b-\frac1n,\,b)$ 与 $(b,\,b+\frac1n)$ 中都含有 $D$ 的点。于是可取
$$a_n\in D,\quad a_n<b,\quad \sup_n a_n=b;\qquad
a_n'\in D,\quad a_n'>b,\quad \inf_n a_n'=b .$$

### (2) $\Rightarrow$ (1)

对任意 $b\in R$，取上述 $a_n\in D,\ a_n<b,\ \sup_na_n=b$。则
$$\{f<b\}=\bigcup_{n=1}^{\infty}\{f<a_n\}.$$
"$\supset$"：由 $a_n<b$ 得 $\{f<a_n\}\subset\{f<b\}$。
"$\subset$"：若 $f(x)<b$，由 $\sup_na_n=b$ 知存在 $n$ 使 $a_n>f(x)$，即 $x\in\{f<a_n\}$（$f(x)=-\infty$ 时对一切 $n$ 成立）。

由 $\mathscr{F}$ 对可列并封闭得 $\{f<b\}\in\mathscr{F}$ 对一切 $b\in R$ 成立，再由定理 1.4.6 之 (2) 知 $f$ 可测。

### (3) $\Rightarrow$ (1)

仍取 $a_n\in D,\ a_n<b,\ \sup_na_n=b$。则
$$\{f<b\}=\bigcup_{n=1}^{\infty}\{f\le a_n\}.$$
"$\supset$"：$f(x)\le a_n<b$。
"$\subset$"：$f(x)<b$ 时存在 $n$ 使 $a_n>f(x)$，从而 $f(x)\le a_n$。

故 $\{f<b\}\in\mathscr{F}$ 对一切 $b\in R$ 成立，由定理 1.4.6 得 $f$ 可测。

### (4) $\Rightarrow$ (1) 与 (5) $\Rightarrow$ (1)

因 $\{f>a\}^c=\{f\le a\}$，$\{f\ge a\}^c=\{f<a\}$，而 $\mathscr{F}$ 对余封闭，故
$$(4)\iff(3),\qquad (5)\iff(2),$$
于是由已证的 (3) $\Rightarrow$ (1)、(2) $\Rightarrow$ (1) 即得。

五条等价性证毕。

### 另一种写法（用生成 $\sigma$ 域）

令
$$\mathscr{E}_D=\{[-\infty,a):a\in D\},$$
则 $f^{-1}[-\infty,a)=\{f<a\}$。只需证 $\sigma(\mathscr{E}_D)=\mathscr{B}_{\overline{R}}$。

一方面显然 $\sigma(\mathscr{E}_D)\subset\mathscr{B}_{\overline{R}}$。另一方面，对任意 $b\in R$ 取 $D\ni a_n<b,\ \sup_na_n=b$，则
$$[-\infty,b)=\bigcup_{n=1}^{\infty}[-\infty,a_n)\in\sigma(\mathscr{E}_D),$$
故由命题 1.4.5，
$$\mathscr{B}_{\overline{R}}=\sigma\big([-\infty,a):a\in R\big)\subset\sigma(\mathscr{E}_D).$$
于是 $\sigma(\mathscr{E}_D)=\mathscr{B}_{\overline{R}}$，再由定理 1.4.3，
$$f\ \text{可测}\iff f^{-1}\mathscr{E}_D\subset\mathscr{F}\iff\{f<a\}\in\mathscr{F},\ \forall a\in D .$$
对 $[-\infty,a]$、$(a,\infty]$、$[a,\infty]$ 三族完全类似（分别配合 $a_n'\downarrow b$ 或取余）。

---

## 第 18 题

**题目** 证明：对任何 $a,b\in\overline{R}$ 和任何 $A,B\in\mathscr{F}$，只要 $a+b$ 有意义，则 $aI_A+bI_B$ 是可测函数。

令 $f=aI_A+bI_B$。集合
$$A\cap B,\quad A\setminus B,\quad B\setminus A,\quad (A\cup B)^c$$
两两不交、并为 $X$，且都属于 $\mathscr{F}$，构成 $(X,\mathscr{F})$ 的一个有限可测分割。按 $\overline{R}$ 中的运算约定（特别是 $0\cdot(\pm\infty)=0$），
$$f=\begin{cases}
a+b,& x\in A\cap B,\\
a,& x\in A\setminus B,\\
b,& x\in B\setminus A,\\
0,& x\in(A\cup B)^c ,
\end{cases}$$
其中第一行要求 $a+b$ 有意义（即不出现 $(+\infty)+(-\infty)$），这正是题设条件；其余三行恒有意义。

于是 $f$ 在上述可测分割的每一块上取常值，从而对任意 $t\in R$，$\{f<t\}$ 是这四块中若干块之并，必属于 $\mathscr{F}$。由定理 1.4.6 知 $f$ 可测。

---

## 第 19 题

**题目** 如果 $f$ 是可测空间 $(X,\mathscr{F})$ 上的可测函数，则它是简单函数当且仅当其值域是有限个实数组成之集。

**必要性** 设 $f$ 是简单函数，即存在有限可测分割 $\{A_i\in\mathscr{F},i=1,\dots,n\}$ 与实数 $a_1,\dots,a_n$ 使
$$f=\sum_{i=1}^{n}a_iI_{A_i}.$$
因 $\{A_i\}$ 是 $X$ 的分割，每个 $x$ 恰属于一个 $A_i$，故 $f(x)=a_i$。于是
$$f(X)\subset\{a_1,\dots,a_n\}\subset R,$$
即值域是有限个实数组成之集。

**充分性** 设 $f$ 可测且
$$f(X)=\{c_1,\dots,c_n\}\subset R\quad(c_i\ \text{两两不同}).$$
因单点集 $\{c_i\}\in\mathscr{B}_{\overline{R}}$ 且 $f$ 可测，
$$E_i=\{x:f(x)=c_i\}=f^{-1}(\{c_i\})\in\mathscr{F}.$$
由 $c_i$ 两两不同知 $E_1,\dots,E_n$ 两两不交，又由 $f(X)=\{c_1,\dots,c_n\}$ 知 $\bigcup_{i=1}^nE_i=X$，故 $\{E_i\}$ 是 $X$ 的有限可测分割，且
$$f=\sum_{i=1}^{n}c_iI_{E_i}.$$
所以 $f$ 是简单函数。

---

## 第 20 题

**题目** 设 $A_1,\dots,A_n$ 是空间 $X$ 的一个有限分割，令 $\mathscr{F}=\sigma(A_1,\dots,A_n)$，求 $(X,\mathscr{F})$ 上的全体可测函数。

**先求 $\mathscr{F}$**：因 $A_1,\dots,A_n$ 两两不交且并为 $X$，集合系
$$\mathscr{G}=\Big\{\bigcup_{i\in J}A_i:J\subset\{1,\dots,n\}\Big\}$$
含 $X$（$J=\{1,\dots,n\}$）与 $\varnothing$（$J=\varnothing$），对余封闭（$\big(\bigcup_{i\in J}A_i\big)^c=\bigcup_{i\notin J}A_i$）、对可列并封闭，故是 $\sigma$ 域；它含各 $A_i$，而任何含各 $A_i$ 的 $\sigma$ 域必含 $\mathscr{G}$。所以
$$\mathscr{F}=\Big\{\bigcup_{i\in J}A_i:J\subset\{1,\dots,n\}\Big\}.$$

**全体可测函数**：$(X,\mathscr{F})$ 上的可测函数恰是在每个 $A_i$ 上取常值的函数，即
$$\boxed{\ f=\sum_{i=1}^{n}c_iI_{A_i},\qquad c_i\in\overline{R}\ }$$
（若只讨论随机变量即实值可测函数，则 $c_i\in R$）。

**证明** 充分性：这类 $f$ 对任意 $B\in\mathscr{B}_{\overline{R}}$ 有 $f^{-1}B=\bigcup\{A_i:c_i\in B\}\in\mathscr{F}$，故可测。

必要性：设 $f$ 可测但在某个 $A_i$ 上不为常值，取 $x,y\in A_i$ 使 $f(x)\ne f(y)$。取 $B\in\mathscr{B}_{\overline{R}}$ 使 $f(x)\in B$ 而 $f(y)\notin B$。则 $f^{-1}B$ 含 $x$ 而不含 $y$，故 $f^{-1}B$ 不可能是若干个 $A_j$ 之并，与 $f^{-1}B\in\mathscr{F}$ 矛盾。

---

## 第 21 题

**题目** 证明：实轴上的实值单调函数是 $(R,\mathscr{B}_R)$ 上的随机变量。

设 $f:R\to R$ 单调。

**情形一：$f$ 单调不减。** 记 $S_a=\{x\in R:f(x)>a\}$。若 $x\in S_a$ 且 $y>x$，则 $f(y)\ge f(x)>a$，故 $y\in S_a$，即 $S_a$ 是向上封闭的集合。$R$ 的向上封闭子集只能是
$$\varnothing,\quad R,\quad (c,+\infty),\quad [c,+\infty)\qquad(c=\inf S_a),$$
它们都是 Borel 集，故
$$\{f>a\}\in\mathscr{B}_R,\qquad\forall a\in R .$$
由定理 1.4.6 之 (4) 知 $f$ 可测；又 $f$ 实值，故是随机变量。

**情形二：$f$ 单调不增。** 此时 $\{f>a\}$ 是向下封闭的集合，只能是 $\varnothing,R,(-\infty,c)$ 或 $(-\infty,c]$，同样是 Borel 集，结论相同。

---

## 第 22 题

**题目** 证明：实轴上的实值连续函数是 $(R,\mathscr{B}_R)$ 上的随机变量。

设 $f:R\to R$ 连续。由连续性的拓扑刻画，对任意开集 $G\subset R$，$f^{-1}G$ 是开集；而任何开集都是至多可列个开区间之并，故 $f^{-1}G\in\mathscr{B}_R$。这说明
$$f^{-1}\mathscr{O}_R\subset\mathscr{B}_R .$$
由第 9 题 (4)，$\mathscr{B}_R=\sigma(\mathscr{O}_R)$，故由定理 1.4.3，$f$ 是 $(R,\mathscr{B}_R)$ 到 $(R,\mathscr{B}_R)$ 的可测映射，即对任意 $B\in\mathscr{B}_R$ 有 $f^{-1}B\in\mathscr{B}_R$。因 $f$ 实值，$f$ 是随机变量。

---

## 第 23 题

**题目** 设 $(X,\mathscr{F})$ 和 $(Y,\mathscr{S})$ 是两可测空间，$f$ 是 $X$ 到 $Y$ 的映射，$A_1,\dots,A_n$ 是 $(X,\mathscr{F})$ 的一个有限可测分割，$f_i(x)=f(x),\ \forall x\in A_i$。证明：$f$ 是 $(X,\mathscr{F})$ 到 $(Y,\mathscr{S})$ 的可测映射当且仅当对每个 $i$，$f_i$ 都是 $(A_i,A_i\cap\mathscr{F})$ 到 $(Y,\mathscr{S})$ 的可测映射。

由第 13 题，$(A_i,A_i\cap\mathscr{F})$ 是可测空间，其中 $A_i\cap\mathscr{F}=\{A_i\cap E:E\in\mathscr{F}\}$。

**必要性** 设 $f$ 可测。对任意 $C\in\mathscr{S}$，
$$f_i^{-1}C=\{x\in A_i:f(x)\in C\}=A_i\cap f^{-1}C .$$
因 $f^{-1}C\in\mathscr{F}$，故 $f_i^{-1}C\in A_i\cap\mathscr{F}$，即 $f_i$ 可测。

**充分性** 设每个 $f_i$ 可测。对任意 $C\in\mathscr{S}$，$f_i^{-1}C\in A_i\cap\mathscr{F}$，即存在 $E_i\in\mathscr{F}$ 使 $f_i^{-1}C=A_i\cap E_i$；因 $A_i\in\mathscr{F}$，故 $f_i^{-1}C\in\mathscr{F}$。又 $A_1,\dots,A_n$ 是 $X$ 的分割，
$$f^{-1}C=\bigcup_{i=1}^{n}\big(A_i\cap f^{-1}C\big)=\bigcup_{i=1}^{n}f_i^{-1}C\in\mathscr{F}.$$
故 $f$ 可测。

综上，$f$ 可测 $\iff$ 每个 $f_i\ (i=1,\dots,n)$ 可测。

---

## 第 24 题

**题目** 设 $\{f_n,n=1,2,\dots\}$ 是可测空间 $(X,\mathscr{F})$ 上的可测函数列。证明：$\{\lim_nf_n\ \exists\}\in\mathscr{F}$；又对 $(X,\mathscr{F})$ 上的任一可测函数 $f$，$\{\lim_nf_n=f\}\in\mathscr{F}$。

可测函数取值于 $\overline{R}$，"$\lim_nf_n$ 存在"理解为在 $\overline{R}$ 中存在极限（允许为 $\pm\infty$）。

**第一部分** 由定理 1.5.2，$\liminf_nf_n$ 与 $\limsup_nf_n$ 都是 $(X,\mathscr{F})$ 上的可测函数。而对每个 $x$，数列 $\{f_n(x)\}$ 在 $\overline{R}$ 中有极限当且仅当其上、下极限相等，故
$$\Big\{\lim_{n\to\infty}f_n\ \exists\Big\}=\Big\{\liminf_{n\to\infty}f_n=\limsup_{n\to\infty}f_n\Big\}.$$
由推论 1.4.7（对可测函数 $g,h$ 有 $\{g=h\}\in\mathscr{F}$）即得
$$\Big\{\lim_{n\to\infty}f_n\ \exists\Big\}\in\mathscr{F}.$$

**第二部分** 设 $f$ 是 $(X,\mathscr{F})$ 上的可测函数。则
$$\Big\{\lim_{n\to\infty}f_n=f\Big\}=\Big\{\liminf_{n\to\infty}f_n=f\Big\}\cap\Big\{\limsup_{n\to\infty}f_n=f\Big\},$$
右端两个集合都由推论 1.4.7 属于 $\mathscr{F}$，故
$$\Big\{\lim_{n\to\infty}f_n=f\Big\}\in\mathscr{F}.$$

**实值情形的 Cauchy 判别法写法** 若诸 $f_n$ 都是随机变量（实值），则"极限存在且有限"的集合还可显式写成
$$\Big\{\lim_{n\to\infty}f_n\ \exists\ \text{且有限}\Big\}
=\bigcap_{k=1}^{\infty}\bigcup_{N=1}^{\infty}\bigcap_{m,n\ge N}\Big\{\big|f_m-f_n\big|<\tfrac1k\Big\}\in\mathscr{F},$$
$$\Big\{\lim_{n\to\infty}f_n=f\Big\}
=\bigcap_{k=1}^{\infty}\bigcup_{N=1}^{\infty}\bigcap_{n\ge N}\Big\{\big|f_n-f\big|<\tfrac1k\Big\}\in\mathscr{F},$$
其中用到 $f_m-f_n$、$f_n-f$ 可测（定理 1.5.1）及 $\mathscr{F}$ 对可列交、可列并的封闭性。当 $f_n$ 或 $f$ 可取 $\pm\infty$ 时这两个表达式不再成立，须用前面上、下极限的写法。

---

## 第 25 题

**题目** 设 $f_1,\dots,f_n$ 是可测空间 $(X,\mathscr{F})$ 上的随机变量，把 $f_1(x),\dots,f_n(x)$ 按从小到大排列成 $f_{(1)}(x)\le\dots\le f_{(n)}(x)$，称为次序统计量。证明：对任何 $k=1,\dots,n$，$f_{(k)}$ 还是 $(X,\mathscr{F})$ 上的随机变量。

固定 $k\in\{1,\dots,n\}$。对任意 $a\in R$，
$$f_{(k)}(x)\le a\iff f_1(x),\dots,f_n(x)\ \text{中至少有}\ k\ \text{个不大于}\ a .$$

"$\Rightarrow$"：$f_{(1)}(x)\le\dots\le f_{(k)}(x)\le a$，已是 $k$ 个不大于 $a$ 的值。"$\Leftarrow$"：若有 $k$ 个值 $\le a$，则从小到大排列后第 $k$ 个必 $\le a$，即 $f_{(k)}(x)\le a$。

而"至少有 $k$ 个下标 $i$ 使 $f_i(x)\le a$"可写成
$$\{f_{(k)}\le a\}=\bigcup_{\substack{I\subset\{1,\dots,n\}\\ |I|=k}}\ \bigcap_{i\in I}\{f_i\le a\}.$$

由每个 $f_i$ 是随机变量及定理 1.4.6 得 $\{f_i\le a\}\in\mathscr{F}$；上式右端只涉及有限次并与交，故
$$\{f_{(k)}\le a\}\in\mathscr{F},\qquad\forall a\in R .$$
再由定理 1.4.6 之 (3) 知 $f_{(k)}$ 可测；又 $f_{(k)}$ 实值，故 $f_{(k)}$ 是 $(X,\mathscr{F})$ 上的随机变量。

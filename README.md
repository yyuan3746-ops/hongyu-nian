# Hongyu Nian 个人学术网站：编辑说明

这是一个纯 HTML、CSS、JavaScript 的静态网站，不需要安装软件包，也不需要执行构建命令。

公开网站：<https://yyuan3746-ops.github.io/hongyu-nian/>

## 应该编辑哪个文件

在 VS Code 中打开整个文件夹：

```text
E:\My Website
```

主要内容都在：

```text
E:\My Website\index.html
```

- 修改姓名、简介、论文、出版物、奖项、经历、教育和联系方式：编辑 `index.html`
- 修改颜色、字体、间距、照片裁切和手机端布局：编辑 `styles.css`
- 修改菜单和导航高亮：编辑 `script.js`
- 照片和以后添加的 PDF 文件：放在 `assets` 文件夹

## 当前页面栏目

1. Working Papers
2. Publications
3. Award & Funding
4. Education & Work
5. Contact

网站界面保持英文，本说明文件使用中文，便于以后维护。

## 修改首页文字

打开 `index.html`，使用 `Ctrl+F` 搜索要修改的原文。例如搜索：

```text
Hongyu Nian
I am a Research Fellow at the climaTRACES Lab
```

只修改标签中间的文字，不要删除左右两边的 HTML 标签。例如：

```html
<p class="hero-bio">这里是首页个人简介</p>
```

## 修改照片

当前照片文件是：

```text
E:\My Website\assets\HongyuPhoto.jpg
```

如果要换照片，最简单的方法是把新照片也命名为 `HongyuPhoto.jpg`，覆盖旧文件，然后在浏览器按 `Ctrl+F5` 强制刷新。

也可以使用不同文件名，但必须同步修改 `index.html` 中这一行：

```html
<img src="assets/HongyuPhoto.jpg" ...>
```

照片建议使用竖版，接近 4:5。若需要调整人物在相框中的上下位置，在 `styles.css` 中搜索 `.portrait-frame img`，修改 `object-position`。

## 添加 Working Paper 或 Publication

在 `index.html` 中搜索 `id="working-papers"` 或 `id="publications"`。复制一整段 `<article class="paper-item"> ... </article>`，粘贴到同一栏目中，再修改：

- 论文题目
- 作者姓名
- 年份
- 工作论文状态或期刊名称

状态、期刊和年份写在题目下面独立的 `<p class="paper-citation"> ... </p>` 中。例如：

```html
<h3>Paper title.</h3>
<p class="paper-citation">Completed, 2026.</p>
```

作者列表中的本人姓名可保留：

```html
<strong>Hongyu Nian</strong>
```

这样网页会自动加粗本人姓名。

## 添加 PDF 链接

先把 PDF 放到：

```text
E:\My Website\assets
```

然后可在对应论文的 `.paper-main` 内加入：

```html
<p><a href="assets/paper-file-name.pdf" target="_blank" rel="noopener">PDF</a></p>
```

文件名尽量只使用英文、数字和连字符，不要使用特殊符号。

## 修改奖项、经历、教育和联系方式

在 `index.html` 中分别搜索：

```text
id="awards-funding"
id="education-work"
id="contact"
```

复制相邻的 `<article>` 区块即可新增一项；删除时要从 `<article ...>` 一直删到与它对应的 `</article>`，避免破坏页面结构。

## 为什么保存后浏览器没有变化

依次检查：

1. 确认编辑的是 `E:\My Website\index.html`，而不是 C 盘旧副本或压缩包里的文件。
2. 在 VS Code 按 `Ctrl+S`，确认标签页标题旁的小圆点已经消失。
3. 关闭旧网页，再双击 `E:\My Website\index.html`；或在当前网页按 `Ctrl+F5` 强制刷新。
4. 如果使用 Live Server，右键这个 `index.html` 再选择 **Open with Live Server**，确认地址栏对应 `E:\My Website`。
5. 若只修改了 `<meta>`、`<title>` 等 `<head>` 内容，页面正文不会改变；要修改可见内容，请编辑 `<body>` 中对应文字。
6. 若更换了同名照片，浏览器可能缓存旧图，使用 `Ctrl+F5` 或改一个新文件名。

## 预览与发布

本地预览时，直接双击 `index.html` 即可。整个 `E:\My Website` 文件夹可以直接上传到 GitHub Pages、Netlify 或学校服务器；上传时要保留文件夹结构和文件名大小写。

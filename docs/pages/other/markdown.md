# markdown 常用语法

## 标题

```md
# 一级标题

## 二级标题

### 三级标题

#### 四级标题

##### 五级标题

###### 六级标题 <!--最多6级标题-->
```

## 任务列表

```md
- [ ] 任务一 未做任务 `- + 空格 + [ ]`
- [x] 任务二 已做任务 `- + 空格 + [x]`
```

- 效果:
- [ ] 任务一 未做任务
- [x] 任务二 已做任务

## 缩进、换行、对齐方式

- 首行缩进

```md
【1】 &emsp;或&#8195; //全角
【2】 &ensp;或&#8194; //半角
【3】 &nbsp;或&#160; //半角之半角
```

- 换行

```md
行末尾添加两个`空格`再回车
```

- 对齐方式

```md
  <center>行中心对齐</center>
  <p align="left">行左对齐</p>
  <p align="right">行右对齐</p>
```

## 斜体、粗体、删除线、下划线、背景高亮

```md
_斜体_
**粗体**
**_加粗斜体_**
~~删除线~~
<u>下划线</u>

<table><tr><td bgcolor=yellow>背景色yellow</td></tr></table>
```

## 超链接

1.行内式

```md
[ng-repo](https://github.com/wzh327083434/ng-repo)
```

2.参考式

```md
参考链接: [google][1]、[baidu][2]

[1]: http://www.google.com
[2]: http://www.baidu.com
```

## 注脚

```md
使用 Markdown[^1]可以效率的书写文档, 直接转换成 HTML[^2], pdf, png or jpeg files。

[^1]: Markdown 是一种纯文本标记语言
[^2]: HyperText Markup Language 超文本标记语言
```

## 无序列表、有序列表

使用 \*，+，- 表示无序列表。

```md
- 无序列表项 一

* 无序列表项 二

- 无序列表项 三
```

数字接着一个英文句点 表示有序列表

```md
1. 有序列表项 一
2. 有序列表项 二
3. 有序列表项 三
```

## 插入图像

```md
格式:
![](图片地址)
![图片加载失败Alt](图片地址 '图片Title')
```

<center>
<img width="30px" height="30px" title="logo" alt="logo" src="/docs/assets/img/logo.svg"/>
</center>

<center>

![baidu logo](https://www.baidu.com/img/baidu_jgylogo3.gif '图片Title')

</center>

## 多级引用

```md
> > > 请问 Markdwon 怎么用？

> > 自己看教程！

> 教程在哪？
```

## 转义字符

反斜杠 `\` 加以下特殊字符

```md
\ 反斜杠  ` 反引号  \* 星号  \_ 下划线  {} 大括号  [] 中括号  
() 小括号   # 井号  + 加号  - 减号  . 英文句号  ! 感叹号
```

## 字体、字号、颜色

```md
<font face="黑体">我是黑体字</font>
<font face="微软雅黑">我是微软雅黑</font>
<font face="STCAIYUN">我是华文彩云</font>
<font color=#0099ff size=12 face="黑体">黑体</font>
<font color=gray size=5>gray</font>
<font color=#00ffff size=3>null</font>
```

## 代码块

- 行内式

```md
`console.log('hello world!')`
```

- 多行代码

````md
```css
.box {
  color: red;
}
```
````

## 表格

```md
不管是哪种方式，第一行为表头，第二行分隔表头和主体部分，第三行开始每一行为一个表格行。
列于列之间用管道符|隔开。原生方式的表格每一行的两边也要有管道符。
第二行还可以为不同的列指定对齐方向。默认为左对齐，在-右边加上:就右对齐。

- 左对齐， :-: 中心对齐，-: 右对齐

| 学号 | 姓名 | 序号 |
| ---- | :--: | ---- |
| 小明 |  男  | 5    |
| 小红 |  女  | 79   |
| 小陆 |  男  | 192  |
```

| 学号   | 姓名 | 序号 |
| ------ | :--: | ---: |
| 小明明 |  男  |    5 |
| 小红   |  女  |   79 |
| 华     |  男  |  192 |

## 分隔线

```md
三个以上 - (减号)
```

## HTML 代码

```md
可直接书写 html 内容
```

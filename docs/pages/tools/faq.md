# FAQ

### Git 版本要求

- Husky requires Git >=2.13.0.
- 查看 git 版本号  
  1.打开 git bash  
  2.执行 git --version

### husky 无效时

1. 需升级 git 版本;
2. 执行 `npx husky > Setting up git hooks`;
3. 检查`\.git\hooks`目录下,是否有 **husky** 相关文件

### prettier 忽略格式化下一节点

```js
// prettier-ignore
matrix(
  1, 0, 0,
  0, 1, 0,
  0, 0, 1
)
```

```html
<!-- prettier-ignore -->
<div
  (mousedown)="       onStart    (    )         "
  (mouseup)="         onEnd      (    )         "
></div>

<!-- prettier-ignore-attribute (mouseup) -->
<div (mousedown)="onStart()" (mouseup)="         onEnd      (    )         "></div>
```

```css
/* stylelint-disable */
/* prettier-ignore */
.my ugly rule {

}
/* stylelint-enable */
```

```md
<!-- prettier-ignore -->
Do   not    format   this
```

### stylelint ignore

```css
.foo {
  color: red; /* stylelint-ignore */
}

/* stylelint-disable */
a {
}
/* stylelint-enable */

/* stylelint-disable selector-no-id, declaration-no-important  */
#id {
  color: pink !important;
}
/* stylelint-enable */

#id1 {
  /* stylelint-disable-line */
  color: pink !important; /* stylelint-disable-line declaration-no-important */
}
#id2 {
  /* stylelint-disable-next-line declaration-no-important */
  color: pink !important;
}
```

### 建议字体设置

```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
```

- **-apple-system** 是在以 WebKit 为内核的浏览器（如 Safari）中，调用 Apple（苹果公司）系统（iOS, macOS, watchOS, tvOS）中默认字体（现在一般情况下，英文是 San Francisco，中文是苹方）
- **BlinkMacSystemFont** 是在 Chrome 中实现调用 Apple 的系统字体

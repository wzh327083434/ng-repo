# FAQ

### Git 版本要求

- Husky requires Git >=2.13.0.
- 查看 git 版本号  
  1.打开 git bash  
  2.执行 git --version

### husky 无效时

1. 需升级 git 版本;
2. 执行 `npx husky > Setting up git hooks`;

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
<div         class="x"       >hello world</div            >

<!-- prettier-ignore-attribute -->
<div
  (mousedown)="       onStart    (    )         "
  (mouseup)="         onEnd      (    )         "
></div>

<!-- prettier-ignore-attribute (mouseup) -->
<div (mousedown)="onStart()" (mouseup)="         onEnd      (    )         "></div>
```

```css
/* prettier-ignore */
.my    ugly rule
{

}
```

```md
<!-- prettier-ignore -->
Do   not    format   this
```

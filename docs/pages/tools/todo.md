# TODO Lists

1.vuepress 修改 `.vuepress/config.js` 后如何自动刷新 ?  
2.Should respect .gitignore
[issue](https://github.com/jedmao/eclint/issues/128)

```shell
# for Windows `$(git ls-files)` support:

npm i --save-dev exec-extra
env eclint check \$(git ls-files)
```

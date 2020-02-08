// https://stylelint.io/user-guide/rules or http://stylelint.cn/user-guide/rules/
module.exports = {
  extends: ['stylelint-config-rational-order', 'stylelint-prettier/recommended'],
  plugins: ['stylelint-order'],
  processors: [],
  rules: {
    // 禁止使用未知规则
    'at-rule-no-unknown': true,

    'at-rule-empty-line-before': null,

    'at-rule-name-case': null,

    'at-rule-name-newline-after': null,

    'at-rule-name-space-after': null,

    'at-rule-semicolon-newline-after': null,

    'at-rule-semicolon-space-before': null,
    // 禁止空块
    'block-no-empty': true,

    'block-closing-brace-empty-line-before': null,

    'block-closing-brace-newline-after': null,

    'block-closing-brace-newline-before': null,

    'block-closing-brace-space-after': null,

    'block-closing-brace-space-before': null,

    'block-opening-brace-newline-after': null,

    'block-opening-brace-newline-before': null,

    'block-opening-brace-space-after': null,

    'block-opening-brace-space-before': null,
    // 十六进制颜色小写
    'color-hex-case': 'lower',
    // 十六进制颜色使用简写
    'color-hex-length': 'short',
    // 禁止使用无效的十六进制颜色
    'color-no-invalid-hex': true,
    // 十六进制颜色一律 小写
    'color-hex-case': 'lower',
    // 十六进制颜色 使用完整写法,不使用缩写
    'color-hex-length': 'long',
    // 禁止空注释
    'comment-no-empty': true,

    'comment-empty-line-before': null,

    'comment-whitespace-inside': null,
    // 可指定自定义属性的正则匹配,比如：规范前缀等
    'custom-property-pattern': null,
    // 禁止在声明块中使用重复的属性
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values']
      }
    ],
    // 禁止缩写属性覆盖相关普通写法属性
    'declaration-block-no-shorthand-property-overrides': true,
    // 禁止在声明中使用 !important(必须使用的情况,可通过行内注释解除限制)
    'declaration-no-important': true,
    // 禁止使用可以缩写却不缩写的属性(padding,margin,background,font,border,border-top,border-bottom,border-left,border-right,border-width,border-style,border-color,border-radius,transition)
    'declaration-block-no-redundant-longhand-properties': true,
    // 限制单行声明块中声明的数量: 单行声明块中最多一个
    'declaration-block-single-line-max-declarations': 1,
    // 在感叹号之后禁止有空白
    'declaration-bang-space-after': 'never',
    // 在感叹号之前必须有一个空格
    'declaration-bang-space-before': 'always',
    // 冒号后必须有一个空格
    'declaration-colon-space-after': 'always',
    // 冒号前不可有空格
    'declaration-colon-space-before': 'never',
    // 在分号之后必须有一个换行符
    'declaration-block-semicolon-newline-after': 'always',
    // 在多行声明块的分号之前禁止有空白
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    // 在单行声明块中的分号之后必须有一个空格
    'declaration-block-semicolon-space-after': 'always-single-line',
    // 在分号之前禁止有空白
    'declaration-block-semicolon-space-before': 'never',
    // 必须有拖尾分号
    'declaration-block-trailing-semicolon': 'always',
    // 当推荐使用引号时，使用引号。其他情况禁止使用
    'font-family-name-quotes': 'always-where-recommended',
    // 禁止重复的字体系列名称
    'font-family-no-duplicate-names': true,
    // 必须设置 通用字体系列("serif"、"sans-serif"、"cursive"、"fantasy"、"monospace")
    'font-family-no-missing-generic-family-keyword': true,
    // 禁止在calc函数内使用无效的表达式
    'function-calc-no-invalid': true,
    // 不允许在calc函数内使用空格运算符
    'function-calc-no-unspaced-operator': true,
    // linear-gradient()需使用标准语法(https://developer.mozilla.org/en-US/docs/Web/CSS/linear-gradient#Syntax)
    'function-linear-gradient-no-nonstandard-direction': true,
    // 指定一个禁用的函数的黑名单
    'function-blacklist': [],
    // 多行函数在逗号之后换行
    'function-comma-newline-after': 'always-multi-line',
    // 多行函数在逗号之前不可有空格
    'function-comma-newline-before': 'never-multi-line',
    // 在单行函数的逗号之后必须有一个空格
    'function-comma-space-after': 'always-single-line',
    // 在逗号之前禁止有空格
    'function-comma-space-before': 'never',
    // 函数中相邻的空行数量最大0
    'function-max-empty-lines': 0,
    // 函数名称 使用小驼峰式
    'function-name-case': 'lower',
    // 在多行函数的括号内必须有一个换行符
    'function-parentheses-newline-inside': 'always-multi-line',
    // 在括号内禁止有空白(TODO:报错问题)
    // 'function-parentheses-space-insidev': 'never',
    // url 必须使用引号 (如果 url 中没有参数时，颠倒主选项的功能)
    'function-url-quotes': ['always', { except: ['empty'] }],
    // 在函数之后必须有空白
    'function-whitespace-after': 'always',

    indentation: null,
    // 禁止在 keyframe 声明中使用 !important
    'keyframe-declaration-no-important': true,
    // 长度为0时，禁止使用单位
    'length-zero-no-unit': true,

    linebreaks: null,
    // 禁止使用未知的 media 特性名称
    'media-feature-name-no-unknown': true,
    // 禁止 media 特性名称带有浏览器引擎前缀
    'media-feature-name-no-vendor-prefix': true,

    'media-feature-colon-space-after': null,

    'media-feature-colon-space-before': null,

    'media-feature-name-case': null,

    'media-feature-parentheses-space-inside': null,

    'media-feature-range-operator-space-after': null,

    'media-feature-range-operator-space-before': null,

    'media-query-list-comma-newline-after': null,

    'media-query-list-comma-newline-before': null,

    'media-query-list-comma-space-after': null,

    'media-query-list-comma-space-before': null,
    // 最大嵌套深度：10(多少比较合适?)
    'max-nesting-depth': 10,

    'max-empty-lines': null,

    'max-line-length': null,
    // 禁止低优先级的选择器出现在高优先级的选择器之后
    'no-descending-specificity': true,
    // 禁止@import在样式表中使用重复规则
    'no-duplicate-at-import-rules': true,
    // 禁止在样式表中使用重复的选择器
    'no-duplicate-selectors': true,
    // 禁止空源
    'no-empty-source': true,
    // 禁止使用多余的分号
    'no-extra-semicolons': true,
    // 禁止使用未定义动画
    'no-unknown-animations': true,
    // 禁用 CSS 不支持的双斜线注释 (//...)
    'no-invalid-double-slash-comments': true,

    'no-eol-whitespace': null,

    'no-missing-end-of-source-newline': null,

    'no-empty-first-line': null,
    // 必须有一个前导 0
    'number-leading-zero': 'always',
    // 禁止数字中的拖尾 0
    'number-no-trailing-zeros': true,
    // 禁用未知属性
    'property-no-unknown': true,
    // 属性值 小写
    'property-case': 'lower',
    // 指定一个禁止使用的属性的黑名单
    'property-blacklist': [],
    // 禁止属性使用浏览器引擎前缀
    'property-no-vendor-prefix': true,
    // 属性名使用小写形式
    'property-case': 'lower',

    'rule-empty-line-before': null,
    // 禁止未知的伪类选择器
    'selector-pseudo-class-no-unknown': true,
    // 禁止使用未知的伪元素选择器
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['ng-deep']
      }
    ],
    // 禁止未知类型选择器
    'selector-type-no-unknown': [
      true,
      {
        ignoreTypes: ['/^app-/']
      }
    ],
    // 限制选择器中相邻空行数量: 0
    'selector-max-empty-lines': 0,

    'selector-attribute-brackets-space-inside': null,

    'selector-attribute-operator-space-after': null,

    'selector-attribute-operator-space-before': null,

    'selector-attribute-quotes': null,

    'selector-combinator-space-after': null,

    'selector-combinator-space-before': null,

    'selector-descendant-combinator-no-non-space': null,

    'selector-pseudo-class-case': null,

    'selector-pseudo-class-parentheses-space-inside': null,

    'selector-pseudo-element-case': null,

    'selector-pseudo-element-colon-notation': null,

    'selector-type-case': null,

    'selector-list-comma-newline-after': null,

    'selector-list-comma-newline-before': null,

    'selector-list-comma-space-after': null,

    'selector-list-comma-space-before': null,
    // 字符串换行需使用反斜杠\转义
    'string-no-newline': true,
    // 字符串必须使用单引号
    'string-quotes': 'single',
    // 禁用未知单位
    'unit-no-unknown': true,
    // 单位使用小写形式
    'unit-case': 'lower',
    // 不允许使用Unicode字节顺序标记(U+FEFF)
    'unicode-bom': 'never',
    // 禁止给值添加浏览器引擎前缀(使用postcss-Autoprefixer自动添加)
    'value-no-vendor-prefix': true,
    // 关键字使用小写形式
    'value-keyword-case': 'lower',
    // 在值列表的逗号之后要求有一个换行符或禁止有空白
    'value-list-comma-newline-after': null,
    // 在多行值列表的在逗号之前禁止有空白
    'value-list-comma-newline-before': 'never-multi-line',
    // 在单行值列表的逗号之后必须有一个空格
    'value-list-comma-space-after': 'always-single-line',
    // 在逗号之前禁止有空白
    'value-list-comma-space-before': 'never',
    // 值列表中相邻空行数量 最大0
    'value-list-max-empty-lines': 0
  },
  ignoreFiles: []
};

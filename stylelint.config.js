// https://stylelint.io/user-guide/rules
module.exports = {
  extends: ['stylelint-prettier/recommended'],
  plugins: [],
  processors: [],
  rules: {
    // 禁止使用未知规则
    'at-rule-no-unknown': true,
    // 禁止空块
    'block-no-empty': true,
    // 十六进制颜色小写
    'color-hex-case': 'lower',
    // 十六进制颜色使用简写
    'color-hex-length': 'short',
    // 禁止使用无效的十六进制颜色
    'color-no-invalid-hex': true,
    // 禁止空注释
    'comment-no-empty': true,
    // 禁止在声明块中使用重复的属性
    'declaration-block-no-duplicate-properties': [
      true,
      {
        ignore: ['consecutive-duplicates-with-different-values']
      }
    ],
    // 禁止缩写属性覆盖相关普通写法属性
    'declaration-block-no-shorthand-property-overrides': true,
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
    // 禁止在 keyframe 声明中使用 !important
    'keyframe-declaration-no-important': true,
    // 禁止使用未知的 media 特性名称
    'media-feature-name-no-unknown': true,
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
    // 禁用 CSS 不支持的双斜线注释 (//...)
    'no-invalid-double-slash-comments': true,
    // 禁用未知属性
    'property-no-unknown': true,
    // 禁止未知的伪类选择器
    'selector-pseudo-class-no-unknown': true,
    // 禁止使用未知的伪元素选择器
    'selector-pseudo-element-no-unknown': true,
    // 禁止未知类型选择器
    'selector-type-no-unknown': true,
    // 字符串换行需使用反斜杠\转义
    'string-no-newline': true,
    // 禁用未知单位
    'unit-no-unknown': true
  }
};

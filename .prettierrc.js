module.exports = {
  bracketSpacing: true, //在对象文字中的括号之间打印空格。
  singleQuote: true, //默认为false,即双引号（可以通过singleQuote:true选项更改为单引号）
  jsxBracketSameLine: true, //将>多行 JSX 元素的 放在最后一行的末尾，而不是单独放在下一行
  trailingComma: 'all', //在多行逗号分隔的句法结构中尽可能打印尾随逗号。（例如，单行数组永远不会有尾随逗号。）
  printWidth: 60,
  parser: 'babel',
};
// prettier默认1个缩进4个空格，即换行后，前面要有四个空格
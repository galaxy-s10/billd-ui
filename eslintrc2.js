module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },

  extends: [
    /**
     * warn：请注意，此配置仅关闭规则，这个插件会关闭一些没必要或者可能存在冲突的规则。
     * 所以如果extends只有它自己一个插件，而且rules里面有没有规则，就不会有冲突。
     * 那么就会按照prettierrc的规则来。
     */
    'plugin:prettier/recommended', //prettierrc要求字符串使用双引号。
  ],
  parserOptions: {
    ecmaVersion: 12,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: [],
  rules: {
    /**
     * prettierrc文件设置了singleQuote: true，即字符串使用单引号，但是由
     * 于extends的时候继承了'plugin:prettier/recommended'，它源代码里面关闭了eslint的quotes，
     * 因此
     */
    // quotes: [2, 'double'],
  },
};

module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },

  extends: [
    'plugin:prettier/recommended', // prettierrc要求字符串使用双引号。
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
     * Problem: rules优先级如何判断?
     * extends的时候继承了'plugin:prettier/recommended'，而这个插件源码里面关闭了eslint的quotes检测，
     * 它的作用：1，默认使用prettierrc配置文件的规则（usePrettierrc属性默认true）;2，关闭一些可能冲突的规则。
     * 但！rules里面又开启了quotes的检测，这样的话，rules的规则就会生效，即quotes:[2,'single']会生效，即rules要求字符串
     * 使用单引号。但是别忘了'plugin:prettier/recommended'还会加载prettierrc文件，它里面singleQuote: false，即
     * 要求字符串是双引号，那么此时的话很明显就又存在冲突了，将字符串改成单引号，符合rules里的要求了，但是却违反了prettierrc里
     * 的要求；将字符串改成双引号，符合了prettierrc的要求，但却违反了rules里的要求！
     * Tips:如何解决? eslint的规则并不是rules的优先级最高，遇到冲突并不会以rules的规则为准的，而是共同作用。
     * Tips:所以别TMD搞两条冲突的规则出来，一个人指定规则，还TM能搞出两条有冲突的规则出来，是不是有双重人格?
     * Tips: 1,把rules里的quotes去掉，prettierrc配置不变，让prettierrc的配置生效，这样就会使用prettierrc的双引号。
     * Tips: 2,rules配置不变，把prettierrc的singleQuote设为true，这样就都会使用单引号了
     * Tips: 3,prettierrc不变，rules的quotes改成[2,'double']，这样就都会使用双引号
     * Tips: 4,使用usePrettierrc：false，直接不加载prettierrc文件，这样就会使用rules的单引号了，但不推荐，
     * Tips: 因为你vscode格式化使用了prettierrc文件,但是格式化出来的效果却不符合rules的要求，岂不是多此一举?
     * Tips: ...自行发挥。
     * Tips: 最佳实践，因为vscode要使用prettierrc对代码进行外观方面的格式化，所以尽量就让rules里的规则去满足prettierrc,而
     * Tips: 不是prettierrc去满足rules的规则。想要什么就在prettierrc里设置，rules不要设置外观的规则，或者设置的规则
     * Tips: 符合prettierrc里的规则也可以（其实不必多此一举）。即外观方面尽量完全由prettierrc做主力，
     * Tips: 而代码质量方面尽量完全由eslint的其它规范（如airbnb）做主力
     */
    quotes: [2, 'single'],
  },
};

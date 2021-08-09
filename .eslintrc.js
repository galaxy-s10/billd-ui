const { _INFO, emoji } = require('./build-tools/utils/chalkTip');

console.log(_INFO('读取eslintrc.js'), emoji.get('hourglass'));
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    // es2021: true,
  },
  /**
   * Tips: Airbnb的规则是正宗的eslint，而prettier的规则都是自己的一套规则,
   * 比如Airbnb的quotes默认是single，即对于Airbnb来说，字符串应使用单引号，
   * 而prettier的singleQuote默认是false，即对于Prettier来说，字符串默认应为双引号！
   * 虽然属性名字不一样，但是实现的效果却可能会冲突！
   */
  /**
   * Tips：eslint的extends，即继承，且后面的会覆盖前面的。extentds可以理解为继承别人的.eslintrc.js
   * 即如果prettier在airbnb后面，就prettier说了算；如果airbnb在prettier后面，就airbnb说了算。
   * 如果将prettier放后面，即prettier如果有规则和airbnb的规则冲突，则会使用prettier的规则。
   * Tips: Airbnb的规则并不仅仅对代码外观有要求，还有对代码质量的要求，而prettier只有对代码外观有要求，对代码质量没要求！
   * Tips: 因此可以将prettier放到Airbnb后面，即如果有冲突规则，让prettier的规则覆盖Airbnb的,无所谓，因为prettier的规则全是外观的，
   * Tips: 最多就是覆盖率Airbnb的外观规则而已（你用了prettier不就是想要prettier的外观，而prettier也就只能控制外观），
   * Tips: Airbnb对代码质量的规则不会被覆盖（prettier也没有对代码质量的规则）。
   */
  extends: [
    // 'vue',
    // "prettier", //prettier的eslint规范
    'airbnb-base', // airbnb的eslint规范，indent：2，即一个缩进两个空格，qutoes：single，即单引号，max-len：一行100
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:prettier/recommended'这个插件的主要作用是关闭所有不必要的或可能与Prettier冲突的规则。
    // plugin:prettier/recommended关闭了max-len，quotes，no-tabs等等一些可能存在冲突的规则。
    // "prettier",
    // 'eslint:recommended',//eslint官方默认规则
    // 'plugin:@typescript-eslint/recommended', // 太严格了不用。
    // 'plugin:vue/essential', // 基本（错误预防）
    // 'plugin:vue/recommended', // 推荐（最小化任意选择和认知开销）
    // 'plugin:@typescript-eslint/recommended',
    'plugin:vue/strongly-recommended', // 强烈推荐（提高可读性）
    'plugin:prettier/recommended', // prettierrc配置文件声明了singleQuote:true,即单引号，printWidth：80，即一行80，且prettier默认一个缩进四个空格
    // 'tslint-config-prettier',
    // 'plugin:vue/recommended', // 推荐（最小化任意选择和认知开销）
    // 'prettier/prettier',
    // 'prettier',
    /**
     * 后面的会覆盖前面的规则，airbnb-base规则要求字符串必须是单引号，
     */
    // "plugin:prettier/recommended", // 兼容prettier
  ],
  // https://eslint.vuejs.org/
  // parser: '@typescript-eslint/parser',
  parserOptions: {
    // parser: 'vue-eslint-parser',
    // ecmaVersion: 12,
    // parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      jsx: true,
    },
    // project: 'tsconfig.json',
    /**
     * https://www.dazhuanlan.com/2020/01/06/5e12c9fe9a7a4/
     * https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser
     * 此选项允许您提供一个或多个在 TypeScript 程序编译中应考虑的附加文件扩展名。
     * 默认的扩展是.ts，.tsx，.js，和.jsx。添加以 开头的扩展名.，后跟文件扩展名。
     * 例如，对于.vue文件使用"extraFileExtensions: [".vue"]
     */
    // 貌似代替不了eslint cli接口的--ext
    // extraFileExtensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
  },
  plugins: [
    // 'vue',
    // '@typescript-eslint',
    // 'prettier',
    // 'plugin:prettier/recommended', // error！！！巨坑，这个写错位置了，应该是写在extends里面的！！！！
    // '@typescript-eslint/tslint',
  ],
  /**
   * overrides可共享配置中的配置不再覆盖.eslintrc文件中的用户设置
   * 在 ESLint v6.0.0 中，父配置始终优先于扩展配置，即使是overrides块。
   * https://eslint.org/docs/user-guide/migrating-to-6.0.0#overrides-in-a-config-file-can-now-match-dotfiles
   * https://github.com/eslint/rfcs/pull/13
   */
  overrides: [
    {
      files: ['*.ts', '*tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        // parser: 'vue-eslint-parser',
        // ecmaVersion: 12,
        // parser: '@typescript-eslint/parser',
        ecmaFeatures: {
          jsx: true,
        },
      },
      plugins: ['@typescript-eslint'],
      extends: ['plugin:@typescript-eslint/recommended'],
    },
  ],
  /**
   * rules优先级最高，会覆盖上面的
   */
  rules: {
    //   // 0 => off
    //   // 1 => warn
    //   // 2 => error
    /**
     * plugins添加prettier后，还要开启这个才会把prettier的规则当做eslint来做校验。
     * plugins没有添加prettier，直接开启这个会报错Definition for rule 'prettier/prettier' was not found。
     * 直接在extends里面添加prettier，其实没用，并不会校验。
     * 但在extends里添加"plugin:prettier/recommended"，就会开启校验，连rules里面的'prettier/prettier': 'error'和plugins的prettier都不用写，
     * 因为"plugin:prettier/recommended"可以算是一个语法糖：https://github.com/prettier/eslint-plugin-prettier
     */
    // 'max-len': [2, 120],
    /**
     * 如果rules有选项'prettier/prettier': [2, { singleQuote: false }]，代表着什么？
     * 1，如果prettierrc配置文件有相同的规则，rules会覆盖掉prettierrc的，以rules的prettier规则作为eslint的校验规则
     * 2，这个选项把prettierrc的singleQutoe规则给覆盖掉了，要求字符串使用双引号，如果在文件使用单引号，prettier会通过eslint报错
     * tips: 这里是rules，仅仅是告诉eslint，字符串的引号规则改成了双引号，
     * tips: 在使用shift+alt+f格式化的时候，是vscode的行为，vscode依旧会
     * tips: 找prettierrc这个文件，使用这个文件的配置进行格式化！这就代表这，如果prettierrc的规则和rules冲突，
     * tips: 在格式化后，依旧还是会有冲突，因为prettierrc告诉vscode把字符串的引号改为单引号，格式化就只会把字符串
     * tips: 的引号改为单引号。改完之后，eslint的rules检测到了字符串使用了单引号，但是eslint的rules要求的是双引号，
     * tips: 这时就会报错，并且告诉编辑器字符串应该使用双引号。
     * warn: 那么此时此刻，该怎么处理？有两种方式，一：因为最终代码是要符合eslint的要求的，既然eslint要求要用双引号，
     * warn: 那我就不使用prettier的格式化（因为用prettier格式化就变单引号了）岂不就完事了。二：把prettierrc的规则改成
     * warn: 和eslint的rules规则一致，那样就还是可以用prettier格式化，而且格式化后也不会和eslint的rules冲突。
     */
    // 'prettier/prettier': 'error',
    // prettierrc要求单引号，但是rules优先级高，eslint会把rules的双引号作为标准
    // 'max-len':[2, 100],
    // 'max-len': 0,
    // "prettier/prettier": "error",
    //   'comma-dangle': [
    //     'error',
    //     {
    //       arrays: 'never',
    //       objects: 'never',
    //       imports: 'never',
    //       exports: 'never',
    //       functions: 'never'
    //     }
    //   ],
    // indent: ['error', 6], // https://github.com/airbnb/javascript#whitespace--spaces，airbnb默认1个缩进2个空格，即换行后前面要有两空个格
    // indent: ['error', 2], // https://eslint.org/docs/rules/indent.html，官方的eslint默认1个缩进4个空格，即换行后前面要有四个空格
    'vue/attribute-hyphenation': 0, // 此规则强制在 Vue 模板中的自定义组件上使用带连字符的属性名称。
    'class-methods-use-this': 0, // 类方法如果不使用this的话会报错
    'no-restricted-syntax': [
      // airbnb默认禁用了一些语法
      1,
      // 'FunctionExpression',
      // 'ForInStatement',
      { selector: 'ForInStatement', message: '不建议使用for in' },
    ],
    'guard-for-in': 0, // 当for in循环不使用if语句过滤其结果时，它会发出警告
    'no-nested-ternary': 0, // 禁止嵌套三元
    'no-plusplus': 0,
    'arrow-body-style': [1, 'as-needed'], // 在可以省略的地方强制不使用大括号（默认）
    'global-require': 1, // 此规则要求所有调用require()都在模块的顶层，类似于 ES6import和export语句，也只能在顶层发生。
    'no-shadow': 0,
    'import/prefer-default-export': 0, // 当模块只有一个导出时，更喜欢使用默认导出而不是命名导出。
    'no-undef': 0, // https://github.com/typescript-eslint/typescript-eslint/issues/2528#issuecomment-689369395
    'no-param-reassign': 0,
    'func-names': 0, // 不能是匿名函数
    'import/no-extraneous-dependencies': 0, // 开发/生产依赖混乱
    'spaced-comment': 2, // 此规则将在注释//或开始后强制执行间距的一致性/*
    'no-underscore-dangle': 0, // Unexpected dangling '_' in '_xxx'
    'import/extensions': 0, // 省略导入源路径中的文件扩展名
    'import/no-unresolved': 0, // 导入资源的时候没有后缀会报这个错，这里关掉他
    'vars-on-top': 0, // 要求var声明位于其作用域的顶部
    'prefer-rest-params': 0, // 此规则旨在标记arguments变量的使用
    'import/newline-after-import': 1, // 强制在最后一个顶级导入语句或 require 调用之后有一个或多个空行
    'prefer-const': 1, // xxx is never reassigned. Use 'const' instead，此规则旨在标记使用let关键字声明的变量
    'no-unused-vars': 1, // xxx is assigned a value but never used，此规则旨在消除未使用的变量、函数和函数参数
    'no-var': 1, // Unexpected var, use let or const instead，该规则旨在阻止使用var或鼓励使用const或let代替。
    'no-console': 0, // 此规则不允许调用console对象的方法。
    // 'no-console': process.env.NODE_ENV !== 'production' ? 0 : 2, // 此规则不允许调用console对象的方法。
    'no-redeclare': 2, // 此规则旨在消除在同一范围内具有多个声明的变量。
    'no-unused-expressions': [2, { allowShortCircuit: true }], // 期望一个赋值或函数调用，却看到了一个表达式，允许&&
    'array-callback-return': [2, { allowImplicit: false }], // expects a return value from arrow function.期望箭头函数的返回值。
  },
};

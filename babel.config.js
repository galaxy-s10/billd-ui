const chalk = require('chalk');

const pkg = require('./package.json');

console.log(
  `${chalk.bgBlueBright.black(' INFO ')} ${chalk.blueBright(
    `读取了: ${__filename.slice(__dirname.length + 1)}`
  )}`
);

const babelRuntimeVersion = pkg.dependencies['@babel/runtime'].replace(
  /^[^0-9]*/,
  ''
);

module.exports = {
  presets: [
    // ["@babel/env"],
    // "@babel/preset-env",
    [
      '@babel/preset-env',
      {
        // modules: "umd",
        // target: {},
        // useBuiltIns: 'usage',
        // corejs: 3,
      },
    ],
    [
      '@vue/babel-preset-jsx',
      // {
      //   injectH: false,
      // },
    ],
  ],
  plugins: [
    // billd-ui支持按需加载，安装babel-plugin-import，然后在babel配置文件添加如下内容即可
    // [
    //   'import',
    //   {
    //     libraryName: 'billd-ui',
    //     libraryDirectory: 'es', // 默认lib
    //     /**
    //      * 这个按需加载很有意思，因为babel-plugin-import这个插件是ant-design官方写的，因此规则也是官方定的，
    //      * 有一点是肯定的：官方根据自家的ant-design组件库的整体架构，从而编写了一个插件专门对自家的ant-design组件库做的按需加载。
    //      * 这个style属性，如果没有这个属性，就不会引入样式；如果有这个style属性，它的值是true，代表：libraryName/libraryDirectory/组件名/style，即会引入style下的index.js
    //      * 如果值是'css',代表：libraryName/libraryDirectory/组件名/style/css，即会引入这个css.js文件
    //      */
    //     style: true, // billd-ui使用了less，如果你的项目里面有对less做处理，可以使用此选项，如果没有处理less，请不要使用这个选项。
    //     // style: 'css', // 如果你的项目没有处理less，就使用这个选项。
    //   },
    //   'billd-ui',
    // ],
    [
      /**
       * useBuiltIns和polyfill选项在 v7 中被删除，只是将其设为默认值。
       */
      '@babel/plugin-transform-runtime',
      {
        absoluteRuntime: false, // boolean或者string，默认为false。
        // corejs: 3, // false, 2,3或{ version: 2 | 3, proposals: boolean }, 默认为false
        helpers: true, // boolean, 默认为true.切换内联的 Babel 助手（classCallCheck,extends等）是否替换为对 的调用moduleName
        regenerator: true, // 切换生成器函数是否转换为使用不污染全局范围的再生器运行时。默认为true
        version: babelRuntimeVersion,
      },
    ],
  ],
};

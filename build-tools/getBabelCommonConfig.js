const chalk = require('chalk');

const pkg = require('../package.json');

console.log(
  `${chalk.bgBlueBright.black(' INFO ')} ${chalk.blueBright(
    `读取了: ${__filename.slice(__dirname.length + 1)}`
  )}`
);
const babelRuntimeVersion = pkg.dependencies['@babel/runtime'].replace(
  /^[^0-9]*/,
  ''
);

module.exports = function (modules) {
  return {
    presets: [
      [
        '@babel/preset-env',
        {
          /**
           * useBuiltIns:
           * false: 默认值就是false,不用任何的polyfill相关的代码
           * usage: 代码中需要哪些polyfill, 就引用相关的api
           * entry: 手动在入口文件中导入 core-js/regenerator-runtime, 根据目标浏览器引入所有对应的polyfill
           */
          useBuiltIns: false,
          // corejs: '3',

          // targets: '>0.25%, last 2 version, not dead', // targets会读取项目里面的.browserslistrc文件，也可以在这里直接设置

          /**
           * modules: 'commonjs', 'amd', 'umd', 'systemjs'，'auto'(默认)
           * modules也可以设置false，这样会保留esmodule
           */
          modules,
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
      [
        /**
         * @babel/plugin-transform-runtime
         * useBuiltIns和polyfill选项在 v7 中被删除，只是将其设为默认值。
         */
        '@babel/plugin-transform-runtime',
        {
          // absoluteRuntime: false, // boolean或者string，默认为false。

          /**
           * corejs:false, 2,3或{ version: 2 | 3, proposals: boolean }, 默认为false
           * 设置对应值需要安装对应的包：
           * false	npm install --save @babel/runtime
           * 2	npm install --save @babel/runtime-corejs2
           * 3	npm install --save @babel/runtime-corejs3
           */
          corejs: false,
          /**
           * helpers: boolean, 默认true。
           * 如果是true，就会把需要他runtime包给引进来，如：import _defineProperty from "@babel/runtime/helpers/defineProperty"
           * 如果是false，就会把需要的runtime包里面的代码给嵌进bundle里，如function _defineProperty(){}
           * 设置false的话，会导致同一个runtime包里面的代码被很多文件设置，产生冗余的代码。而且因为虽然是同一
           * 份runtime包里面的代码，但是他们在不同的文件（模块）里面，都有自己的作用域，因此在使用类似webpack之类的
           * 打包工具打包的时候，不会做优化。因此推荐设置true，这样可以通过静态分析的手段进行打包，减少打包后的代码体积。
           */
          helpers: true,
          regenerator: true, // 切换生成器函数是否转换为使用不污染全局范围的再生器运行时。默认为true
          // https://babeljs.io/docs/en/babel-plugin-transform-runtime#version，没想到version会影响到包大小
          version: babelRuntimeVersion, // 一定要设置版本，v7.5.0之前，扩展运算符...不会被提取，v7.5.0之后，才会提取成objectSpread2。而且貌似version:7.4.5和version:^7.4.5没区别
        },
      ],
      // billd-ui支持按需加载，安装babel-plugin-import，然后在babel配置文件添加如下内容即可
      // [
      //   "import",
      //   {
      //     libraryName: "billd-ui",
      //     libraryDirectory: "dist",
      //     style: "css",
      //   },
      //   "billd-ui",
      // ],
      // "transform-vue-jsx",//引入错误，这是Babel6的使用的版本。Babel7不需要这个。
    ],
  };
};

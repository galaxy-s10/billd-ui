const { _INFO, emoji } = require('./build-tools/utils/chalkTip');

console.log(_INFO('读取babel.config.js'), emoji.get('hourglass'));
module.exports = {
  presets: [
    // ["@babel/env"],
    // "@babel/preset-env",
    [
      '@babel/preset-env',
      {
        // modules: "umd",
        // target: {},
        useBuiltIns: 'usage',
        corejs: '3',
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
    [
      'import',
      {
        libraryName: 'billd-ui',
        libraryDirectory: 'es', // 默认lib
        /**
         * 这个按需加载很有意思，因为babel-plugin-import这个插件是ant-design官方写的，因此规则也是官方定的，
         * 有一点是肯定的：官方根据自家的ant-design组件库的整体架构，从而编写了一个插件专门对自家的ant-design组件库做的按需加载。
         * 这个style属性，如果没有这个属性，就不会引入样式；如果有这个style属性，它的值是true，代表：libraryName/libraryDirectory/组件名/style，即会引入style下的index.js
         * 如果值是'css',代表：libraryName/libraryDirectory/组件名/style/css，即会引入这个css.js文件
         */
        style: true, // billd-ui使用了less，如果你的项目里面有对less做处理，可以使用此选项，如果没有处理less，请不要使用这个选项。
        // style: 'css', // 如果你的项目没有处理less，就使用这个选项。
      },
      'billd-ui',
    ],
  ],
};

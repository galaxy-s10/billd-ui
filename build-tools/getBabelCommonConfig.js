const { _SUCCESS, emoji } = require('./utils/chalkTip');

console.log(_SUCCESS('读取getBabelCommonConfig.js'), emoji.get('hourglass'));
module.exports = function (modules) {
  return {
    presets: [
      // ["@babel/env"],
      [
        '@babel/preset-env',
        {
          // https://www.babeljs.cn/docs/babel-preset-env#modules
          modules,
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

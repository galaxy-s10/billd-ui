console.log("=======hi,babel.config.js=====");
module.exports = {
  presets: [
    // ["@babel/env"],
    // "@babel/preset-env",
    [
      "@babel/preset-env",
      {
        // modules: "cjs",
        // target: {},
      },
    ],
    [
      "@vue/babel-preset-jsx",
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
    // "transform-vue-jsx",
  ],
};

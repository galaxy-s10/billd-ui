// const chalk = require("chalk");
// console.log(chalk.red("读取postcss.config.js 🎉"));
const { _ERROR, _INFO, _SUCCESS } = require("./build-tools/chalkTip");
console.log(_INFO("读取postcss.config.js 🎉"));
module.exports = {
  plugins: [
    // 'autoprefixer',  // postcss-preset-env包含了autoprefixer的功能
    // 'postcss-preset-env',  //简写，具体看各个插件的官网提供几种写法
    require("postcss-preset-env"),
  ],
};

const postcssPresetEnv = require('postcss-preset-env');
const { _INFO, emoji } = require('./build-tools/chalkTip');

console.log(
  _INFO("读取postcss.config.js "),
  emoji.get("hourglass"),
);
module.exports = {
  plugins: [
    // 'autoprefixer',  // postcss-preset-env包含了autoprefixer的功能
    // 'postcss-preset-env',  //简写，具体看各个插件的官网提供几种写法
    postcssPresetEnv,
  ],
};

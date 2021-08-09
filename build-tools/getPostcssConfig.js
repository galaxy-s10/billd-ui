const postcssPresetEnv = require('postcss-preset-env');
const { _SUCCESS, emoji } = require('./utils/chalkTip');

console.log(_SUCCESS('读取getPostcssConfig.js'), emoji.get('hourglass'));

module.exports = {
  plugins: [
    // 'autoprefixer',  // postcss-preset-env包含了autoprefixer的功能
    // 'postcss-preset-env',  //简写，具体看各个插件的官网提供几种写法
    postcssPresetEnv,
  ],
};

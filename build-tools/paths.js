const path = require('path');
const { _ERROR, _INFO, _SUCCESS } = require('./chalkTip');
// process.cwd() 方法返回 Node.js 进程的当前工作目录。
const appDir = process.cwd();
console.log(
  _INFO(`Node.js进程的当前工作目录:
${appDir}`),
);
const resolveApp = relativePath => path.resolve(appDir, relativePath);
module.exports = resolveApp;

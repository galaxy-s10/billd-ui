const path = require('path');
const { _INFO, emoji } = require('./chalkTip');
// process.cwd() 方法返回 Node.js 进程的当前工作目录。
const appDir = process.cwd();

console.log(_INFO(`Node.js进程的当前工作目录:${appDir}`), emoji.get('gear'));

/**
 * 返回相对于项目目录的路径。
 */
const resolveApp = (relativePath) => path.resolve(appDir, relativePath);

module.exports = { resolveApp };

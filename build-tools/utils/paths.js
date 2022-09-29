const path = require('path');

const { chalkINFO } = require('./chalkTip');
const appDir = path.resolve(__dirname, '../../');

console.log(chalkINFO(`Node.js进程的当前工作目录:${process.cwd()}`));

// 返回相对于项目根目录的绝对路径。
const resolveApp = (relativePath) => path.resolve(appDir, relativePath);

module.exports = { resolveApp };

const path = require("path");

// process.cwd() 方法返回 Node.js 进程的当前工作目录。
const appDir = process.cwd();
const resolveApp = (relativePath) => path.resolve(appDir, relativePath);

module.exports = resolveApp;

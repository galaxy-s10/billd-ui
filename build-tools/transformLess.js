const less = require("less");
const { readFileSync } = require("fs");
const path = require("path");

function transformLess(lessFile) {
  // 同步读取lessFile文件，拿到的是字符串
  let data = readFileSync(lessFile, "utf-8");
  // 应该是处理编码问题，参考了antd-tools
  data = data.replace(/^\uFEFF/, "");
  // https://less.bootcss.com/usage/#lessjs-options
  const lessOpts = {
    // paths: [path.dirname(lessFile)],
    // filename: lessFile,
    // plugins: [],
    compress: true, //使用less内置的压缩，但最好在解析完成less后，用第三方插件再次解析压缩。
    javascriptEnabled: true //允许在.less文件中内联计算JavaScript
  };
  // console.log(lessOpts,'lessOptslessOpts');
  // console.log(data,'datadata');
  return less.render(data, lessOpts).then(r => {
    // r.css是解析less后得到的css字符串
    return r.css;
  });
}

module.exports = transformLess;

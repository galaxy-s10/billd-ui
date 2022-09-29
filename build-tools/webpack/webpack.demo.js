const chalk = require('chalk');
const TerserPlugin = require('terser-webpack-plugin');

const { demoDistDir } = require('../constant');
const { resolveApp } = require('../utils/paths');

console.log(
  `${chalk.bgBlueBright.black(' INFO ')} ${chalk.blueBright(
    `读取了: ${__filename.slice(__dirname.length + 1)}`
  )}`
);
module.exports = {
  mode: 'production',
  devtool: false,
  entry: {
    main: {
      import: resolveApp('./src/index.js'),
    },
  },
  output: {
    clean: true,
    path: demoDistDir,
  },
  optimization: {
    // concatenateModules: true,  // production模式下默认true。告知 webpack 去寻找模块图形中的片段，哪些是可以安全地被合并到单一模块中。
    usedExports: true, // production模式或者不设置usedExports，它默认就是true。usedExports的目的是标注出来哪些函数是没有被使用 unused，会结合Terser进行处理
    sideEffects: true, // 告知 webpack 去辨识 package.json 中的 副作用 标记或规则
    minimize: true, // 是否开启Terser，不手动设置的话默认就根据环境判断，production环境就是true，非production环境就是false。设置false后，不会压缩和转化
    minimizer: [
      `...`, // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`）
      new TerserPlugin({
        parallel: true, // 使用多进程并发运行以提高构建速度
        extractComments: false, // 去除打包生成的bundle.js.LICENSE.txt
        terserOptions: {
          // Terser 压缩配置
          parse: {
            // default {},如果希望指定其他解析选项，请传递一个对象。
          },
          compress: {
            // default {},传递false表示完全跳过压缩。传递一个对象来指定自定义压缩选项。
            arguments: true, // default: false,尽可能将参数[index]替换为函数参数名
            dead_code: true, // 删除死代码，默认就会删除，实际测试设置false也没用，还是会删除
            toplevel: false, // default: false,在顶级作用域中删除未引用的函数("funcs")和/或变量("vars"), 设置true表示同时删除未引用的函数和变量
            keep_classnames: false, // default: false,传递true以防止压缩器丢弃类名
            keep_fnames: false, // default: false,传递true以防止压缩器丢弃函数名
          },
          /**
           * mangle,默认值true,会将keep_classnames,keep_fnames,toplevel等等mangle options的所有选项设为true。
           * 传递false以跳过篡改名称，或者传递一个对象来指定篡改选项
           */
          mangle: true,
          toplevel: true, // default false,如果希望启用顶级变量和函数名修改,并删除未使用的变量和函数,则设置为true。
          keep_classnames: true, // default: undefined,传递true以防止丢弃或混淆类名。
          keep_fnames: true, // default: false,传递true以防止函数名被丢弃或混淆。
        },
      }),
    ],
  },
  plugins: [
    // new webpack.optimize.ModuleConcatenationPlugin(), //作用域提升。！！！在使用cdn时，axios和iview有问题，先不用！！！
  ],
};

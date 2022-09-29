const chalk = require('chalk');

const { distDir } = require('../constant');
const { resolveApp } = require('../utils/paths');

console.log(
  `${chalk.bgBlueBright.black(' INFO ')} ${chalk.blueBright(
    `读取了: ${__filename.slice(__dirname.length + 1)}`
  )}`
);
module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: {
      import: resolveApp('./index.js'),
    },
  },
  output: {
    clean: true,
    path: distDir,
    filename: 'billd.js',
    library: {
      name: 'Billd',
      // root: 'MyLibrary',
      // amd: 'my-library',
      // commonjs: 'my-common-library',
      type: 'umd',
    },
    // library: "billd_ui",
    // libraryTarget: "umd",//module,commonjs,umd
    // umdNamedDefine: true,
  },
  externals: {
    vue: {
      root: 'Vue',
      commonjs2: 'vue',
      commonjs: 'vue',
      amd: 'vue',
    },
  },
  optimization: {
    // concatenateModules: true,  // production模式下默认true。告知 webpack 去寻找模块图形中的片段，哪些是可以安全地被合并到单一模块中。
    usedExports: false, // production模式或者不设置usedExports，它默认就是true。usedExports的目的是标注出来哪些函数是没有被使用 unused，会结合Terser进行处理
    sideEffects: false, // 告知 webpack 去辨识 package.json 中的 副作用 标记或规则
    minimize: false, // 是否开启Terser，不手动设置的话默认就根据环境判断，production环境就是true，非production环境就是false。设置false后，不会压缩和转化
  },
  plugins: [
    // new webpack.optimize.ModuleConcatenationPlugin(), //作用域提升。！！！在使用cdn时，axios和iview有问题，先不用！！！
  ],
};

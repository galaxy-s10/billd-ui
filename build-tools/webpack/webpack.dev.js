// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

// const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'); // webpack4
const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin'); // webapck5对等依赖
const chalk = require('chalk');
const portfinder = require('portfinder');
const WebpackDevServer = require('webpack-dev-server');

const { distDir } = require('../constant');
const { resolveApp } = require('../utils/paths');
const TerminalPrintPlugin = require('./plugins/TerminalPrintPlugin');

const localIPv4 = WebpackDevServer.internalIPSync('v4');

console.log(
  `${chalk.bgBlueBright.black(' INFO ')} ${chalk.blueBright(
    `读取了: ${__filename.slice(__dirname.length + 1)}`
  )}`
);

module.exports = new Promise((resolve) => {
  // 默认端口8088，如果被占用了，会自动递增+1
  const port = 8088;
  portfinder.basePort = port;
  portfinder
    .getPortPromise({
      port,
      stopPort: 9000,
    })
    .then((port) => {
      resolve({
        /**
         * .browserlistrc文件导致的热更新不生效。https://github.com/webpack/webpack-dev-server/pull/2761
         * 删掉.browserlistrc文件即可解决。但是我没有删，将webpack-dev-server升级到了4.x解决了，但也需要修改devServe属性的部分东西。
         */
        // mode: "production",
        mode: 'development',
        devtool: 'eval', // eval，具有最高性能的开发构建的推荐选择。
        entry: {
          main: {
            import: resolveApp('./src/index.js'),
          },
        },
        output: {
          filename: 'js/[name]-bundle.js', // 入口文件打包生成后的文件的文件名
          chunkFilename: 'js/[name]-[contenthash:6]-bundle-chunk.js',
          path: distDir,
          assetModuleFilename: 'assets/[name]-[contenthash:6].[ext]', // 静态资源生成目录（不管什么资源默认都统一生成到这里,除非单独设置了generator）
          publicPath: '/', // 打包成dist后，如果想直接打开index.html看效果，就将该路径改成:"./",上线后改回:"/"
        },
        stats: 'none',
        // 这个infrastructureLogging设置参考了vuecli5，如果不设置，webpack-dev-server会打印一些信息
        infrastructureLogging: {
          level: 'none',
        },
        devServer: {
          client: {
            logging: 'none', // https://webpack.js.org/configuration/dev-server/#devserverclient
          },
          // stats: 'errors-only', // 只显示错误信息（如果eslint有警告和错误，只会显示警告信息，不会显示错误信息）
          // overlay: true, // 出现编译器错误或警告时，在浏览器中显示全屏覆盖。
          /**
           * https://github.com/geowarin/friendly-errors-webpack-plugin
           * If you use the webpack-dev-server, there is a setting in webpack's devServer options:
           * quiet: true
           * 启用 devServer.quiet 后，除了初始启动信息外，什么都不会写入控制台。
           * 这也意味着来自 webpack 的错误或警告是不可见的。
           * warn:不使用FriendlyErrorsWebpackPlugin这个插件请把这个属性注释掉！否则控制台无警告和错误！
           */
          // quiet: true,
          hot: true, // hrm，开启模块热替换
          // hotOnly: true, // 默认情况下（hotOnly:false），如果编译失败会刷新页面。设置了true后就不会刷新整个页面(!!!webpack-dev-server@4.x已改!!!)
          compress: true, // 开启gizp压缩
          port, // 默认端口号8080
          // open: true, //默认不打开浏览器
          /**
           * contentBase默认为package.json文件所在的根目录，即hss_webpack5目录
           * 打开localhost:8080/hss/demo.js,就会访问hss_webpack5目录下的hss目录下的demo.js。
           * 设置contentBase: path.resolve(__dirname, '../hss')后，打开localhost:8080/demo.js,即可访问hss_webpack5目录下的hss目录下的demo.js
           */
          // contentBase: path.resolve(__dirname, '../public'), // 模拟vuecli的public(!!!webpack-dev-server@4.x已改!!!)
          // watchContentBase: true, //监听contenBase目录(!!!webpack-dev-server@4.x已改!!!)
          // static: [resolveApp("./public")], //模拟vuecli的public
          historyApiFallback: true, // 默认值：false，设置true后可解决spa页面刷新404
          // historyApiFallback: {
          //   rewrites: [
          //     // 如果publicPath设置了/abc，就不能直接设置historyApiFallback: true，这样会重定向到hss_webpack5根目录下的index.html
          //     // publicPath设置了/abc，就重定向到/abc，这样就可以了
          //     { from: /abc/, to: "/abc" }
          //   ]
          // },
          // devMiddleware: {
          //   // webpack-dev-server4+写法。https://github.com/webpack/webpack-dev-server/blob/master/CHANGELOG.md
          //   publicPath: "./"
          // },
          static: {
            watch: true, // 告诉 dev-server 监听文件。默认启用，文件更改将触发整个页面重新加载。可以通过将 watch 设置为 false 禁用。
            publicPath: '/',
          },
          // publicPath: '/', // devServer的publicPath建议与output的publicPath一致(!!!webpack-dev-server@4.x已改!!!)
          // proxy: {
          //   "/api": {
          //     // target: 'https://www.zhengbeining.com/api/',  //默认：/api/type/pageList ===>https://www.zhengbeining.com/api/api/type/pageList
          //     target: "http://42.193.157.44/api/", //默认：/api/type/pageList ===>https://www.zhengbeining.com/api/api/type/pageList
          //     secure: false, //默认情况下（secure: true），不接受在HTTPS上运行的带有无效证书的后端服务器。设置secure: false后，后端服务器的HTTPS有无效证书也可运行
          //     /**
          //      * changeOrigin，是否修改请求地址的源
          //      * 默认changeOrigin: false，即发请求即使用devServer的localhost:port发起的，如果后端服务器有校验源，就会有问题
          //      * 设置changeOrigin: true，就会修改发起请求的源，将原本的localhost:port修改为target，这样就可以通过后端服务器对源的校验
          //      */
          //     changeOrigin: true,
          //     pathRewrite: {
          //       "^/api": "", //重写后：/api/type/pageList ===>https://www.zhengbeining.com/api/type/pageList
          //     },
          //   },
          // },
        },
        plugins: [
          new FriendlyErrorsWebpackPlugin({}),
          // 打印控制调试地址
          new TerminalPrintPlugin({
            local: `http://localhost:${port}`,
            network: `http://${localIPv4}:${port}`,
          }),
        ],
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

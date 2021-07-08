const { DefinePlugin } = require("webpack");
const { merge } = require("webpack-merge");
const WebpackBar = require("webpackbar");
const devConfig = require("./webpack.dev");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const resolveApp = require("./paths");
const path = require("path");

const commonConfig = function(isProduction) {
  return {
    /**
     * 暂时添加target属性以解决.browserlistrc文件的问题。https://github.com/webpack/webpack-dev-server/issues/2758
     * https://webpack.js.org/configuration/target/#string
     * 升级webpack-dev-serve@4.x后就可以去掉了这个属性了。
     */
    // target: isProduction ? "browserslist" : "web",
    entry: {
      main: {
        import: "./src/index.js",
        // filename: 'output-[name]-bundle.js'
      },
    },
    output: {
      filename: "js/[name]-bundle.js", //入口文件打包生成后的文件的文件名
      chunkFilename: "js/[name]-[hash:6]-bundle-chunk.js",
      path: path.resolve(__dirname, "../dist"),
      assetModuleFilename: "assets/[name]-[hash:6].[ext]", //静态资源生成目录（不管什么资源默认都统一生成到这里,除非单独设置了generator）
      publicPath: "/", //打包成dist后，如果想直接打开index.html看效果，就将该路径改成:"./",上线后改回:"/"
    },
    resolve: {
      //解析路径
      extensions: [".js", ".json", ".jsx", ".ts", ".tsx", ".vue"], //解析扩展名
      alias: {
        "@": resolveApp("./src"), //设置路径别名
      },
    },
    resolveLoader: {
      // 用于解析webpack的loader
      modules: ["node_modules"],
    },
    module: {
      // loader执行顺序：从下往上，从右往左
      rules: [
        {
          test: /\.css$/,
          use: [
            { loader: "style-loader" }, //将解析好的模块挂载到html页面上（即把解析的内容加到style标签里）
            {
              loader: "css-loader", //将引入的css文件解析成js模块
              options: {
                importLoaders: 1, // 在css文件里面@import了其他资源，就回到上一个loader，在上一个loader那里重新解析@import里的资源
              },
            },
          ],
          // loader: 'style-loader!css-loader', //旧版本webpack写法，也是从右到左执行。
          sideEffects: true, // 告诉webpack是有副作用的，不对css进行删除
        },
        {
          test: /\.less$/,
          use: [
            { loader: "style-loader" },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1, // 在less文件里面@import了其他资源，就回到上两个loader，在上两个loader那里开始重新解析@import里的资源
              },
            },
            { loader: "less-loader" },
          ],
        },
        {
          test: /\.(jpg|jpeg|png|gif)$/,
          // type: 'asset/resource', // 约等于实现file-loader
          // generator:{
          //     filename:'img/[name]-[hash:6].[ext]'
          // }
          // type: 'asset/inline', // 全部都使用url-loader
          type: "asset",
          generator: {
            filename: "img/[name]-[hash:6][ext]",
          },
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024, // 如果一个模块源码大小小于 maxSize，那么模块会被作为一个 Base64 编码的字符串注入到包中， 否则模块文件会被生成到输出的目标目录中
            },
          },
        },
        {
          // test: /\.(svg|eot|ttf|woff2?)\??.*$/,
          test: /\.(svg|eot|ttf|woff2?)$/,
          type: "asset/resource",
          generator: {
            filename: "font/[name]-[hash:6][ext]",
          },
        },
      ],
    },
    plugins: [
      new WebpackBar(), // 构建进度条
      new HtmlWebpackPlugin({
        // 自动生成index.html文件(并引入打包的js)
        filename: "index.html",
        title: "billd-ui",
        template: "./public/index.html",
        hash: true,
        minify: isProduction
          ? {
              collapseWhitespace: true, // 折叠空白
              keepClosingSlash: true, // 在单标签上保留末尾斜杠
              removeComments: true, // 移除注释
              removeRedundantAttributes: true, // 移除多余的属性（如：input的type默认就是text，如果写了type="text"，就移除它，因为不写它默认也是type="text"）
              removeScriptTypeAttributes: true, //删除script标签中type="text/javascript"
              removeStyleLinkTypeAttributes: true, //删除style和link标签中type="text/css"
              useShortDoctype: true, //使用html5的<!doctype html>替换掉之前的html老版本声明方式<!doctype>
              // 上面的都是production模式下默认值。
              removeEmptyAttributes: true, // 移除一些空属性，如空的id,classs,style等等，但不是空的就全删，比如<img alt />中的alt不会删。

              minifyCSS: true, // 使用clean-css插件删除 CSS 中一些无用的空格、注释等。
              minifyJS: true, // 使用Terser插件优化
            }
          : false,
        chunks: ["main"],
      }),
      new VueLoaderPlugin(), //解析vue

      new DefinePlugin({
        //定义全局变量
        BASE_URL: "'./'", //public下的index.html里面的icon的路径
        "process.env": {
          NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development"),
        },
      }),
    ],
  };
};

module.exports = function(env) {
  const isProduction = env.production;
  process.env.NODE_ENV = isProduction ? "production" : "development";
  const config = devConfig;
  const mergeConfig = merge(commonConfig(isProduction), config); //根据当前环境，合并配置文件
  return mergeConfig;
};
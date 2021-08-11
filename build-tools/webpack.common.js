const { DefinePlugin } = require('webpack');
const { merge } = require('webpack-merge');
const WebpackBar = require('webpackbar');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'); // webpack4
// const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin'); // webapck5对等依赖
// const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin'); // webapck5对等依赖
// const ESLintPlugin = require('eslint-webpack-plugin');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
// const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');
const devConfig = require('./webpack.dev');
const prodConfig = require('./webpack.prod.js');
const prodMinConfig = require('./webpack.prod.min.js');

// import { _ERROR, _INFO, _SUCCESS } from "./build-tools/chalkTip";
const { resolveApp } = require('./utils/paths');

const commonConfig = function (isProduction) {
  console.log(__dirname, '-----');
  return {
    /**
     * 暂时添加target属性以解决.browserlistrc文件的问题。https://github.com/webpack/webpack-dev-server/issues/2758
     * https://webpack.js.org/configuration/target/#string
     * 升级webpack-dev-serve@4.x后就可以去掉了这个属性了。
     * 因为webpack5环境下，根目录有.browserslistrc文件，会导致热更新失效，
     * 因此设置target属性，在开发环境不使用.browserslistrc文件，设置为web
     */
    // target: "browserslist",//设置成browserslist的话，热更新会失效！
    target: isProduction ? 'browserslist' : 'web',
    entry: {
      main: {
        import: isProduction
          ? path.resolve(__dirname, '../index.js')
          : resolveApp('./src/index.js'),
        // filename: "output-[name]-bundle.js", //指定要输出的文件名称。
      },
    },

    externals: {
      // vue: {
      //   root: "Vue",
      //   commonjs2: "vue",
      //   commonjs: "vue",
      //   amd: "vue"
      // }
      // vue: "Vue",
      // vuex: 'Vuex',
      // 'vue-router': 'VueRouter',
      // axios: 'axios',
      // less: 'less',
      // echarts: 'echarts',
      // iview: 'iview',
    },
    // output: {
    //   filename: 'js/[name]-bundle.js', // 入口文件打包生成后的文件的文件名
    //   chunkFilename: 'js/[name]-[hash:6]-bundle-chunk.js',
    //   path: resolveApp('./dist'),
    //   assetModuleFilename: 'assets/[name]-[hash:6].[ext]', // 静态资源生成目录（不管什么资源默认都统一生成到这里,除非单独设置了generator）
    //   publicPath: '/', // 打包成dist后，如果想直接打开index.html看效果，就将该路径改成:"./",上线后改回:"/"
    // },
    resolve: {
      // 解析路径
      extensions: ['.js', '.json', '.jsx', '.ts', '.tsx', '.vue'], // 解析扩展名
      alias: {
        '@': path.resolve(__dirname, '../src'), // 设置路径别名
      },
      // https://webpack.docschina.org/blog/2020-10-10-webpack-5-release/#automatic-nodejs-polyfills-removed
      // https://webpack.js.org/migrate/5/#clean-up-configuration
      fallback: {
        os: false,
        fs: false,
        tls: false,
        net: false,
        path: false,
        zlib: false,
        http: false,
        https: false,
        stream: false,
        crypto: false,
      },
    },
    resolveLoader: {
      // 用于解析webpack的loader
      modules: ['node_modules'],
    },
    module: {
      // loader执行顺序：从下往上，从右往左
      rules: [
        {
          test: /\.tsx?$/,
          use: [
            { loader: 'babel-loader' },
            // 'eslint-loader',
            {
              loader: 'ts-loader',
              options: { appendTsxSuffixTo: [/\.vue$/] },
            },
            'eslint-loader',
          ],
        },
        // {
        //   test: /\.tsx$/,
        //   use: [
        //     { loader: "babel-loader" },
        //     { loader: "ts-loader", options: { appendTsxSuffixTo: [/\.vue$/] } },
        //   ],
        // },
        {
          test: /\.jsx?$/,
          /**
           * 如果在vue使用jsx,则.vue文件最终会转化为.jsx,如果项目里面引用了node_modules里
           * 的vue文件，而这个vue文件写了jsx，则它最终也会解析成jsx。如果使用了exclude:/node_modules/，
           * 则不会编译node_modules里面的jsx，也就是说不会编译vue转换后的jsx！
           */
          exclude: /node_modules/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                // exclude: [
                //   // 测试了不生效。
                //   // \\ for Windows, \/ for Mac OS and Linux
                //   /node_modules/,
                // ],
                // 显式禁用目录内文件的 Babel 编译。
                // ignore: [/node_modules[\\\/]aaaa/],
                // presets: ["@babel/preset-env"],
              },
            },
            'eslint-loader',
          ],
        },
        {
          enforce: 'pre',
          test: /\.vue$/,
          exclude: [/node_modules/],
          use: [
            {
              /**
               * eslint-loader has been deprecated. Please use eslint-webpack-plugin.
               *  https://github.com/webpack-contrib/eslint-loader
               */
              loader: 'eslint-loader',
              options: {
                // cache: true,
                emitWarning: false,
                emitError: false,
                // failOnError: true, // 如果有任何错误，将导致模块构建失败
              },
            },
          ],
        },
        {
          test: /\.vue$/,
          use: [{ loader: 'vue-loader' }],
        },
        {
          test: /\.css$/,
          use: [
            isProduction
              ? {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    // you can specify a publicPath here
                    // by default it uses publicPath in webpackOptions.output
                    /**
                     * 即默认打包的css文件是webpackOptions.output的publicPath，
                     * 但在new MiniCssExtractPlugin()时候，设置了打包生成的文件在dist下面的css目录里，
                     */
                    // publicPath: '../',
                  },
                }
              : { loader: 'style-loader' }, // Do not use style-loader and mini-css-extract-plugin together.
            {
              loader: 'css-loader', // 将引入的css文件解析成js模块
              options: {
                importLoaders: 1, // 在css文件里面@import了其他资源，就回到上一个loader，在上一个loader那里重新解析@import里的资源
              },
            },
            'postcss-loader', // 默认会自动找postcss.config.js
          ],
          // loader: 'style-loader!css-loader', //旧版本webpack写法，也是从右到左执行。
          sideEffects: true, // 告诉webpack是有副作用的，不对css进行删除
        },
        {
          test: /\.less$/,
          use: [
            isProduction
              ? {
                  loader: MiniCssExtractPlugin.loader,
                  options: {
                    // you can specify a publicPath here
                    // by default it uses publicPath in webpackOptions.output
                    /**
                     * 即默认打包的css文件是webpackOptions.output的publicPath，
                     * 但在new MiniCssExtractPlugin()时候，设置了打包生成的文件在dist下面的css目录里，
                     */
                    publicPath: '../',
                  },
                }
              : { loader: 'style-loader' }, // Do not use style-loader and mini-css-extract-plugin together.
            {
              loader: 'css-loader',
              options: {
                importLoaders: 2, // 在less文件里面@import了其他资源，就回到上两个loader，在上两个loader那里开始重新解析@import里的资源
              },
            },
            'postcss-loader', // 默认会自动找postcss.config.js
            {
              /**
               * antd当前的版本不支持less4.x版本，会报类似：Operation on an invalid type错误，
               * 因此这里用less的3.x版本。less-loader貌似都可以，
               * 但最新的less-loader8.x也有其他兼容性问题，所以这里的less-loader用的7.x版本
               * https://github.com/ant-design/ant-design/issues/23125#issuecomment-757678485
               * https://lesscss.org/usage/#less-options-math
               */
              loader: 'less-loader',
              options: {
                lessOptions: {
                  javascriptEnabled: true,
                },
              },
            },
          ],
        },
        {
          test: /\.(jpg|jpeg|png|gif)$/,
          // type: 'asset/resource', // 约等于实现file-loader
          // generator:{
          //     filename:'img/[name]-[hash:6].[ext]'
          // }
          // type: 'asset/inline', // 全部都使用url-loader
          // include: /node_modules/,
          type: 'asset',
          generator: {
            filename: 'img/[name]-[hash:6][ext]',
          },
          parser: {
            dataUrlCondition: {
              maxSize: 4 * 1024, // 如果一个模块源码大小小于 maxSize，那么模块会被作为一个 Base64 编码的字符串注入到包中， 否则模块文件会被生成到输出的目标目录中
            },
          },
        },
        {
          test: /\.(svg|eot|ttf|woff2?)\??.*$/,
          // test: /\.(svg|eot|ttf|woff2?)$/,
          type: 'asset/resource',
          // type: 'asset/resource',
          // type: 'javascript/auto',
          // generator: {
          //   filename: 'font/[name]-[hash:6][ext]',
          // },
        },
      ],
    },
    plugins: [
      // new ESLintPlugin({
      //   cwd: resolveApp('./'),
      //   extensions: ['.js', '.jsx', '.ts', '.tsx', '.vue'],
      //   context: resolveApp('./'),
      //   // cache: true,
      //   // threads: false,
      //   // emitWarning: false,
      //   // emitError: false,
      //   // formatter: 'codeframe',
      // }),
      // 构建进度条
      new WebpackBar({
        name: 'billd-ui',
        color: 'yellow',
      }),
      // new DashboardPlugin(),
      // new FriendlyErrorsWebpackPlugin({}),

      /**
       * 默认webpack-dev-server会把devServer.contentBase目录做开发服务器，
       * 因此默认会找devServer.contentBase目录下的index.html
       * 在打包组件库的时候，我们不需要html-webpack-plugin这个插件。
       */
      /**
       * html-webpack-plugin插件将为你生成一个 HTML5 文件， 在 body 中使用 script 标签引入你所有 webpack 生成的 bundle
       */
      !isProduction
        ? new HtmlWebpackPlugin({
            filename: 'index.html',
            title: 'billd-ui',
            template: './public/index.html',
            hash: true,
            minify: isProduction
              ? {
                  collapseWhitespace: true, // 折叠空白
                  keepClosingSlash: true, // 在单标签上保留末尾斜杠
                  removeComments: true, // 移除注释
                  removeRedundantAttributes: true, // 移除多余的属性（如：input的type默认就是text，如果写了type="text"，就移除它，因为不写它默认也是type="text"）
                  removeScriptTypeAttributes: true, // 删除script标签中type="text/javascript"
                  removeStyleLinkTypeAttributes: true, // 删除style和link标签中type="text/css"
                  useShortDoctype: true, // 使用html5的<!doctype html>替换掉之前的html老版本声明方式<!doctype>
                  // 上面的都是production模式下默认值。
                  removeEmptyAttributes: true, // 移除一些空属性，如空的id,classs,style等等，但不是空的就全删，比如<img alt />中的alt不会删。
                  minifyCSS: true, // 使用clean-css插件删除 CSS 中一些无用的空格、注释等。
                  minifyJS: true, // 使用Terser插件优化
                }
              : false,
            chunks: ['main'], // 包含的入口块
          })
        : { apply() {} }, // plugins数组类似是对象，且要有apply方法。
      // 解析vue
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        // 将 CSS 提取到单独的文件中
        // Options similar to the same options in webpackOptions.output
        // all options are optional
        // filename: "css/[name]-[hash:6].css",
        filename:
          process.env.isProductionMin === 'true'
            ? 'billd.min.css'
            : '/billd.css',
        chunkFilename: 'css/[id].css',
        ignoreOrder: false, // Enable to remove warnings about conflicting order
      }),
      // 定义全局变量,https://stackoverflow.com/questions/66772358/webpack-warning-warning-in-defineplugin-conflicting-values-for-process-env-no
      new DefinePlugin({
        BASE_URL: '"./"', // public下的index.html里面的icon的路径
        // 'process.env': {
        //   NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        // },
      }),
    ],
  };
};

const smp = new SpeedMeasurePlugin();
module.exports = function (env) {
  console.log(env, 998888);
  return new Promise((resolve) => {
    const isProduction = env.production;
    const isProductionMin = env.productionMin;
    // Tip: process.env这个对象里面的所有属性的值都是字符串，给这个对象新增属性时，值都会默认进行toString()
    process.env.NODE_ENV = isProduction ? 'production' : 'development';
    process.env.isProductionMin = !!isProductionMin;
    // console.log(process.env);
    // prodConfig返回的是普通对象，devConfig返回的是promise，使用Promise.resolve进行包装
    const configPromise = Promise.resolve(
      isProduction ? (isProductionMin ? prodMinConfig : prodConfig) : devConfig
    );
    configPromise.then((config) => {
      // 根据当前环境，合并配置文件
      // if (isProductionMin) {
      const mergeConfig = merge(commonConfig(isProduction), config);
      // } else {
      //   mergeConfig = merge(commonConfig(isProduction), config);
      // }
      // 不要使用SpeedMeasurePlugin插件，使用它会导致MiniCssExtractPlugin插件报错。
      // resolve(smp.wrap(mergeConfig));
      // console.log(mergeConfig);
      resolve(mergeConfig);
    });
  });
};

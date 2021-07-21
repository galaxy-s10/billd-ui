<p align="center">
  <a href="">
    <img
      width="200"
      src="http://thirdqq.qlogo.cn/g?b=oidb&k=oYtOZYZxRicDmv3WsaGKXFQ&s=640&t=1618498456"
    />
  </a>
</p>

<h1 align="center">
  Billd-ui
</h1>

<div align="center">
基于vue2.x构建的组件库

[![npm version](https://img.shields.io/npm/v/billd-ui)](https://www.npmjs.com/package/billd-ui) [![npm downloads](https://img.shields.io/npm/dw/billd-ui)](https://www.npmjs.com/package/billd-ui)

</div>

# 快速上手

## 引入组件

### 自动按需引入(推荐)

1，首先安装 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import)

```bash
 npm i babel-plugin-import -D
```

2，配置babel.config.js

```js
//babel.config.js
module.exports = {
  plugins: [
    // billd-ui支持按需加载，安装babel-plugin-import，然后在babel配置文件添加如下内容即可
    [
      "import",
      {
        libraryName: "billd-ui",
        libraryDirectory: "dist",
        style: "css",
      },
      "billd-ui",
    ],
  ],
};

```

### 手动按需引入

```js
import Switch from 'billd-ui/dist/switch'
import 'billd-ui/dist/switch/style/index.css'
```

### 全局引入

> 待更新

## 组件文档

> 看当前项目下的Api.md

# 开发环境

> 基于 webpack5 搭建开发环境

目前开发环境支持解析：js，jsx，ts，tsx，vue，less 等资源文件。支持vue文件的热更新，支持 vue 的 jsx 语法，具体请看： https://github.com/vuejs/jsx。

执行npm run dev，即可在本地localhost:8080端口进行开发，可在src目录下的components里面编写jsx，tsx或者vue格式的代码，然后调试完了就将代码迁移到src目录外面的components目录里面，稍微做一些修改，即可将开发的代码进行下一步的编译打包~

```bash
npm run dev
```

# 构建环境

> 基于 gulp 以及 webpack5 进行构建

## build-tools

### 按需加载

使用 gulp 编译项目根目录下的components目录里的文件，打包出es和lib。es版是es6版本，lib版是es5版本

```bash
npm run compile
```

### 全局引入

使用 webpack 编译项目根目录下的components目录里的所以内容，打包出dist。

```bash
npm run dist
```

# 兼容性

## js

目前构建出来的 js 是基于 ES2015(即 es6)的。

## css

目前构建出来的 css 适配以下浏览器：

```
>1%
last 2 version
not dead
```




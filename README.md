<p align="center">
  <a href="http://project.hsslive.cn/billd-ui/">
    <img
      width="200"
      src="https://resource.hsslive.cn/image/1613141138717Billd.webp"
      alt="Billd-UI logo"
    />
  </a>
</p>

<h1 align="center">Billd-UI</h1>

<p align="center">基于Vue2.x构建的组件库</p>

<div align="center">
<a href="https://www.npmjs.com/package/billd-ui"><img src="https://img.shields.io/npm/v/billd-ui.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/billd-ui"><img src="https://img.shields.io/npm/dw/billd-ui.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/billd-ui"><img src="https://img.shields.io/npm/l/billd-ui.svg" alt="License"></a>
</div>

# 前言

billd-ui 组件库是 21 年 6 月份开始写的，那会工作不满一年，但是却能独立的写出这个组件库（不仅仅是 billd-ui，还包括 [billd-ui-icons](https://github.com/galaxy-s10/billd-ui-icons)），即使放到现在来看也感觉实属不易，billd-ui 组件库大量借鉴了 [ant-design](https://github.com/ant-design/ant-design) 和 [ant-design-vue](https://github.com/vueComponent/ant-design-vue) 和 [antd-tools](https://github.com/ant-design/antd-tools)，虽然 billd-ui 是一个组件库，但是重心并不在写组件的逻辑上，而是如何构建组件库的这个流程上，让我对组件库有了一个比较清晰的认知。

# 简介

基于 vue2.x，使用 vue jsx 语法搭建的组件库，支持按需加载。

- 前端框架：vue2.x
- 构建工具：webpack5 + gulp4 + bebel7 + less3
- 代码规范：eslint + prettier
- 文档：vuepress

# 组件列表

| 名称                                                                       | 支持 |
| -------------------------------------------------------------------------- | ---- |
| [icon](http://project.hsslive.cn/billd-ui/component/basic/icon.html)       | ✅   |
| [modal](http://project.hsslive.cn/billd-ui/component/basic/modal.html)     | ✅   |
| [switch](http://project.hsslive.cn/billd-ui/component/basic/switch.html)   | ✅   |
| [loading](http://project.hsslive.cn/billd-ui/component/basic/loading.html) | ✅   |
| [table](http://project.hsslive.cn/billd-ui/component/basic/table.html)     | ❗   |
| [message](http://project.hsslive.cn/billd-ui/component/basic/message.html) | ✅   |

# 生态系统

billd-ui 组件库将 icon 组件单独抽离出来成一个独立的组件库：`@huangshuisheng/icons-vue` ，而这个 `@huangshuisheng/icons-vue` 又依赖：`@huangshuisheng/icons-svg` 。这样做是为了将 icon 抽象成通用的基础库，后续可基于 `@huangshuisheng/icons-svg` 这个库开发 react，angular 的 icons 组件库，提高扩展性。

| 包名                                                                                 | 版本                                                                                                                      |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------- |
| [billd-ui](https://www.npmjs.com/package/billd-ui)                                   | [![npm](https://img.shields.io/npm/v/billd-ui)](https://www.npmjs.com/package/billd-ui)                                   |
| [@huangshuisheng/icons-vue](https://www.npmjs.com/package/@huangshuisheng/icons-vue) | [![npm](https://img.shields.io/npm/v/@huangshuisheng/icons-vue)](https://www.npmjs.com/package/@huangshuisheng/icons-vue) |
| [@huangshuisheng/icons-svg](https://www.npmjs.com/package/@huangshuisheng/icons-svg) | [![npm](https://img.shields.io/npm/v/@huangshuisheng/icons-svg)](https://www.npmjs.com/package/@huangshuisheng/icons-svg) |

# 安装

```sh
npm i billd-ui --save
```

# 使用

## 全局引入

```js
import Vue from 'vue';
import Billd from 'billd-ui';
import App from './App.vue';
import 'billd-ui/dist/billd.css';

Vue.use(Billd);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
```

全局引入后，就可以在项目的任何地方直接使用 billd-ui 组件

```vue
<template>
  <div>
    <b-switch></b-switch>
  </div>
</template>
```

## 局部引入组件

> 注意，这种写法只是写一个就引入注册一个组件，仍需手动导入样式，
>
> 自 1.2.6 版本开始，支持原生的 esm tree shaking，即无需使用按需加载插件，也能对 js 代码进行 tree shaking！但是 1.2.6 版本以前，并不支持原生的 esm tree shaking，他会和全局引入一样，都会对整个 billd-ui 进行打包

```vue
<template>
  <div>
    <b-switch></b-switch>
  </div>
</template>

<script>
import Vue from 'vue';
import { Switch } from 'billd-ui';
import 'billd-ui/es/switch/style/css'; //仍需手动引入样式

Vue.component(Switch.name, Switch);

// 上述写法约等于：
// Vue.use(Switch);

export default {};
</script>
```

## 按需加载(推荐)

第一种方式：通过以下的写法来按需加载组件：

```vue
<template>
  <div>
    <b-switch></b-switch>
  </div>
</template>

<script>
import Vue from 'vue';
import Switch from 'billd-ui/es/switch';
import 'billd-ui/es/switch/style/css'; //引入的是编译好的css
// import "billd-ui/es/switch/style"; //引入的是less源文件，如果项目有对less的处理就使用这个
Vue.use(Switch);

export default {};
</script>
```

第二种方式：如果你使用了 babel，可以使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来进行按需加载，首先 `npm i babel-plugin-import -D`，然后再添加 babel 的 plugins 配置：

> 注意：全局引入和这种方式的按需引入有冲突，这两者方式不能同时使用，否则会报错！

```js
plugins: [
  // billd-ui支持按需加载，安装babel-plugin-import，然后在babel配置文件添加如下内容即可
  [
    'import',
    {
      libraryName: 'billd-ui',
      libraryDirectory: 'es', // 默认lib
      /**
       * 这个按需加载很有意思，因为babel-plugin-import这个插件是ant-design官方写的，因此规则也是官方定的，
       * 有一点是肯定的：官方根据自家的ant-design组件库的整体架构，从而编写了一个插件专门对自家的ant-design组件库做的按需加载。
       * 这个style属性，如果没有这个属性，就不会引入样式；如果有这个style属性，它的值是true，代表：libraryName/libraryDirectory/组件名/style，即会引入style下的index.js
       * 如果值是'css',代表：libraryName/libraryDirectory/组件名/style/css，即会引入这个css.js文件
       */
      // style: true, // billd-ui使用了less，如果你的项目里面有对less做处理，可以使用此选项
      style: 'css', // 如果你的项目没有处理less，就使用这个选项。
    },
    'billd-ui',
  ],
];
```

插件会帮你将 `import { Switch } from 'billd-ui'` 转换成 `import Switch from billd-ui/es/switch` ，而且，因为配置了 style 属性，会按需加载该组件的样式，即会引入：`billd-ui/es/switch/style/css`

```vue
<template>
  <div>
    <b-switch></b-switch>
  </div>
</template>

<script>
import Vue from 'vue';
import { Switch } from 'billd-ui';
Vue.use(Switch);

export default {};
</script>
```

# 在浏览器使用

我们构建了 umd 版本，在 `billd-ui/dist` 目录下提供了

1. 开发版本： `billd.js`、`billd.css`、`billd.js.map`、`billd.css.map`
2. 生产版本： `billd.min.js`、`billd.min.css`、`billd.min.js.map`、`billd.min.css.map`

在浏览器中使用 `script` 和 `link` 标签直接引入文件，并使用全局变量 `Billd`即可（注意：请提前引入 vue）。

# 本地调试

> 可以在 src 目录引入构建好的组件查看效果

```sh
npm run dev
```

# 本地编译

编译 es、lib、dist 版本：

```sh
npm run compile
```

编译 es 版本：

```sh
npm run compile:es
```

编译 lib 版本：

```sh
npm run compile:lib
```

编译 dist 版本：

```sh
npm run compile:dist
```

# 如何发版

## 0.确保 git 工作区干净

即确保本地的修改已全部提交（git status 的时候会显示：`nothing to commit, working tree clean` ），否则会导致执行 `release:local` 脚本失败

## 1.执行本地发版脚本

```sh
npm run release:local
```

> 该脚本内部会做以下事情：

1. 根据用户选择的版本，更新 package.json 的 version
2. 构建 components 目录的组件
3. 对比当前版本与上个版本的差异，生成 changelog
4. 提交暂存区到本地仓库：git commit -m 'chore(release): v 当前版本'
5. 生成当前版本 tag：git tag v 当前版本

## 2.执行线上发版脚本

```sh
npm run release:online
```

> 该脚本内部会做以下事情：

1. 提交当前版本：git push
2. 提交当前版本 tag：git push origin v 当前版本
3. 根据 meta/packages.ts，发布 packages 里对应的包到 npm

# 感慨

一年前，对前端的代码规范以及工程化没什么概念（即使有，也不是特别深），当时写出来的这个 billd-ui 组件库可以说是超常发挥（也是因为大量借鉴优秀的组件库源码）。但是，它毕竟是一年前写的，现在看来其实存在很多不足的地方，比如当时的发 npm 包都是手动的，没有一个完整的体系（比如：[release-it](https://github.com/release-it/release-it)），其次，组件的按需加载因为入口文件的问题，导致不能原生的支持 esm 的 tree shaking 等问题。billd-ui 这个组件库对我最明显的提升就是让我对 webpack、gulp 、babel 这些工具有了一个认知以及实际上的应用，还有如何开发一个库，需要考虑什么问题等等，对后面开发的一些有意思的库做铺垫~

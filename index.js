// 引入所有样式
const req = require.context(
  './components',
  true,
  /^\.\/([^/]+)\/style\/index.js$/
);

export { default as Billd } from './components';

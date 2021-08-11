// 引入所有样式
require.context('./components', true, /^\.\/([^/]+)\/style\/index.js$/);

export { default as Billd } from './components';

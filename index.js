// 引入所有样式
require.context('./components', true, /^\.\/([^/]+)\/style\/index.js$/);
// 引入所有组件
require('./components');

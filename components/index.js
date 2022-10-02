import pkg from '../package.json';
import * as components from './components';

export * from './components';

const install = function (Vue) {
  Object.keys(components).forEach((key) => {
    const component = components[key];
    if (component.install) {
      Vue.use(components[key]);
    }
  });
  Vue.prototype.$Message = components.Message;
};

// export导出的不是一个对象！！！下面的是错误写法
// export { install: install };
export default { install, version: pkg.version };

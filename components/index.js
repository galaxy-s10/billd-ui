// import Vue from 'vue';
import Loading from './loading';
import Switch from './switch';
import Icon from './icon';
import Table from './table';
import Modal from './modal';
import Message from './message';

const allComponents = [Loading, Switch, Icon, Table, Modal];

const install = function (Vue) {
  allComponents.forEach((item) => {
    Vue.use(item);
  });
  Vue.prototype.$Message = Message;
};
// export导出的不是一个对象！！！下面的是错误写法
// export { install: install };

export { Loading, Switch, Icon, Table, Modal, Message };
export default { install };

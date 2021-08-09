// import Vue from 'vue';
import Loading from './loading';
import Switch from './switch';
import Icon from './icon';
import Table from './table';
import Modal from './modal';

const allComponents = [Loading, Switch, Icon, Table, Modal];

const install = function (Vue) {
  allComponents.forEach((item) => {
    Vue.use(item);
  });
};
// export导出的不是一个对象！！！下面的是错误写法
// export { install: install };

export default { install, Loading, Switch, Icon, Table, Modal };

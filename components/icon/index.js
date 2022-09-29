const Icon = {
  name: 'BIcon',
  inheritAttrs: false,
  render() {
    console.warn(
      'please use @huangshuisheng/icons-vue(https://www.npmjs.com/package/@huangshuisheng/icons-vue)'
    );
  },
};

Icon.install = function (Vue) {
  Vue.component(Icon.name, Icon);
};

export default Icon;

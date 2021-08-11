import Vue from 'vue';
import * as allIcons from '@huangshuisheng/icons-vue';

Object.keys(allIcons).forEach((name) => {
  Vue.component(name, allIcons[name]);
});

const Icon = {
  name: 'BIcon',
  inheritAttrs: false,
  render(h) {
    // 注意：如果是props定义了customStyle，那么在传参时可以使用custom-style或者customStyle
    // 但是this.attrs就是写什么得到的就是什么，不会转换。
    const { type, spin, customStyle, rotate } = this.$attrs;
    // console.log(this.$attrs);
    // console.log(type, spin, customStyle, rotate);
    return h(type, {
      props: {
        spin,
        customStyle,
        rotate,
      },
    });
  },
};

Icon.install = function (Vue) {
  Vue.component(Icon.name, Icon);
};

export default Icon;

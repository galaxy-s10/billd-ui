import checkAuth from './checkAuth';
// import store from '@/store'

export default {
  bind(el, binding) {
    console.log('自定义指令，绑定', el, binding);
  },
  inserted(el, binding) {
    console.log('自定义指令，插入', el, binding);
    const { value } = binding;
    // const auths = store.state.user.auth
    const auths = ['a', 'b'];
    if (value && auths) {
      const isPermission = checkAuth(auths, value);
      if (!isPermission) {
        el.parentNode && el.parentNode.removeChild(el);
      }
    } else {
      console.log('这是不需要验证权限的路由，不移除');
      // throw new Error('缺少指令权限数据')
    }
  },
  update(el, binding) {
    console.log('自定义指令，更新', el, binding);
  },
};

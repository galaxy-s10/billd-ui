import directiveAuth from './auth';

export default {
  install(Vue) {
    Vue.directive('auth', directiveAuth);
  },
};

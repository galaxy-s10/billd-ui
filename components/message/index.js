import Vue from 'vue';
import Main from './main';

let baseConfig = {
  type: 'info',
  closeAble: false,
  duration: 2000,
};
const MessageConstructor = Vue.extend(Main);
const messageInstance = new MessageConstructor();
messageInstance.$mount();
// document.body.appendChild(messageInstance.$el);
// 支持服务端渲染
Vue.mixin({
  mounted() {
    document.body.appendChild(messageInstance.$el);
  },
});

const Message = function (options) {
  const newOptions = { ...baseConfig, ...options };
  if (!messageInstance[newOptions.type])
    return console.error(
      `Message.type: '${newOptions.type}' is error, Message.type can only be one of 'success' 'warning' 'info' 'error' 'loading'`
    );
  return messageInstance[newOptions.type](newOptions);
};

['success', 'warning', 'info', 'error', 'loading'].forEach((type) => {
  Message[type] = (options) => {
    options.type = type;
    return Message(options);
  };
});

Message.closeAll = function () {
  messageInstance.closeAll();
};
Message.config = function (options) {
  baseConfig = { ...baseConfig, ...options };
};

export default Message;

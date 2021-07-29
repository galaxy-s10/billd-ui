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
document.body.appendChild(messageInstance.$el);

const Message = function (options) {
  const newOptions = { ...baseConfig, ...options };
  return messageInstance[newOptions.type](newOptions);
};

['success', 'warning', 'notice', 'error'].forEach((type) => {
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

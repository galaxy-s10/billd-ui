import Main from './main';
import Vue from 'vue';

let baseConfig = {
    type: 'info',
    closeAble: false,
    duration: 2000,
}
let messageConstructor = Vue.extend(Main)
let messageInstance = new messageConstructor()
messageInstance.$mount()
document.body.appendChild(messageInstance.$el);

const Message = function (options) {
    let newOptions = Object.assign({}, baseConfig, options)
    return messageInstance[newOptions.type](newOptions)
};

;['success', 'warning', 'notice', 'error'].forEach(type => {
    Message[type] = options => {
        options.type = type;
        return Message(options);
    };
});

Message.closeAll = function () {
    messageInstance.closeAll();
};
Message.config = function (options) {
    baseConfig = Object.assign({}, baseConfig, options)
};
export default Message;
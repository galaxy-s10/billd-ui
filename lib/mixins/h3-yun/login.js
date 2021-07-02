"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginAccount = loginAccount;
exports.default = void 0;

var _fetch = _interopRequireDefault(require("./fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var account = {
  'infrastructure': {
    dingId: '$:LWCP_v1:$cPisamX63jMBXKooTYz3oA==',
    engineCode: 'l22smty7f9kco78qhc66rmrh5'
  },
  'master': {
    dingId: '$:LWCP_v1:$cPisamX63jMBXKooTYz3oA==',
    engineCode: 'l22smty7f9kco78qhc66rmrh5'
  }
};

function loginAccount(local) {
  var dingid = account[local].dingId;
  var engineCode = account[local].engineCode;
  window.localStorage.setItem('H3_DEV_GROUP', local);
  var paramData = {
    mobile: '',
    dingid: dingid,
    engineCode: engineCode,
    clusterTokenId: 1
  };
  return new Promise(function (resolve, reject) {
    (0, _fetch.default)('/login/LoginByMobile', paramData, 'POST', true, "/".concat(local, "Apis")).then(function (data) {
      if (!data.Result) {
        console.log('登录失败', data);
      }

      resolve();
    });
  });
}

var _default = {
  loginAccount: loginAccount
};
exports.default = _default;
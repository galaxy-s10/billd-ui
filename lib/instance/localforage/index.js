"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _localforage = _interopRequireDefault(require("localforage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __awaiter = void 0 && (void 0).__awaiter || function (thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
};

var storageOpt = {
  name: 'name',
  driver: _localforage.default.INDEXEDDB
}; // 过期时间60分钟

var expired = 1000 * 60 * 60;
var localforageInstance = null;

var _getInstance = function _getInstance() {
  if (!localforageInstance) {
    localforageInstance = _localforage.default.createInstance(storageOpt);
  }

  if (!localforageInstance.isExpired) {
    localforageInstance = _buildInstance(localforageInstance);
  }

  return localforageInstance;
};

var _buildInstance = function _buildInstance(localforageInstance) {
  var originInstance = localforageInstance;
  var instance = {
    /**
     * 查询是否过期
     */
    isExpired: function isExpired(time) {
      if (time && new Date().getTime() - time >= expired) {
        return true;
      }

      return false;
    },

    /**
     * 获取存储元素，如过期，则删除
     */
    getItem: function getItem(name) {
      return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee() {
        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resolve, reject) {
                  originInstance.getItem(name).then(function (res) {
                    if (!res) {
                      resolve(res);
                    } else {
                      if (res.expired && instance.isExpired(res.expired)) {
                        originInstance.removeItem(name);
                        resolve(null);
                      } else if (res.value) {
                        resolve(res.value);
                      }
                    }
                  }).catch(function (err) {
                    reject(err);
                  });
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    },

    /**
     * 写入本地存储，并包装时间戳
     */
    setItem: function setItem(name, value) {
      return __awaiter(void 0, void 0, void 0, /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve, reject) {
                  originInstance.setItem(name, {
                    value: value,
                    expired: new Date().getTime()
                  }).then(function (keyName) {
                    resolve(keyName);
                  }).catch(function (err) {
                    reject(err);
                  });
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));
    },

    /**
     * 移除，直接删除
     */
    removeItem: originInstance.removeItem
  };
  return instance;
};

var _default = _getInstance();

exports.default = _default;
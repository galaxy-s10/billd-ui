"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addWheelListener = addWheelListener;
exports.getCursortPosition = getCursortPosition;
exports.setInputPosition = setInputPosition;
exports.setCaretPosition = setCaretPosition;
exports.default = void 0;
// start 兼容滚动事件
var prefix = '';

var _addEventListener;

var support; // detect event model
// @ts-ignore

if (window.addEventListener) {
  _addEventListener = 'addEventListener';
} else {
  _addEventListener = 'attachEvent';
  prefix = 'on';
} // detect available wheel event


support = 'onwheel' in document.createElement('div') ? 'wheel' : // 各个厂商的高版本浏览器都支持"wheel"
document.onmousewheel !== undefined ? 'mousewheel' : // Webkit 和 IE一定支持"mousewheel"
'DOMMouseScroll'; // 低版本firefox

function _addWheelListener(elem, eventName, callback, useCapture) {
  elem[_addEventListener](prefix + eventName, support === 'wheel' ? callback : function (originalEvent) {
    !originalEvent && (originalEvent = window.event); // create a normalized event object

    var event = {
      // keep a ref to the original event object
      originalEvent: originalEvent,
      target: originalEvent.target || originalEvent.srcElement,
      type: 'wheel',
      deltaMode: originalEvent.type === 'MozMousePixelScroll' ? 0 : 1,
      deltaX: 0,
      deltaZ: 0,
      preventDefault: function preventDefault() {
        originalEvent.preventDefault ? originalEvent.preventDefault() : originalEvent.returnValue = false;
      }
    }; // calculate deltaY (and deltaX) according to the event

    if (support === 'mousewheel') {
      event.deltaY = -1 / 40 * originalEvent.wheelDelta; // Webkit also support wheelDeltaX

      originalEvent.wheelDeltaX && (event.deltaX = -1 / 40 * originalEvent.wheelDeltaX);
    } else {
      event.deltaY = originalEvent.detail;
    }

    return callback(event);
  }, useCapture || false);
}
/**
 * 注册滚轮事件
 * @param elem
 * @param callback
 * @param useCapture
 */


function addWheelListener(elem, callback, useCapture) {
  _addWheelListener(elem, support, callback, useCapture); // handle MozMousePixelScroll in older Firefox


  if (support === 'DOMMouseScroll') {
    _addWheelListener(elem, 'MozMousePixelScroll', callback, useCapture);
  }
} // end 兼容滚动事件


function getCursortPosition(element) {
  var caretOffset = 0;
  var doc = element.ownerDocument || element.document;
  var win = doc.defaultView || doc.parentWindow;
  var sel;

  if (typeof win.getSelection !== 'undefined') {
    // Chrome, Firefox
    sel = win.getSelection();

    if (sel.rangeCount > 0) {
      var range = win.getSelection().getRangeAt(0);
      var preCaretRange = range.cloneRange();
      preCaretRange.selectNodeContents(element);
      preCaretRange.setEnd(range.endContainer, range.endOffset);
      caretOffset = preCaretRange.toString().length;
    }
  } else if ((sel = doc.selection) && sel.type !== 'Control') {
    var textRange = sel.createRange();
    var preCaretTextRange = doc.body.createTextRange();
    preCaretTextRange.moveToElementText(element);
    preCaretTextRange.setEndPoint('EndToEnd', textRange);
    caretOffset = preCaretTextRange.text.length;
  }

  return caretOffset;
}

function setCaretPosition(element, pos) {
  var range;
  var selection;

  if (document.createRange) {
    // Firefox, Chrome, Opera, Safari, IE 9+
    range = document.createRange();
    range.selectNodeContents(element);

    if (element.innerHTML.length > 0) {
      range.setStart(element.childNodes[0], pos);
    }

    range.collapse(true);
    selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  } else if (document.selection) {
    range = document.body.createTextRange();
    range.moveToElementText(element);
    range.collapse(false);
    range.select();
  }
} // 设置光标位置


function setInputPosition(element, pos) {
  if (element.setSelectionRange) {
    element.focus();
    element.setSelectionRange(pos, pos);
  } else if (element.createTextRange) {
    var range = element.createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
}

var _default = {
  addWheelListener: addWheelListener,
  getCursortPosition: getCursortPosition,
  setInputPosition: setInputPosition,
  setCaretPosition: setCaretPosition
};
exports.default = _default;
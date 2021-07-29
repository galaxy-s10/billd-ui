export function throttle(fn, interval, option) {
  let lastTime = 0;
  let timer;
  option = option || {};
  const trailing = option.trailing || false;
  return function () {
    const _this = this;
    const _arguments = arguments;
    const newTime = new Date().getTime();

    if (timer) {
      clearTimeout(timer);
    }

    let result;
    return new Promise((resolve) => {
      if (newTime - lastTime > interval) {
        result = fn.apply(_this, _arguments);
        resolve(result);

        lastTime = newTime;
      } else if (trailing) {
        timer = setTimeout(() => {
          result = fn.apply(_this, _arguments);
          resolve(result);
        }, interval);
      }
    });
  };
}
export function debounce(fn, delay, leading) {
  let timer;
  leading = leading || false;
  const debounceFn = function () {
    if (timer) {
      clearTimeout(timer);
    }
    const _this = this;
    const _arguments = arguments;
    return new Promise((resolve) => {
      if (leading) {
        let isFirst = false;
        if (!timer) {
          resolve(fn.apply(_this, _arguments));
          isFirst = true;
        }
        timer = setTimeout(() => {
          timer = null;
          if (!isFirst) {
            resolve(fn.apply(_this, _arguments));
          }
        }, delay);
      } else {
        timer = setTimeout(() => {
          resolve(fn.apply(_this, _arguments));
        }, delay);
      }
    });
  };

  debounceFn.cancel = function () {
    clearTimeout(timer);
    timer = null;
  };
  return debounceFn;
}

export function getScrollBarWidth() {
  const inner = document.createElement('p');
  inner.style.width = '100%';
  inner.style.height = '200px';

  const outer = document.createElement('div');
  outer.style.position = 'absolute';
  outer.style.top = '0px';
  outer.style.left = '0px';
  outer.style.visibility = 'hidden';
  outer.style.width = '200px';
  outer.style.height = '150px';
  outer.style.overflow = 'hidden';
  outer.appendChild(inner);

  document.body.appendChild(outer);
  const w1 = inner.offsetWidth;
  outer.style.overflow = 'scroll';
  let w2 = inner.offsetWidth;
  if (w1 === w2) w2 = outer.clientWidth;

  document.body.removeChild(outer);

  return w1 - w2;
}

// import Vue from "vue";
// import auth from "../../plugins";
// Vue.use(auth);
import './index.less';

const directives = [{ name: 'auth', value: 'b' }];
console.log({ ...directives });
console.log({ ...{ directives } });
console.log({ ...{ domProps: { key1: 234, xga: 342 } } });
console.log({ ...{ key1: 234, xga: 342 } });
export default {
  render() {
    return (
      <div>
        我是自定义指令Cpt,
        <span>v-auth自定义指令</span>
        {/* <div {...{ directives }}>哈哈哈</div> */}
        {/* <div {...directives}>哈哈哈</div> */}
        {/* <div {...{ directives: directives }}>哈哈哈</div> */}
        {/* 这个directives会被当成自定义属性。 */}
        <div directives={[{ name: 'auth', value: 'a' }]}>
          这个directives会被当成自定义属性。
        </div>
        {/* 这个directives会vnode数据 */}
        <div {...{ directives: [{ name: 'auth', value: 'a' }] }}>
          这个directives会vnode数据
        </div>
        {/* 通过attrs设置dom的自定义属性 */}
        <div {...{ attrs: { key: 234333333333333, xga: 34111112 } }}>
          domProps11
        </div>
        <div attrs={{ key: 3434 }}>attrsattrs</div>
        <div key1="2342">domProps22</div>
        {/* 这样写key也会被vue当做是特殊attr */}
        <div key="333">domProps333</div>
        {/* 通过vnode指令数据格式1 */}
        <div
          {...{
            directives: [
              {
                name: 'auth',
                value: 'a',
                modifiers: {},
              },
              {
                name: 'auth',
                value: 'a',
                modifiers: {
                  bar: true,
                },
              },
              {
                name: 'auth',
                value: 'a',
                modifiers: {
                  foo: true,
                },
              },
            ],
            staticClass: 'sdgdsg',
            class: ['123', '2355'],
          }}>
          通过vnode指令数据格式1
        </div>
        {/* v-auth="a"和v-auth={"a"}约等于就是把字符串a传给自定义指令 */}
        <div v-auth="a">自定义指令生效，而且显示</div>
        <div v-auth={'a'}>自定义指令生效，而且显示</div>
        <div v-auth={'aaa'}>自定义指令生效，但不显示</div>
        {/* 下面都是将一个对象传给自定义指令的binding的value */}
        <div v-auth={{ value: 'a', modifiers: { hi: true } }}>
          自定义指令不生效1
        </div>
        <div v-auth={{ value: 'aa', modifier: true }}>自定义指令不生效2</div>
        <div v-auth={{ age: 1, name: 2 }}>age:1,name:2</div>
      </div>
    );
  },
};

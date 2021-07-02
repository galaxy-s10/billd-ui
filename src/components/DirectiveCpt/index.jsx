// import Vue from "vue";
// import auth from "../../plugins";
// Vue.use(auth);
import { CreateElement } from "vue";

const directives = [{ name: "auth", value: "b" }];
console.log({ ...directives });
console.log({ ...{ directives } });
export default {
  render() {
    return (
      <div>
        我是自定义指令Cpt,
        <span>v-auth自定义指令</span>
        {/* <div {...{ directives }}>哈哈哈</div> */}
        {/* <div {...directives}>哈哈哈</div> */}
        {/* <div {...{ directives: directives }}>哈哈哈</div> */}
        {/* <div directives={[{ name: "auth", value: "b1" }]}>哈哈哈</div> */}
        {/* 通过vnode指令数据格式 */}
        <div
          {...{
            directives: [
              {
                name: "auth",
                value: "a",
                // expression: "1 + 1",
                // arg: "foo",
                // modifiers: {
                //   bar: true,
                // },
              },
            ],
            staticClass:'sdgdsg',
            class: ["123", "2355"],
          }}
        >
          通过vnode指令数据格式
        </div>
        {/* v-auth="a"和v-auth={"a"}约等于就是把字符串a传给自定义指令 */}
        <div v-auth="a">自定义指令生效，而且显示</div>
        <div v-auth={"a"}>自定义指令生效，而且显示</div>
        <div v-auth={"aaa"}>自定义指令生效，但不显示</div>
        {/* 下面都是将一个对象传给自定义指令的binding的value */}
        <div v-auth={{ value: "a", modifiers: { hi: true } }}>
          自定义指令不生效1
        </div>
        <div v-auth={{ value: "aa", modifier: true }}>自定义指令不生效2</div>
        <div v-auth={{ age: 1, name: 2 }}>age:1,name:2</div>
      </div>
    );
  },
};

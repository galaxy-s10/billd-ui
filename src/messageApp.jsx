import HssMessage from "./components/hss-ui-cpt/message/index";
export default {
  components: {},
  data() {
    return {};
  },
  render() {
    return (
      <div>
        <div on-click={this.showMessage}>点击显示message</div>
        <div on-click={this.closeAll}>关闭所有</div>
      </div>
    );
  },
  computed: {},
  created() {},
  mounted() {
    // 修改全局默认配置
    // HssMessage.config({
    //   type: "warning",
    //   closeAble: true,
    //   duration: 3000,
    // });
  },
  methods: {
    closeAll() {
      HssMessage.closeAll();
    },
    showMessage() {
      // 不写状态，默认info
      HssMessage({
        content: "hello1111111111",
        closeAble: true,
        duration:1000,
      });
      // // 不手动调用状态，通过参数设置
      // HssMessage({
      //   type: "error", //手动设置状态
      //   content: "errrorrrrr",
      // });
      // // 手动设置状态
      // HssMessage.success({
      //   content: "hello world",
      //   type: "error", //覆盖不了，不生效
      // });
      // // 设置icon可覆盖状态
      // HssMessage.success({
      //   content: "hello world",
      //   icon: <i>opp!</i>, //会覆盖原本的success
      // });

      // // 可关闭
      // HssMessage({
      //   content: "可关闭可关闭",
      //   closeAble: true,
      // });
      // // // 设置持续时间，默认2000毫秒
      // HssMessage.success({
      //   content: <h3>hello2</h3>,
      //   duration: 3000,
      // });
      // // 内容也可是VNode
      // HssMessage.success({
      //   content: "<h2>hello1111</h2>",
      // });
    },
  },
};

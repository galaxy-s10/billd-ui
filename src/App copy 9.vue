<script>
import '../dist/billd.css'; // message是全局挂载的，因此需要引入样式。

export default {
  components: {},
  data() {
    return {};
  },
  render() {
    return (
      <div>
        <div vOn:Click={this.showMessage}>点击显示message</div>
        <div vOn:Click={this.closeAll}>关闭所有</div>
      </div>
    );
  },
  computed: {},
  created() {},
  mounted() {
    // 修改全局默认配置
    // this.$Message.config({
    //   type: 'warning',
    //   closeAble: true,
    //   duration: 3000,
    // });
  },
  methods: {
    closeAll() {
      this.$Message.closeAll();
    },
    showMessage() {
      // 不写状态，默认info
      this.$Message({
        content: 'hello1111111111',
        closeAble: false,
      });
      // 不手动调用状态，通过参数设置
      this.$Message({
        type: 'error', // 手动设置状态
        content: 'errrorrrrr',
      });
      // 手动设置状态
      this.$Message.success({
        content: 'hello world',
        type: 'error', // 覆盖不了，不生效
      });
      this.$Message.loading({
        content: 'hello world',
      });
      // 设置icon可覆盖状态
      this.$Message.success({
        content: 'hello world',
        icon: <i>opp!</i>, // 会覆盖原本的success
      });

      // 可关闭
      this.$Message({
        content: '可关闭可关闭',
        closeAble: true,
      });
      // // 设置持续时间，默认2000毫秒
      this.$Message.success({
        content: <b>hello2</b>,
        duration: 30000,
      });
      // 内容也可是VNode
      this.$Message.success({
        content: '<h2>hello1111</h2>',
      });
    },
  },
};
</script>

<style scoped></style>

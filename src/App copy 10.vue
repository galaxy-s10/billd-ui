<script>
import { Message } from 'billd-ui';

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
    // Message.config({
    //   type: 'warning',
    //   closeAble: true,
    //   duration: 3000,
    // });
  },
  methods: {
    closeAll() {
      Message.closeAll();
    },
    showMessage() {
      // 不写状态，默认info
      Message({
        content: 'hello world!!',
        closeAble: false,
      });
      // 不手动调用状态，通过参数设置
      Message({
        type: 'error', // 手动设置状态
        content: 'errrorrrrr',
      });
      // 手动设置状态
      Message.success({
        content: 'hello world',
        type: 'error', // 覆盖不了，不生效
      });
      Message.loading({
        content: 'hello world',
      });
      // 设置icon可覆盖状态
      Message.success({
        content: 'hello world',
        icon: <i>opp!</i>, // 会覆盖原本的success
      });

      // 可关闭
      Message({
        content: '可关闭可关闭',
        closeAble: true,
      });
      // // 设置持续时间，默认2000毫秒
      Message.success({
        content: <b>hello2</b>,
        duration: 30000,
      });
      // 内容也可是VNode
      Message.success({
        content: '<h2>hello1111</h2>',
      });
    },
  },
};
</script>

<style scoped></style>

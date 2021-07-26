const wechat123 = require('./wechat123.jpg');

export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    clickme() {
      console.log('clickmeclickmeclickme');
    },
    enterClick() {
      console.log('enter!!!');
    },
  },
  render() {
    return (
      <div>
        <div>我是vueRenerCpt</div>
        <div vOn:click={this.clickme}>click me</div>
        <input vOn:keyup_enter={this.enterClick} />
        <div attrs={{ key: 2323 }} abc="23">
          attrskey
        </div>
        <div {...{ attrs: { key: 234333333333333, xga: 34111112 } }}>key22</div>
        <img src={wechat123} style="width:100px;" />
      </div>
    );
  },
};

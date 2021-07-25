<script>
export default {
  components: {},
  data() {
    return {};
  },
  render() {
    return (
      <div>
        <div>我是vueRenerCpt234----</div>
        <div vOn:click={this.clickme}>click me</div>
        <input vOn:keyup_enter={this.enterClick} />
        <div attrs={{ key: 2323 }} abc="23">
          attrskey1111111111111111
        </div>
        <div {...{ attrs: { key: 234333333333333, xga: 34111112 } }}>key22</div>
        <img src={require('./wechat123.jpg')} style="width:120px;" />
      </div>
    );
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    clickme() {
      console.log('clickmeclickmeclickme');
    },
    enterClick(v) {
      console.log('enter!!!');
    },
  },
};
</script>

<style scoped></style>

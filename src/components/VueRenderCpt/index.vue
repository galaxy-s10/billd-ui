<script>
export default {
  components: {},
  data() {
    return {};
  },
  render() {
    return (
      <div>
        <div>我是vueRenerCpt</div>
        <div vOn:click={this.clickme}>click me</div>
        <input vOn:keyup_enter={this.enterClick} />
        <div attrs={{ key: 2323 }}>attrskey</div>
        <div {...{attrs:{ key: 234333333333333, xga: 34111112 }}}>key22</div>
        {[1, 2, 3].map(v => (
          <div attrs={{ key: v }}> key{v}</div>
        ))}
      </div>
    );
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    clickme() {
      console.log("clickmeclickmeclickme");
    },
    enterClick(v) {
      console.log("enter!!!");
    }
  }
};
</script>

<style scoped></style>

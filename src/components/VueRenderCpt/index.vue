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
    },
  },
};
</script>

<style scoped>
</style>
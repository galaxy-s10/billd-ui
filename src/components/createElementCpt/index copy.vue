<script>
export default {
  data() {
    return {
      obj: { a: 1, b: 2 },
      arr: [1, 2, 3],
    };
  },
  render() {
    /**
     * createElement({String | Object | Function},{Object},{String | Array})
     * https://cn.vuejs.org/v2/guide/render-function.html#createElement-参数
     */
    // h函数的第三个参数是对象，会渲染成undefined。
    // return h("div", {}, { a: 1 });
    // h函数的第三个参数是数组，会渲染，但数组里面的的前两项都是对象，会渲染成undefined
    // return h("div", {}, [{ a: 1 }, { b: 2 }, [3, 4, 5], "hello", 998]);
    // h函数的第三个参数是数组，会渲染
    // return h("div", {}, [1, 2]);
    // return h("div", {}, 23233223223);
    const obj = { a: 45545454 };
    return <div>{obj}</div>;
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped></style>

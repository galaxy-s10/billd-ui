import Vue from 'vue';

// export default {
export default class classCpt extends Vue {
  // 翻车
  mounted() {
    console.log('我是classCpt');
    console.log(this.$el);
  }

  render() {
    return <div>classCpt</div>;
  }
}

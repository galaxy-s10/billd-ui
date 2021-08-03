import Vue from 'vue';

export default class classCpt extends Vue {
  mounted() {
    console.log('我是classCpt');
    console.log(this.$el);
  }

  render() {
    return <div>classCpt</div>;
  }
}

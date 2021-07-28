export default {
  render() {
    return <div vOn:click={this.hanldeClick}>我是prettier.jsx</div>;
  },
  methods: {
    hanldeClick() {
      console.log('xxx');
    },
  },
};

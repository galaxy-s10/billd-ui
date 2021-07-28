// eslint不能识别tsx的vOn:click，会报语法错误
export default {
  render(): unknown {
    return (
      // <div onclick={this.clickHandle}>
        // eslint-disable-next-line prettier/prettier
        <div vOn:click={this.clickHandle}>
        我是tsxCpt
      </div>
    );
  },
  methods: {
    clickHandle(): void {
      console.log('hi');
    },
  },
};

import './abg.js';

export default {
  render(): unknown {
    // eslint-disable-next-line prettier/prettier
    return <div vOn:click={this.clickHandle}>我是tsxCpt</div>;
  },
  methods: {
    clickHandle(): void {
      console.log('hi');
    },
  },
};

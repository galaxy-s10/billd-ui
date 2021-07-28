// const { hello } = require("../../utils/hello"); //node模块化

export default {
  render(): unknown {
    return (
      <div>
        我是tsxClassCpt
        {/* <h-input></h-input> */}
        {/* <input vOn:keyup_enter={e => this.enterClick(e)} /> */}
      </div>
    );
  },
  methods: {},
  // enterClick(e) {
  //   console.log('enter!!!', e);
  // }
};

// const { hello } = require("../../utils/hello"); //node模块化

export default class TsxClassCpt {
  render() {
    return (
      <div>
        我是tsxClassCpt
        {/* <h-input></h-input> */}
        <input vOn:keyup_enter={(e) => this.enterClick(e)} />
      </div>
    );
  }
  enterClick(e) {
    console.log("enter!!!", e);
  }
};

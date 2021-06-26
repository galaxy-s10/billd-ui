// const { hello } = require("../../utils/hello"); //node模块化
import { hello } from "../../utils/hello"; //es6模块化

// hello(123);  //报错:类型“number”的参数不能赋给类型“string”的参数。ts(2345)
hello("typescript");

export default {
  render() {
    return <div>我是tsxCpt</div>;
  },
};

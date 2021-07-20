import Switch from "./switch/index"; // import Message from "./message";
// import Modal from "./modal";
// import Table from "./table";

import Loading from "./loading/index"; // import '../test.js'

import sum from "./sum/index";
console.log(sum(12, 3)); // export const components = {
//   Switch,
//   Loading
// };
// const install = function(app) {
//   Object.keys(components).forEach(key => {
//     const component = components[key];
//     // console.log(component);
//     if (component.install) {
//       app.use(component);
//     }
//   });
// };
// export default install;

export { sum, Loading, Switch };
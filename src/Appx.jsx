import Switch from "../dist/switch";
import "../dist/switch/style/css";
export default {
  components: {
    HSwitch: Switch
  },
  render() {
    return (
      <div>
        <h-switch vOn:clickSwitch={(x,e)=>this.clickSwitch(x,e)}></h-switch>
      </div>
    );
  },
  methods: {
    clickSwitch(v,e) {
      console.log(arguments);
      console.log(v,e);
    }
  }
};

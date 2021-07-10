import Switch from "../dist/switch";
import "../dist/switch/style/css";
export default {
  components: {
    HSwitch: Switch
  },
  render() {
    console.log(
      <div>
        <h-switch dgdf="sdgs" sg="fsdf" switchVal="false" vOn:clickSwitch={(x, e) => this.clickSwitch(x, e)}></h-switch>
      </div>
    );
    return (
      <div>
        <h-switch vOn:clickSwitch={(x, e) => this.clickSwitch(x, e)}></h-switch>
      </div>
    );
  },
  methods: {
    clickSwitch(v, e) {
      console.log(arguments);
      console.log(v, e);
    }
  }
};

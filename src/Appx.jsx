// import Switch from '../dist/switch';
// import '../dist/switch/style/css';
export default {
  components: {
    // HSwitch: Switch,
  },
  methods: {
    clickSwitch(v, e) {
      console.log(arguments);
      console.log(v, e);
    },
  },
  render() {
    // console.log(
    //   <div>
    //     <h-switch
    //       dgdf="sdgs"
    //       sg="fsdf"
    //       switchVal="false"
    //       vOn:clickSwitch={(x, e) => this.clickSwitch(x, e)}></h-switch>
    //   </div>,
    // );
    const a = 0;
    const b = 2;
    return (
      <div>
        eee
        <span style={[a && b && { color: 'red' }]}>ff</span>
        {/* <h-switch vOn:clickSwitch={(x, e) => this.clickSwitch(x, e)}></h-switch> */}
      </div>
    );
  },
};

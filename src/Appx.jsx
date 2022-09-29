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
    const a = 0;
    const b = 2;
    return (
      <div>
        App.jsx
        <span style={[a && b && { color: 'red' }]}>xxxx</span>
        {/* <h-switch vOn:clickSwitch={(x, e) => this.clickSwitch(x, e)}></h-switch> */}
      </div>
    );
  },
};

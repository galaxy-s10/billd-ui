import Switch from '../switch';

export default {
  components: { HSwitch: Switch },
  render() {
    return (
      <div>
        <h-switch a="23" b="sdgh"></h-switch>
        <img src="./loading.png" alt="" />
        加载中
      </div>
    );
  },
};

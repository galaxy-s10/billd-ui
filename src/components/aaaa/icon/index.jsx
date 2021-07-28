const icon = require('../../../assets/img/info.svg');

export default {
  props: {
    type: undefined,
  },
  components: {},
  data() {
    return {
      typeList: ['success', 'info', 'error', 'warning'],
      // imglist: [{ success: require('../assets/img/') }],
    };
  },
  render() {
    return (
      <div>
        {/* 判断type，如果没有设置type或者设置了type但是找不到，默认icon就是notice */}
        {this.typeList.indexOf(this.type) !== -1 ? (
          <img
            // src={require(`../assets/img/${this.type}.png`)}
            style="width: 20px; height: 20px; vertical-align: bottom"
            alt=""
          />
        ) : (
          <img
            src={icon}
            style="width: 20px; height: 20px; vertical-align: bottom"
            alt=""
          />
        )}
      </div>
    );
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};

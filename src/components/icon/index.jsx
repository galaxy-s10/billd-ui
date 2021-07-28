const icon = require('../../assets/img/info.svg');

const iconType = {
  success: require('../../assets/img/success.svg'),
  error: require('../../assets/img/error.svg'),
  info: require('../../assets/img/info.svg'),
  warning: require('../../assets/img/warning.svg'),
};
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
    console.log(this.type, '----------1--');
    console.log(this.typeList.indexOf(this.type) !== -1);
    return (
      <div>
        {/* 判断type，如果没有设置type或者设置了type但是找不到，默认icon就是info */}
        {this.typeList.indexOf(this.type) !== -1 ? (
          <img
            // src={iconType[this.type]}
            src={icon}
            // src={require(`../assets/img/${this.type}.png`)}
            style="width: 20px; height: 20px; vertical-align: bottom"
            alt={this.typeList.indexOf(this.type) !== -1}
          />
        ) : (
          <img
            src={iconType[this.type]}
            style="width: 20px; height: 20px; vertical-align: bottom"
            alt={this.typeList.indexOf(this.type) !== -1}
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

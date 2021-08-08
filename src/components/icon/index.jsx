// const success = require('../../assets/img/success.svg');
// const error = require('../../assets/img/error.svg');
// const info = require('../../assets/img/info.svg');
// const warning = require('../../assets/img/warning.svg');

const iconType = {
  success,
  error,
  info,
  warning,
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
  // render() {
  //   return (
  //     <div>
  //       {/* 判断type，如果没有设置type或者设置了type但是找不到，默认icon就是info */}
  //       {this.typeList.indexOf(this.type) !== -1 ? (
  //         <img
  //           // src={iconType[this.type]}
  //           src={iconType[this.type]}
  //           // src={require(`../assets/img/${this.type}.png`)}
  //           style="width: 20px; height: 20px; vertical-align: bottom"
  //           alt={this.typeList.indexOf(this.type) !== -1}
  //         />
  //       ) : (
  //         <img
  //           // src={iconType[this.type]}
  //           src={iconType.info}
  //           style="width: 20px; height: 20px; vertical-align: bottom"
  //           alt={this.typeList.indexOf(this.type) !== -1}
  //         />
  //       )}
  //     </div>
  //   );
  // },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
};

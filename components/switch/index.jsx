const Switch = {
  name: 'BSwitch',
  components: {},
  inheritAttrs: false, // 将自定义组件的attrs不显示在渲染的html元素上，防止冲突（比如title）
  model: {
    prop: 'switchVal',
    event: 'input',
  },
  props: {
    switchVal: {
      type: Boolean,
      default: undefined,
    },
  },
  data() {
    return {
      isChecked: this.switchVal,
    };
  },
  computed: {},
  watch: {
    switchVal(newVal) {
      // console.log("switchVal变了");
      this.isChecked = newVal;
      this.$emit('changeSwitch', this.isChecked);
    },
  },
  mounted() {
    /**
     * 如果defaultChecked和v-model绑定的值冲突，则v-model的优先级高，defaultChecked不生效。
     * 即switchVal是false，那么就是isChecked就是false。
     * 其次，如果defaultChecked是true且swtichVal也是开或者没设置，最终结果就是开启
     */
    // console.log(this.$attrs, this.switchVal);

    if (this.switchVal !== undefined) {
      this.isChecked = this.switchVal;
      return;
    }
    if (
      this.$attrs.defaultChecked &&
      (this.switchVal === undefined || this.switchVal === true)
    ) {
      this.isChecked = true;
    }
  },
  created() {},

  methods: {
    clickSwitch(event) {
      if (this.switchVal === undefined) {
        // 如果没有使用v-model或者switchVal，则手动回调事件
        this.$emit('clickSwitch', this.isChecked, event); // 最终拿到两个形参,即:fasle/true,event
        this.isChecked = !this.isChecked;
        this.$emit('changeSwitch', this.isChecked);
      } else {
        this.$emit('clickSwitch', this.isChecked, event); // 最终拿到两个形参,即:fasle/true,event
        this.$emit('input', !this.isChecked);
      }

      // this.$emit("clickSwitch", { checked: !this.isChecked, event });  //最终拿到一个形参，即:{}
    },
  },
  render() {
    // 如果有插槽，就使用插槽，如果没有插槽，就使用openText，如果openText没有，就代表没有文字
    return (
      <div
        class={{
          'billd-switch': true,
          'billd-switch-checked': this.isChecked,
        }}
        vOn:click={(e) => this.clickSwitch(e)}>
        <span class="billd-switch-inner">
          {this.isChecked
            ? this.$scopedSlots.openSlot
              ? this.$scopedSlots.openSlot({})
              : this.$attrs.openText
              ? this.$attrs.openText
              : ' '
            : this.$scopedSlots.closeSlot
            ? this.$scopedSlots.closeSlot({})
            : this.$attrs.closeText
            ? this.$attrs.closeText
            : ''}
        </span>
      </div>
    );
  },
};

Switch.install = function (Vue) {
  Vue.component(Switch.name, Switch);
};

export default Switch;

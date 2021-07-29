import { Fragment as HVueFragment } from 'vue-fragment';
import HFoot from './foot';

export default {
  inheritAttrs: false, // 将自定义组件的attrs不显示在渲染的html元素上，防止冲突（比如title）
  props: {
    // cancelText: String,
    // confirmText: String,
    visible: {
      type: Boolean,
      default: false,
    },
  },
  components: { HFoot, HVueFragment },
  data() {
    return {
      modalvisible: this.visible,
    };
  },
  watch: {
    visible(newVal) {
      this.modalvisible = newVal;
      this.$emit('visible-change', newVal);
    },
  },
  model: {
    prop: 'visible',
    // event: "change",
    event: 'input',
  },
  render() {
    return (
      <div
        class="modal-mask"
        // 如果未定义mask或者设置mask为true，都会显示遮罩层
        style={[
          (this.$attrs.mask === true || this.$attrs.mask === undefined) && {
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          },
          { display: this.modalvisible ? 'block' : 'none' },
        ]}
        vOn:click_self={this.maskClose} // vue官方jsx事件写法,事件修饰符用_连接，但不能用:，会报错
      >
        <div class="modal-wrap">
          <div class="modal-head">
            <span>{this.$attrs.title || '标题'}</span>
            <span on-click={this.close} class="modal-close-btn">
              x
            </span>
          </div>
          <div class="modal-content">{this.$slots.default}</div>
          <h-foot
            attrs={this.$attrs} // 将modal组件上的prop都传给h-foot
            on-foot-cancel={this.footCancel}
            on-foot-confirm={this.footConfirm}
            scopedSlots={{
              footer: (props) =>
                this.$scopedSlots.foot
                  ? this.$scopedSlots.foot({ ...props })
                  : undefined,
            }}></h-foot>
        </div>
      </div>
    );
  },
  computed: {},
  created() {},
  mounted() {
    // console.log(this.$attrs, this.visible);
  },
  methods: {
    footCancel() {
      this.$emit('input', false);
      this.$emit('on-cancel');
    },
    footConfirm() {
      this.$emit('input', false);
      this.$emit('on-confirm');
    },
    close() {
      // console.log("点击了modal的关闭按钮，隐藏modal");
      this.$emit('input', false);
      this.$emit('on-close');
    },
    // 如果未定义maskClosable或者手动设置maskClosable为true，点击遮罩都是会隐藏modal；即只有手动设置maskClosable为false才会点击遮罩层不隐藏modal
    maskClose() {
      // console.log("点击了遮罩层，判断maskClosable属性觉得是否隐藏modal");
      if (
        this.$attrs.maskClosable === undefined ||
        this.$attrs.maskClosable === true
      ) {
        // console.log("判断结果:隐藏modal");
        this.$emit('input', false);
      } else {
        // console.log("判断结果:不隐藏modal");
      }
    },
  },
};

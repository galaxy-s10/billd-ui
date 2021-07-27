export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  render() {
    return (
      <div>
        <div class="modal-foot">
          {this.$scopedSlots.footer !== undefined &&
            (this.$scopedSlots.footer({ ...this.$attrs }) === undefined ? (
              <div>
                <span class="cancel-btn" vOn:click={this.cancel}>
                  {this.$attrs.cancelText || '取消'}
                </span>
                <span class="confirm-btn" vOn:click={this.confirm}>
                  {this.$attrs.confirmText || '确定'}
                </span>
              </div>
            ) : (
              this.$scopedSlots.footer({ ...this.$attrs })
            ))}
        </div>
      </div>
    );
  },
  methods: {
    cancel() {
      // console.log("h-foot组件里面emit cancel事件");
      this.$emit('foot-cancel');
    },
    confirm() {
      // console.log("h-foot组件里面emit confirm事件");
      this.$emit('foot-confirm');
    },
  },
};

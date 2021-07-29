import HssIcon from '../icon/index';

const closepng = require('../../assets/img/close.svg');

export default {
  props: {
    icon: undefined,
    msg: undefined,
    time: {
      type: Number,
      default: undefined,
    },
  },
  components: { HssIcon },
  data() {
    return {
      list: [],
      timerList: [],
      timerID: 1,
      bool: true,
    };
  },
  render() {
    return (
      <div>
        <div class="hss-message">
          <transition-group name="list">
            {this.list.map((item, index) => (
              <div style="margin: 10px 0" key={index}>
                <div class="content">
                  <div style="display: flex; align-items: center">
                    <div style="margin-right: 5px">
                      {!item.icon && <hss-icon type={item.type}></hss-icon>}
                      {this.renderDom('icon', item.icon)}
                      {this.$slots.icon}
                      {/* <slot name="icon"></slot> */}
                    </div>
                    {this.renderDom('content', item.content)}
                    {this.$slots.content}
                    {/* <slot name="content"></slot> */}
                    {item.closeAble && (
                      <img
                        src={closepng}
                        class="close-btn"
                        alt=""
                        on-click={() => this.close(item)}
                      />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </transition-group>
        </div>
      </div>
    );
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    transition() {
      // if (this.bool == false) {
      //   this.bool = true;
      // }
      setTimeout(() => {
        this.bool = false;
      }, 100);
      return this.bool;
    },
    isVNode(v) {
      const vnode = this.$createElement(<div></div>);
      const VNode = vnode.constructor;
      return v instanceof VNode;
    },
    close(v) {
      const index = this.list.findIndex((item) => item.id === v.id);
      this.list.splice(index, 1);
      clearTimeout(this.timerList[index].timer);
      this.timerList.splice(index, 1);
    },
    closeAll() {
      const { length } = this.list;
      for (let i = length - 1; i >= 0; i--) {
        this.close(this.list[i]);
      }
    },
    handle({ type, icon, content, closeAble, duration }) {
      const id = this.timerID++;
      const temp = {
        id,
        type,
        icon,
        content,
        closeAble,
        duration,
      };
      this.list.push(temp);
      const timer = setTimeout(() => {
        this.close(temp);
      }, duration);
      this.timerList.push({ id, timer });
    },
    success(v) {
      this.handle(v);
    },
    warning(v) {
      this.handle(v);
    },
    error(v) {
      this.handle(v);
    },
    info(v) {
      this.handle(v);
    },
    renderDom(slot, node) {
      if (this.isVNode(node)) {
        this.$slots[slot] = node;
      } else {
        this.$slots[slot] = <span>{node}</span>;
      }
    },
  },
};

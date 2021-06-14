import HssIcon from "../icon";
import "./index.less";
export default {
  props: {
    icon: String,
    msg: String,
    time: Number,
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
            {this.list.map((item, index) => {
              return (
                <div style="margin: 10px 0" key={index}>
                  <div class="content">
                    <div style="display: flex; align-items: center">
                      <div style="margin-right: 5px">
                        {!item.icon && <hss-icon type={item.type}></hss-icon>}
                        {this.renderDom("icon", item.icon)}
                        {this.$slots.icon}
                        {/* <slot name="icon"></slot> */}
                      </div>
                      {this.renderDom("content", item.content)}
                      {this.$slots.content}
                      {/* <slot name="content"></slot> */}
                      {item.closeAble && (
                        <img
                          src={require("../assets/img/close.png")}
                          class="close-btn"
                          alt=""
                          on-click={() => this.close(item)}
                        />
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
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
      let vnode = this.$createElement(<div></div>);
      let VNode = vnode.constructor;
      return v instanceof VNode;
    },
    close(v) {
      let index = this.list.findIndex((item) => item.id == v.id);
      this.list.splice(index, 1);
      clearTimeout(this.timerList[index].timer);
      this.timerList.splice(index, 1);
    },
    closeAll() {
      let length = this.list.length;
      for (let i = length - 1; i >= 0; i--) {
        this.close(this.list[i]);
      }
    },
    handle({ type, icon, content, closeAble, duration }) {
      let id = this.timerID++;
      let temp = {
        id,
        type,
        icon,
        content,
        closeAble,
        duration,
      };
      this.list.push(temp);
      let timer = setTimeout(() => {
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

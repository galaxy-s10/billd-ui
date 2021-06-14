<template>
  <div class="hss-message">
    <transition-group name="list">
      <div v-for="(item, index) in list" :key="index" style="margin: 10px 0">
        <div class="content">
          <div style="display: flex; align-items: center">
            <div style="margin-right: 5px">
              <hss-icon v-if="!item.icon" :type="item.type"></hss-icon>
              {{ renderDom("icon", item.icon) }}
              <slot name="icon"></slot>
            </div>
            {{ renderDom("content", item.content) }}
            <slot name="content"></slot>
            <img
              v-if="item.closeAble"
              src="../assets/img/close.png"
              class="close-btn"
              alt=""
              @click="close(item)"
            />
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import HssIcon from "../icon";
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
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
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
    handle({ type, icon, content, closeAble, duration = 2000 }) {
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
</script>

<style lang="less" scoped>
.list-enter-active {
  transition: all 0.5s ease;
}
.list-enter, .list-leave-to
/* .list-leave-active for below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-60px);
}
.hss-message {
  position: fixed;
  top: 10px;
  width: 100%;
  text-align: center;
  pointer-events: none;
  .content {
    display: inline-block;
    padding: 10px 16px;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 4px 12px rgb(0 0 0 / 15%);
    pointer-events: auto;

    .close-btn {
      margin-left: 20px;
      width: 15px;
      height: 15px;
      opacity: 0.6;
      cursor: pointer;
    }
  }
}
</style>
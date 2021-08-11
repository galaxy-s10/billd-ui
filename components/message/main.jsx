// import HssIcon from '../icon/index';
import BilldIcon from '../icon';
// const closepng = require('../../assets/img/close.svg');

export default {
  props: {
    icon: undefined,
    msg: undefined,
    time: {
      type: Number,
      default: undefined,
    },
  },
  // components: { HssIcon },
  data() {
    return {
      list: [],
      timerList: [],
      timerID: 1,
      bool: true,
    };
  },
  render() {
    /**
     * 这个变量不能定义在外层，这和vue的响应式更新有关，vue会收集依赖然后统一更新（即异步更新），如果放在外层就是全局变量，会导致最后的一次更新覆盖掉之前的更新
     * 必须定义在函数里面作为函数的局部变量，以闭包的形式返回出去，这样才正确。
     */
    // const iconData = {
    //   type: '',
    //   customStyle: { marginRight: '5px' },
    //   spin: false,
    // };
    function handleType(type) {
      const iconData = {
        type: '',
        customStyle: { marginRight: '5px', marginTop: '1px' },
        spin: false,
      };
      switch (type) {
        case 'success':
          iconData.type = 'CheckCircleFilled';
          iconData.customStyle.color = '#72c140';
          break;
        case 'warning':
          iconData.type = 'ExclamationCircleFilled';
          iconData.customStyle.color = '#efb041';
          break;
        case 'error':
          iconData.type = 'CloseCircleFilled';
          iconData.customStyle.color = '#e13c39';
          break;
        case 'info':
          iconData.type = 'ExclamationCircleFilled';
          iconData.customStyle = Object.assign(iconData.customStyle, {
            color: '#448ef7',
            display: 'block',
            transform: 'rotate(180deg)',
          });
          break;
        case 'loading':
          iconData.type = 'LoadingOutlined';
          iconData.customStyle.color = '#448ef7';
          iconData.spin = true;
          break;
        default:
          iconData.type = 'ExclamationCircleFilled';
          iconData.customStyle = Object.assign(iconData.customStyle, {
            color: '#448ef7',
            display: 'block',
            transform: 'rotate(180deg)',
          });
          break;
      }
      return iconData;
    }

    return (
      <div>
        <div class="billd-message">
          <transition-group name="billd-list">
            {this.list.map((item, index) => (
              <div style="margin: 10px 0" key={index}>
                <div class="content">
                  <div style="display: flex; align-items: center">
                    {/* <span style="margin-right: 5px"> */}
                    {!item.icon && (
                      <BilldIcon
                        {...{ attrs: handleType(item.type) }}></BilldIcon>
                    )}
                    {this.renderDom('icon', item.icon)}
                    {this.$slots.icon}
                    {/* <slot name="icon"></slot> */}
                    {/* </span> */}
                    {this.renderDom('content', item.content)}
                    {this.$slots.content}
                    {/* <slot name="content"></slot> */}
                    {item.closeAble && (
                      <BilldIcon
                        class="close-btn"
                        vOn:click_native={() => this.close(item)}
                        type="CloseOutlined"></BilldIcon>
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
    loading(v) {
      this.handle(v);
    },
    renderDom(slot, node) {
      if (this.isVNode(node)) {
        // console.log('???????', node);
        this.$slots[slot] = node;
      } else {
        // console.log('!!!!!!', node); //node有可能是undefined，这样的话就会渲染多一个span标签
        this.$slots[slot] = node && <span>{node}</span>;
      }
    },
  },
};

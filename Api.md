# Modal

## 使用

```vue
<template>
  <div>
    <hss-modal
      v-model="visible"
      title="tip"
      cancelText="no"
      confirmText="ok"
      :mask="true"
      :maskClosable="true"
      @on-cancel="cancelClick"
      @on-confirm="confirmClick"
      @on-close="closeClick"
      @visible-change="visibleChange"
    >
      <!-- <div slot="foot" slot-scope="aaa">
        <span>自定义foot</span>
      </div> -->
      hello world
    </hss-modal>

    <span @click="changeModal">点击显示modal</span>
  </div>
</template>

<script>
import HssModal from "./components/hss-ui-cpt/modal/index";

export default {
  components: {
    HssModal,
  },
  data() {
    return {
      visible: false,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    changeModal() {
      this.visible = true;
    },
    visibleChange(v) {
      console.log("visibleChange", v);
    },
    cancelClick() {
      console.log("cancelClick,app组件里modal的cancel回调");
    },
    confirmClick() {
      console.log("cancelClick,app组件里modal的confirm回调");
    },
    closeClick() {
      console.log("closeClick,app组件里modal的close回调");
    },
  },
};
</script>

```

## API

| 参数         | 说明                                          | 类型    | 默认值 |
| ------------ | --------------------------------------------- | ------- | ------ |
| visible      | 是否显示对话框，可使用 v-model 双向绑定数据。 | Boolean | false  |
| title        | 对话框标题                                    | String  | 标题   |
| cancelText   | 取消按钮文字                                  | String  | 取消   |
| confirmText  | 确定按钮文字                                  | String  | 确定   |
| mask         | 是否显示遮罩层                                | Boolean | true   |
| maskClosable | 点击遮罩层是否关闭对话框                      | Boolean | true   |

## 事件

| 参数           | 说明                   | 返回值     |
| -------------- | ---------------------- | ---------- |
| on-cancel      | 点击取消按钮回调       | 无         |
| on-confirm     | 点击确认按钮回调       | 无         |
| on-close       | 点击右上角关闭按钮回调 | 无         |
| visible-change | 显示状态发生变化时触发 | true/false |

## 插槽

| 名称 | 说明           |
| ---- | -------------- |
| foot | 自定义页脚内容 |

# Switch

## 使用

```vue
<hss-switch
  v-model="switchVal"
  openText="开"
  closeText="关"
  :defaultChecked="true"
  @clickSwitch="clickSwitch"
  @changeSwitch="changeSwitch"
>
  <template slot="openSlot">
    <b>开启</b>
  </template>
  <span slot="closeSlot">关闭</span>
</hss-switch>
```



## API

| 参数           | 说明                                            | 类型    | 默认值 |
| -------------- | ----------------------------------------------- | ------- | ------ |
| switchVal      | 指定当前是否选中，可使用 v-model 双向绑定数据。 | Boolean | false  |
| openText       | 选中时的内容                                    | String  |        |
| closeText      | 非选中时的内容                                  | String  |        |
| defaultChecked | 初始是否选中                                    | String  | false  |

## 事件

| 参数         | 说明                                        | 返回值                                  |
| ------------ | ------------------------------------------- | --------------------------------------- |
| clickSwitch  | 点击时回调函数，此时的switchVal是点击时的   | function(switchVal:Boolean,event:Event) |
| changeSwitch | 状态改变时回调函数，此时的switchVal是最新的 | function(switchVal:Boolean)             |

## 插槽

| 名称      | 说明           |
| --------- | -------------- |
| openSlot  | 选中时的插槽   |
| closeSlot | 非选中时的插槽 |

# Message

## 使用

```jsx
import HssMessage from "./components/hss-ui-cpt/message/index";
export default {
  components: {},
  data() {
    return {};
  },
  render() {
    return (
      <div>
        <div on-click={this.showMessage}>点击显示message</div>
        <div on-click={this.closeAll}>关闭所有</div>
      </div>
    );
  },
  computed: {},
  created() {},
  mounted() {
    // 修改全局默认配置
    // HssMessage.config({
    //   type: "warning",
    //   closeAble: true,
    //   duration: 3000,
    // });
  },
  methods: {
    closeAll() {
      HssMessage.closeAll();
    },
    showMessage() {
      // 不写状态，默认info
      HssMessage({
        content: "hello1111111111",
        closeAble: true,
      });
      // 不手动调用状态，通过参数设置
      HssMessage({
        type: "error", //手动设置状态
        content: "errrorrrrr",
      });
      // 手动设置状态
      HssMessage.success({
        content: "hello world",
        type: "error", //覆盖不了，不生效
      });
      // 设置icon可覆盖状态
      HssMessage.success({
        content: "hello world",
        icon: <i>opp!</i>, //会覆盖原本的success
      });

      // 可关闭
      HssMessage({
        content: "可关闭可关闭",
        closeAble: true,
      });
      // // 设置持续时间，默认2000毫秒
      HssMessage.success({
        content: <h3>hello2</h3>,
        duration: 3000,
      });
      // 内容也可是VNode
      HssMessage.success({
        content: "<h2>hello1111</h2>",
      });
    },
  },
};

```

## API

组件提供了一些静态方法，使用方式和参数如下：

- `message(config)`

- `message.success(config)`
- `message.error(config)`
- `message.info(config)`
- `message.warning(config)`

| 参数      | 说明               | 类型            | 默认值 |
| --------- | ------------------ | --------------- | ------ |
| content   | 提示内容           | String \| VNode |        |
| type      | 状态               | String          | info   |
| duration  | 持续时间，单位毫秒 | Number          | 2000   |
| closeAble | 是否显示关闭按钮   | Boolean         | fasle  |

> 全局API

- `message.closeAll()`	关闭所有message

- `message.config(config)`    修改全局默认配置，默认全局配置如下：

  ```js
  {
      type: 'info',
      closeAble: false,
      duration: 2000,
  }
  ```

  可修改全局默认配置：

  ```js
  // 修改全局默认配置
  message.config({
    type: "warning",
    closeAble: true,
    duration: 3000,
  })
  ```

  

## 事件

| 参数       | 说明             | 返回值 |
| ---------- | ---------------- | ------ |
| closeAll() | 手动关闭所有实例 | 无     |

## 插槽

| 名称 | 说明                                  |
| ---- | ------------------------------------- |
| Icon | type位置的插槽，类型：String \| VNode |

# Icon

# Button
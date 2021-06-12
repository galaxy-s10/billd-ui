# modal

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

# button

# message

# icon
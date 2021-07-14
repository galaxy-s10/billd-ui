# Table

## 使用

## API

### table

| 参数         | 说明                                                   | 类型                            | 默认值 |
| ------------ | ------------------------------------------------------ | ------------------------------- | ------ |
| bordered     | 是否展示外边框和列边框                                 | boolean                         | false  |
| columns      | 表格列的配置描述                                       | array                           | -      |
| dataSource   | 数据数组                                               | any[]                           | -      |
| fixed        | 列是否固定,可选 `true`(等效于 left) `'left'` `'right'` | boolean\|string                 | false  |
| scroll       | 设置横向或纵向滚动                                     | { x: number \|true, y: number } | -      |
| rowKey       | 表格行 key 的取值                                      | string                          | 'key'  |
| rowSelection | 列表项是否可选择                                       | object                          | null   |

### columns

| 参数      | 说明                                                         | 类型                        | 默认值 |
| --------- | ------------------------------------------------------------ | --------------------------- | ------ |
| align     | 设置列内容的对齐方式                                         | 'left' \|'right' \|'center' | 'left' |
| dataIndex | 列数据在数据项中对应的 key                                   | String                      |        |
| ellipsis  | 超过宽度将自动省略                                           | boolean                     | false  |
| fixed     | 列是否固定,可选 `true`(等效于 left) `'left'` `'right'`       | boolean\|string             | false  |
| key       | Vue 需要的 key，如果已经设置了唯一的 `dataIndex`，可以忽略这个属性 | string                      | -      |
| render    | 通过render函数设置列内容                                     | *Function(h,row) {}*        | -      |
| title     | 列头显示文字                                                 | string                      | -      |
| width     | 列宽度                                                       | number                      | -      |

### rowSelection

| 参数             | 说明                                             | 类型                                                         | 默认值 |
| ---------------- | ------------------------------------------------ | ------------------------------------------------------------ | ------ |
| getCheckboxProps | 选择框的默认属性配置，可配置默认选中以及默认禁用 | *Function(row)*                                              | -      |
| onChange         | 选中项发生变化时的回调                           | *Function(newSelectedRowKeys, newSelectedRows,oldSelectedRowKeys,oldSelectedRows) {}* | -      |
| onSelect         | 用户手动选择/取消选择某列的回调                  | *Function(row, isSelected, selectedRows, event) {}*          | -      |
| onSelectAll      | 用户手动选择/取消选择所有列的回调                | *Function(isAll,oldSelectRows,nowSelectedRows,changeRows) {}* | -      |

## 事件

| 参数 | 说明 | 返回值 |
| ---- | ---- | ------ |
|      |      |        |
|      |      |        |
|      |      |        |

## 注意

在 Table 中，`dataSource` 和 `columns` 里的数据值都需要指定 `key` 值。对于 `dataSource` 默认将每列数据的 `key` 属性作为唯一的标识，如果你的数据没有这个属性，务必使用 `rowKey` 来指定数据列的主键。若没有指定，控制台会出现缺少 key 的提示，表格组件也会出现各类奇怪的错误。

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
import { Modal } from "billd-ui";

export default {
  components: {
    HssModal: Modal,
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

| 参数         | 说明                                          | 返回值                                  |
| ------------ | --------------------------------------------- | --------------------------------------- |
| clickSwitch  | 点击时回调函数，此时的 switchVal 是点击时的   | function(switchVal:Boolean,event:Event) |
| changeSwitch | 状态改变时回调函数，此时的 switchVal 是最新的 | function(switchVal:Boolean)             |

## 插槽

| 名称      | 说明           |
| --------- | -------------- |
| openSlot  | 选中时的插槽   |
| closeSlot | 非选中时的插槽 |

# Message

## 使用

```jsx
import { Message } from "billd-ui";
export default {
  components: {
    HssMessage: Message,
  },
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

> 全局 API

- `message.closeAll()` 关闭所有 message

- `message.config(config)` 修改全局默认配置，默认全局配置如下：

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
  });
  ```

## 事件

| 参数       | 说明             | 返回值 |
| ---------- | ---------------- | ------ |
| closeAll() | 手动关闭所有实例 | 无     |

## 插槽

| 名称 | 说明                                   |
| ---- | -------------------------------------- |
| Icon | type 位置的插槽，类型：String \| VNode |

# Icon

# Button

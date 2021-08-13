<p align="center">
  <a href="">
    <img
      width="200"
      src="http://thirdqq.qlogo.cn/g?b=oidb&k=oYtOZYZxRicDmv3WsaGKXFQ&s=640&t=1618498456"
    />
  </a>
</p>

<h1 align="center">
  Billd-ui
</h1>

<div align="center">
基于vue2.x构建的组件库

[![npm version](https://img.shields.io/npm/v/billd-ui)](https://www.npmjs.com/package/billd-ui) [![npm downloads](https://img.shields.io/npm/dw/billd-ui)](https://www.npmjs.com/package/billd-ui)

</div>

# 快速上手

## 在浏览器使用

在浏览器中使用 `script` 和 `link` 标签直接引入文件，并使用全局变量 `Billd`。

我们在 npm 发布包内的 `billd-ui/dist` 目录下提供了 `billd.js` `billd.css` 以及 `billd.min.js` `billd.min.css`

## 在vue-cli使用

### 安装

```bash
npm i billd-ui --save
```

### 引入

#### 全局引入

```js
import Vue from "vue";
import Billd from "billd-ui";
import App from "./App.vue";
import "billd-ui/dist/billd.css";

Vue.use(Billd);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

全局引入后，就可以在项目的任何地方直接使用billd-ui组件

```vue
<template>
  <div>
    <b-switch></b-switch>
  </div>
</template>
```

#### 局部引入组件

> #### 注意，这种写法只是写一个就引入注册一个组件，仍需手动导入样式，而且最终打包的时候，和全局引入一样，都会整个billd-ui都进行打包，这个引入方式和全局引入对比只有一个区别：全局引入不用每次都手动注册billd-ui组件。

```vue
<template>
  <div>
    <b-switch></b-switch>
  </div>
</template>

<script>
import Vue from "vue";
import { Switch } from "billd-ui";
import "billd-ui/es/switch/style/css"; //仍需手动引入样式

Vue.component(Switch.name, Switch);

// 上述写法约等于：
// Vue.use(Switch);

export default {};
</script>
```

#### 按需加载(推荐)

第一种方式：通过以下的写法来按需加载组件：

```vue
<template>
  <div>
    <b-switch></b-switch>
  </div>
</template>

<script>
import Vue from "vue";
import Switch from "billd-ui/es/switch";
import "billd-ui/es/switch/style/css"; //引入的是编译好的css
// import "billd-ui/es/switch/style"; //引入的是less源文件，如果项目有对less的处理就使用这个
Vue.use(Switch);

export default {};
</script>
```

第二种方式：如果你使用了babel，可以使用 [babel-plugin-import](https://github.com/ant-design/babel-plugin-import) 来进行按需加载，首先npm i babel-plugin-import，然后再添加babel的plugins配置：

> 注意：全局引入和这种方式的按需引入有冲突，这两者方式不能同时使用，否则会报错！

```js
plugins: [
  // billd-ui支持按需加载，安装babel-plugin-import，然后在babel配置文件添加如下内容即可
  [
    'import',
    {
      libraryName: 'billd-ui',
      libraryDirectory: 'es', // 默认lib
      /**
       * 这个按需加载很有意思，因为babel-plugin-import这个插件是ant-design官方写的，因此规则也是官方定的，
       * 有一点是肯定的：官方根据自家的ant-design组件库的整体架构，从而编写了一个插件专门对自家的ant-design组件库做的按需加载。
       * 这个style属性，如果没有这个属性，就不会引入样式；如果有这个style属性，它的值是true，代表：libraryName/libraryDirectory/组件名/style，即会引入style下的index.js
       * 如果值是'css',代表：libraryName/libraryDirectory/组件名/style/css，即会引入这个css.js文件
       */
      // style: true, // billd-ui使用了less，如果你的项目里面有对less做处理，可以使用此选项
      style: 'css', // 如果你的项目没有处理less，就使用这个选项。
    },
    'billd-ui',
  ],
]
```

插件会帮你转换成 `billd-ui/es/switch` ，而且，因为配置了style属性，会按需加载该组件的样式，即会引入：`billd-ui/es/switch/style/css`

```vue
<template>
  <div>
    <b-switch></b-switch>
  </div>
</template>

<script>
import Vue from "vue";
import { Switch } from "billd-ui";
Vue.use(Switch);

export default {};
</script>
```



# Modal

## 使用

```vue
<template>
  <div>
    <b-modal
      v-model="visible"
      title="tip"
      cancelText="no"
      confirmText="ok"
      :mask="true"
      :maskClosable="false"
      @on-cancel="cancelClick"
      @on-confirm="confirmClick"
      @on-close="closeClick"
      @visible-change="visibleChange"
    >
      <!-- <div slot="foot" slot-scope="aaa">
        <span>自定义foot</span>
      </div> -->
      hello world
    </b-modal>

    <span @click="changeModal">点击显示modal</span>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      visible: false,
    };
  },
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
<template>
  <div>
    <b-switch
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
    </b-switch>
  </div>
</template>

<script>
export default {
  data() {
    return {
      switchVal: false,
    };
  },
  methods: {
    clickSwitch(a, b) {
      console.log(a, b);
    },
    changeSwitch(a) {
      console.log(a);
    },
  },
};
</script>
```

## API

| 参数           | 说明                                            | 类型    | 默认值 |
| -------------- | ----------------------------------------------- | ------- | ------ |
| switchVal      | 指定当前是否选中，可使用 v-model 双向绑定数据。 | Boolean | false  |
| openText       | 选中时的内容                                    | String  |        |
| closeText      | 非选中时的内容                                  | String  |        |
| defaultChecked | 初始是否选中(优先级比switchVal低)               | Boolean | false  |

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

局部使用：

```jsx
<script>
import { Message } from "billd-ui";

export default {
  components: {},
  data() {
    return {};
  },
  render() {
    return (
      <div>
        <div vOn:Click={this.showMessage}>点击显示message</div>
        <div vOn:Click={this.closeAll}>关闭所有</div>
      </div>
    );
  },
  computed: {},
  created() {},
  mounted() {
    // 修改全局默认配置
    // Message.config({
    //   type: 'warning',
    //   closeAble: true,
    //   duration: 3000,
    // });
  },
  methods: {
    closeAll() {
      Message.closeAll();
    },
    showMessage() {
      // 不写状态，默认info
      Message({
        content: "hello world!!",
        closeAble: false,
      });
      // 不手动调用状态，通过参数设置
      Message({
        type: "error", // 手动设置状态
        content: "errrorrrrr",
      });
      // 手动设置状态
      Message.success({
        content: "hello world",
        type: "error", // 覆盖不了，不生效
      });
      Message.loading({
        content: "hello world",
      });
      // 设置icon可覆盖状态
      Message.success({
        content: "hello world",
        icon: <i>opp!</i>, // 会覆盖原本的success
      });

      // 可关闭
      Message({
        content: "可关闭可关闭",
        closeAble: true,
      });
      // 设置持续时间，默认2000毫秒
      Message.success({
        content: "hello world",
        duration: 30000,
        closeAble: true,
      });
      // 内容也可是VNode
      Message.success({
        content: <b>hello1111</b>,
      });
    },
  },
};
</script>
```

如果完整引入了billd-ui，可这样使用：

```jsx
<script>
export default {
  components: {},
  data() {
    return {};
  },
  render() {
    return (
      <div>
        <div vOn:Click={this.showMessage}>点击显示message</div>
        <div vOn:Click={this.closeAll}>关闭所有</div>
      </div>
    );
  },
  computed: {},
  created() {},
  mounted() {
    // 修改全局默认配置
    // this.$Message.config({
    //   type: 'warning',
    //   closeAble: true,
    //   duration: 3000,
    // });
  },
  methods: {
    closeAll() {
      this.$Message.closeAll();
    },
    showMessage() {
      // 不写状态，默认info
      this.$Message({
        content: "hello1111111111",
        closeAble: false,
      });
      // 不手动调用状态，通过参数设置
      this.$Message({
        type: "error", // 手动设置状态
        content: "errrorrrrr",
      });
      // 手动设置状态
      this.$Message.success({
        content: "hello world",
        type: "error", // 覆盖不了，不生效
      });
      this.$Message.loading({
        content: "hello world",
      });
      // 设置icon可覆盖状态
      this.$Message.success({
        content: "hello world",
        icon: <i>opp!</i>, // 会覆盖原本的success
      });

      // 可关闭
      this.$Message({
        content: "可关闭可关闭",
        closeAble: true,
      });
      // 设置持续时间，默认2000毫秒
      this.$Message.success({
        content: "hello world",
        duration: 30000,
        closeAble: true
      });
      // 内容也可是VNode
      this.$Message.success({
        content: <h2>hello1111</h2>,
      });
    },
  },
};
</script>
```

## API

组件提供了一些静态方法，使用方式和参数如下：

- `Message(config)`
- `Message.success(config)`
- `Message.error(config)`
- `Message.info(config)`
- `Message.warning(config)`
- `Message.loading(config)`

| 参数      | 说明               | 类型            | 默认值 |
| --------- | ------------------ | --------------- | ------ |
| content   | 提示内容           | String \| VNode |        |
| type      | 状态               | String          | info   |
| duration  | 持续时间，单位毫秒 | Number          | 2000   |
| closeAble | 是否显示关闭按钮   | Boolean         | fasle  |

> 全局 API

- `Message.closeAll()` 关闭所有 Message

- `Message.config(config)` 修改全局默认配置，默认全局配置如下：

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
  this.Message.config({
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

## 使用

```vue
<template>
  <div>
    <b-icon type="AccountBookFilled"></b-icon>
    <b-icon type="AppstoreAddOutlined" :spin="true"></b-icon>
    <b-icon type="DislikeFilled" :spin="true" :rotate="50"></b-icon>
    <b-icon
      type="LayoutFilled"
      :customStyle="{ color: 'red', fontSize: '30px' }"
    ></b-icon>
  </div>
</template>

<script>
export default {};
</script>
```

## API

| 参数        | 说明           | 类型    | 默认值 |
| ----------- | -------------- | ------- | ------ |
| type        | 图标类型       | Boolean | false  |
| spin        | 是否有旋转动画 | Boolean | False  |
| rotate      | 图标旋转角度   | Number  | 360    |
| customStyle | 设置图标的样式 | Object  | 确定   |

# Loading

## 使用

```vue
<template>
  <div>
    <b-loading></b-loading>
  </div>
</template>
```

# Table

> table组件暂时还有些小bug，待更新~

## 使用

```vue
<template>
  <div>
    <b-table
      rowKey="idd"
      :bordered="true"
      :sourceData="sourceData"
      :columns="columns"
      :rowSelection="rowSelection"
      :scroll="{ x: 900, y: 300 }"
    ></b-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // row: { b: 32 },
      // objabc: { a: 1 },
      defaultCheckedList: [200],
      defaultDisabledList: [100, 200],
      sourceData: [
        {
          key: 100,
          idd: 100,
          name: "2222222ss",
          ellipsis: true,
          status: "1",
          age: 323233223323,
          money: 34,
          address: "New No. 1 Lake Park",
          tags: ["nice", "developer"],
          sex: "男",
        },
        {
          key: 200,
          idd: 200,
          name: "wwe",
          status: "1",
          age: 32,
          money: 67,
          address: "New No. 1 Lake Park",
          tags: ["nice", "developer"],
          sex: "男",
        },
        {
          key: 300,
          idd: 300,
          name: "wew",
          status: "1",
          age: 32,
          money: 23,
          address: "New No. 1 Lake Park",
          tags: ["nice", "developer"],
          sex: "男",
        },
        {
          key: 400,
          idd: 400,
          name: "dff",
          status: "1",
          age: 32,
          money: 3456,
          address: "New No. 1 Lake Park",
          tags: ["nice", "developer"],
          sex: "男",
        },
        {
          key: 500,
          idd: 500,
          name: "John",
          status: "0",
          age: 32,
          address: "New No. 1 Lake Park",
          sex: "男",
          money: 12,

          tags: ["nice", "developer"],
        },
        {
          key: 600,
          idd: 600,
          name: "Jim",
          status: "1",
          age: 42,
          sex: "女",
          money: 234,

          address: "London No. 1 Lake Park",
          tags: ["loser"],
        },
        {
          key: 700,
          idd: 700,
          age: 32,
          status: "0",
          name: "Joe",
          address: "Sidney No. 1 Lake Park",
          sex: "男",
          money: 345,
          tags: ["cool", "teacher"],
        },
      ],

      rowSelection: {
        type: "checkbox",
        getCheckboxProps: (row) => {
          const key = row[this.getRowKey(row)];
          const prop = {
            defaultChecked: this.defaultCheckedList.indexOf(key) !== -1,
            disabled: this.defaultDisabledList.indexOf(key) !== -1,
          };
          return prop;
        },
      },

      columns: [
        {
          // fixed: "left",
          width: "100",
          title: "key",
          dataIndex: "idd", // 列数据在数据项中对应的key
          align: "center",
          // key: "key", //v-for遍历columns时的key,如果设置了唯一的dataIndex可忽略该属性
        },
        {
          fixed: "right",
          width: "100",
          title: "钱",
          dataIndex: "money",
          align: "center",
          // key: "money",
        },
        {
          // fixed: "left",
          // fixed: "right",
          // width: '120',
          title: "性别",
          dataIndex: "sex",
          align: "center",
          // key: "sex",
          // slots: { title: "customTitle" },
          // scopedSlots: { customRender: "name" },
          render(h, row) {
            // return <span>{row.status}</span>;
            // return <h-switch></h-switch>;
            /**
             * 下面的代码会解析成：h("div", [h("span", [row, "xxx"])])
             * 即h函数的第二个参数是数组，里面又嵌套了一个h函数，这个h函数的第二个参数是数组，
             * 数组里面的第一个参数row是对象，是不能通过h函数转成vnode的，会渲染成undefined，
             * 数组里面的第二个参数是数字，可以通过h函数转成vnode。
             */
            const obja = { ad: 323, obj: { dsg: 31 } };
            return (
              <div>
                <b>{row.status}xxx</b>
              </div>
            );
          },
        },
        {
          fixed: true,
          // fixed: "left",
          // ellipsis: true,
          width: "100",
          title: "name",
          dataIndex: "name",
          align: "center",
          // key: "name",
        },
        {
          fixed: true,
          // fixed: "right",
          width: "100",
          title: "状态",
          dataIndex: "status",
          // align: "right",
          // key: "status",
          // render: (h, row) => {
          //   console.log(row, "3434", 9132999);
          //   // return <div style="">{row.status}</div>;
          //   // return <div style="height:100px">{row.status}</div>;
          //   // return <h-switch></h-switch>;
          //   return <div>{row.status}</div>;
          // }
        },
        {
          // fixed: "right",
          width: "100",
          title: "Age",
          dataIndex: "age",
          // key: "age",
        },
        {
          // width: "200",
          title: "Address",
          dataIndex: "address",
          // key: "address",
        },
        {
          // fixed: "left",
          width: "100",
          title: "Tags",
          // key: "tags",
          dataIndex: "tags",
          // render: (h, row) => {
          //   // console.log(row.name);
          //   // return h("div", {}, row.name);
          //   // return <div>{row.name}</div>;
          //   return <span>234</span>;
          // }
        },
        // {
        //   title: "Action",
        //   key: "action",
        //   scopedSlots: { customRender: "action" },
        // },
      ],
      theme: {
        default: {
          sss: 123,
          sgg: 3425,
        },
        default1: {
          sss: 3545,
          sgg: 9789,
        },
      },
      obj: {
        name: "hss",
        age: 22,
        sex: "男",
      },
      visible: false,
    };
  },
  computed: {},
  created() {},
  mounted() {
    Object.keys(this.theme).forEach((item) => {
      console.log(this.theme[item]);
    });
  },
  methods: {
    getColumnKey(column) {
      // columns的v-for时的key
      const columnKey = column.key || column.dataIndex;
      return columnKey;
    },
    // 获取对data-source的v-for时的key
    getRowKey(row) {
      // data-source的v-for时的key
      // console.log("columns的v-for时的key", row);
      const rowKey = this.rowKey || (row.key && "key");
      return rowKey;
    },
    clickSwitch(v) {
      console.log(v);
    },
    xxx() {
      console.log("234324");
    },
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

### table

| 参数         | 说明                   | 类型                            | 默认值 |
| ------------ | ---------------------- | ------------------------------- | ------ |
| bordered     | 是否展示外边框和列边框 | boolean                         | false  |
| columns      | 表格列的配置描述       | array                           | -      |
| dataSource   | 数据数组               | any[]                           | -      |
| scroll       | 设置横向或纵向滚动     | { x: number \|true, y: number } | -      |
| rowKey       | 表格行 key 的取值      | string                          | 'key'  |
| rowSelection | 列表项是否可选择       | object                          | null   |

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

## 注意

1. 在 Table 中，`dataSource` 和 `columns` 里的数据值都需要指定 `key` 值。对于 `dataSource` 默认将每列数据的 `key` 属性作为唯一的标识，如果你的数据没有这个属性，务必使用 `rowKey` 来指定数据列的主键。若没有指定，控制台会出现缺少 key 的提示，表格组件也会出现各类奇怪的错误。
2. 设置固定列时候，建议设置width属性，否则会有宽度问题（antdv官方的也有此问题）。
3. 固定头和列的时候，若列头与内容不对齐，请指定**固定列**的宽度 `width`。如果指定 `width` 不生效或出现白色垂直空隙，请尝试建议留一列不设宽度以适应弹性布局。（ps：如果全部column都设置了width，且设置了scroll.x，如果scroll.x大于所有column的和，就会出现白色空隙，这时候就留一列不设width即可。）



# 简介

前端框架

Vue2.x

打包构建工具

webpack5 + gulp4 +bebel7 + less3

代码规范

eslint + prettier + husky

依赖

billd-ui组件库将icon组件单独抽离出来成一个独立的组件库：[@huangshuisheng/icons-vue](https://www.npmjs.com/package/@huangshuisheng/icons-vue) ，而这个组件库又依赖：[@huangshuisheng/icons-svg](https://www.npmjs.com/package/@huangshuisheng/icons-svg) 。这样做是为了将icon抽象成通用的基础库，后续可基于@huangshuisheng/icons-svg这个库开发react，angular的icons组件库，提高扩展性。

## billd-ui

> [https://github.com/galaxy-s10/billd-ui](https://github.com/galaxy-s10/billd-ui)

## @huangshuisheng/icons-vue

> [https://github.com/galaxy-s10/billd-ui-icons](https://github.com/galaxy-s10/billd-ui-icons)

## @huangshuisheng/icons-svg

> [https://github.com/galaxy-s10/billd-ui-icons](https://github.com/galaxy-s10/billd-ui-icons)

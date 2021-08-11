<template>
  <div>
    <b-table
      rowKey="idd"
      :bordered="true"
      :sourceData="sourceData"
      :columns="columns"
      :rowSelection="rowSelection"
      :scroll="{ x: 900, y: 400 }"
    ></b-table>
    <!-- <h-table
      rowKey="idd"
      :bordered="true"
      :sourceData="sourceData"
      :columns="columns"
      :rowSelection="rowSelection"
      :scroll="{ x: 900, y: 400 }"
    ></h-table> -->
  </div>
</template>

<script>
// import HTable from './table1/index.vue';
// import HTable from '../components/table';

export default {
  // components: { HTable },
  data() {
    return {
      row: { b: 32 },
      objabc: { a: 1 },
      defaultCheckedList: [200],
      defaultDisabledList: [100, 200],
      sourceData: [
        {
          key: 100,
          idd: 100,
          name: '2222222222ssssssssssss',
          ellipsis: true,
          status: '1',
          age: 323233223323,
          money: 34,
          address: 'New No. 1 Lake Park',
          tags: ['nice', 'developer'],
          sex: '男',
        },
        {
          key: 200,
          idd: 200,
          name: 'wwe',
          status: '1',
          age: 32,
          money: 67,
          address: 'New No. 1 Lake Park',
          tags: ['nice', 'developer'],
          sex: '男',
        },
        {
          key: 300,
          idd: 300,
          name: 'wew',
          status: '1',
          age: 32,
          money: 23,
          address: 'New No. 1 Lake Park',
          tags: ['nice', 'developer'],
          sex: '男',
        },
        {
          key: 400,
          idd: 400,
          name: 'dff',
          status: '1',
          age: 32,
          money: 3456,
          address: 'New No. 1 Lake Park',
          tags: ['nice', 'developer'],
          sex: '男',
        },
        {
          key: 500,
          idd: 500,
          name: 'John',
          status: '1',
          age: 32,
          address: 'New No. 1 Lake Park',
          sex: '男',
          money: 12,

          tags: ['nice', 'developer'],
        },
        {
          key: 600,
          idd: 600,
          name: 'Jim',
          status: '1',
          age: 42,
          sex: '女',
          money: 234,

          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: 700,
          idd: 700,
          age: 32,
          status: '0',
          name: 'Joe',
          address: 'Sidney No. 1 Lake Park',
          sex: '男',
          money: 345,
          tags: ['cool', 'teacher'],
        },
      ],

      rowSelection: {
        type: 'checkbox',
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
          width: '100',
          title: 'key',
          dataIndex: 'idd', // 列数据在数据项中对应的key
          align: 'center',
          // key: "key", //v-for遍历columns时的key,如果设置了唯一的dataIndex可忽略该属性
        },
        {
          fixed: 'right',
          width: '100',
          title: '钱',
          dataIndex: 'money',
          align: 'center',
          // key: "money",
        },
        {
          // fixed: "left",
          // fixed: "right",
          // width: '120',
          title: '性别',
          dataIndex: 'sex',
          align: 'center',
          // key: "sex",
          // slots: { title: "customTitle" },
          // scopedSlots: { customRender: "name" },
          render() {
            // return <span>{row.status}</span>;
            // return <h-switch></h-switch>;
            /**
             * 下面的代码会解析成：h("div", [h("span", [row, "3454"])])
             * 即h函数的第二个参数是数组，里面又嵌套了一个h函数，这个h函数的第二个参数是数组，
             * 数组里面的第一个参数row是对象，是不能通过h函数转成vnode的，会渲染成undefined，
             * 数组里面的第二个参数是数字，可以通过h函数转成vnode。
             */
            const obja = { ad: 323, obj: { dsg: 31 } };
            return (
              <div>
                <span>{obja}3454</span>
              </div>
            );
          },
        },
        {
          fixed: true,
          // fixed: "left",
          // ellipsis: true,
          width: '100',
          title: 'name',
          dataIndex: 'name',
          align: 'center',
          // key: "name",
        },
        {
          fixed: true,
          // fixed: "right",
          width: '100',
          title: '状态',
          dataIndex: 'status',
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
          width: '100',
          title: 'Age',
          dataIndex: 'age',
          // key: "age",
        },
        {
          // width: "200",
          title: 'Address',
          dataIndex: 'address',
          // key: "address",
        },
        {
          // fixed: "left",
          width: '100',
          title: 'Tags',
          // key: "tags",
          dataIndex: 'tags',
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
        name: 'hss',
        age: 22,
        sex: '男',
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
      const rowKey = this.rowKey || (row.key && 'key');
      return rowKey;
    },
    clickSwitch(v) {
      console.log(v);
    },
    xxx() {
      console.log('234324');
    },
    changeModal() {
      this.visible = true;
    },
    visibleChange(v) {
      console.log('visibleChange', v);
    },
    cancelClick() {
      console.log('cancelClick,app组件里modal的cancel回调');
    },
    confirmClick() {
      console.log('cancelClick,app组件里modal的confirm回调');
    },
    closeClick() {
      console.log('closeClick,app组件里modal的close回调');
    },
  },
};
</script>

<style lang="less" scoped>
// 下面的less样式会有作用域
@import './index.less';
</style>

<style scoped>
/* 下面的css样式不会有作用域 */
@import './index.css';
</style>

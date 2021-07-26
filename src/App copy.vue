<template>
  <div>
    <!-- <img src="aaax/dist/img/wechat123-2953ba.jpg" alt=""> -->
    <div v-for="(item, index) in row" :key="index">{{ item }}{{ index }}</div>
    12
    <!-- <vue-render-cpt></vue-render-cpt> -->
  </div>
</template>

<script>
// let vueRenderCpt = '423'
// 直接引node_modules的文件路径加载图片没问题
// import vueRenderCpt,{imgcpt} from 'billd-ui'
// import("billd-ui").then(res=>{
//   console.log(res,'vue')
// })

// import vueRenderCpt from 'billd_ui'
// console.log(vueRenderCpt,imgcpt)
// const billd_ui = require('../dist/js/main-bundle')
// const billd_ui = require('aaax/dist/js/main-bundle')

// console.log(billd_ui)
// import Vue from "vue";
// import {sum} from '../lib/index';
// console.log(sum);
// import {sum} from '../dist/js/main-bundle';
// console.log(sum);
// import  Switch  from "../dist/js/main-bundle";
// import("../dist/js/main-bundle").then(res=>{
//   console.log(res);
//   console.log('/js/main-bundle/js/main-bundle');
// })
// import("../lib/index").then(res=>{
//   console.log(res);
//   console.log(sum);
//   console.log('../lib/index../lib/index');
// })
// import {Switch} from "../lib/index";
// console.log(Switch, 33);
// import vueRenderCpt from "./components/vueRenderCpt";
// import vueRenderCpt from "../components";
// console.log("vueRenderCptvueRenderCpt");
// console.log(vueRenderCpt);
// import("../library/billd-ui").then((res) => {
//   console.log("fsdffsd");
//   console.log(res);
// });

// cjs导入
// const billd_ui = require('../dist/js/main-bundle')

// esmodule导入
// import billd_ui from "../dist/js/main-bundle";

// import  imgcpt  from "aaax/lib/vueRenderCpt";
// import { imgcpt } from "../library/billd-ui";
// import { imgcpt as imgcpt1 } from "../library/billd-ui";
// import HTable from "./components/table/index";

// import Dashboard from '../lib/dashboard'

// import { Modal } from "../dist";
// import "../dist/modal/style/index.css";

// import Switch from "../dist";
// import "../dist/switch/style/index.css";

export default {
  components: {
    // Dashboard,
    // imgcpt:billd_ui.imgcpt,
    // // imgcpt1,
    // vueRenderCpt,
    // vueRenderCpt:vueRenderCpt.imgcpt,
    // vueRenderCpt:imgcpt,
    // JsxCpt,
    // createElementCpt,
    // // HTable:Table,
    // // HModal: Modal,
    // // HSwitch:Switch,
  },
  data() {
    return {
      row: { b: 32 },
      defaultCheckedList: [200],
      defaultDisabledList: [100, 200],
      sourceData: [
        {
          key: 100,
          idd: 100,
          name: 'dsgsdgs',
          status: '1',
          age: 18,
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
          age: 22,
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
          age: 17,
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
          age: 25,
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
          age: 30,
          sex: '女',
          money: 234,
          address: 'London No. 1 Lake Park',
          tags: ['loser'],
        },
        {
          key: 700,
          idd: 700,
          age: 21,
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
        getCheckboxProps: row => {
          // console.log(row.key, "getCheckboxProps");
          // console.log(row, "sfsfsdf");
          // let key = row[this.getRowKey(row)];
          // console.log(row, key, "0000000");
          const prop = {
            defaultChecked: this.defaultCheckedList.indexOf(row.key) !== -1,
            // disabled: this.defaultDisabledList.indexOf(row.key) != -1 ,
            disabled: row.age < 20,
          };
          // console.log("proppropprop", prop);
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
          width: '120',
          title: '性别',
          dataIndex: 'sex',
          align: 'center',
          // key: "sex",
          // slots: { title: "customTitle" },
          // scopedSlots: { customRender: "name" },
          render(h, row) {
            console.log(h,row);
            // return <span>{row.status}</span>;
            // return <h-switch></h-switch>;
            /**
             * 下面的代码会解析成：h("div", [h("span", [row, "3454"])])
             * 即h函数的第二个参数是数组，里面又嵌套了一个h函数，这个h函数的第二个参数是数组，
             * 数组里面的第一个参数row是对象，是不能通过h函数转成vnode的，会渲染成undefined，
             * 数组里面的第二个参数是数字，可以通过h函数转成vnode。
             */
            // console.log(this.$createElement === h, 3444334);
            return (
              <div>
                <div style="height:">3454</div>
              </div>
            );
          },
        },
        {
          fixed: true,
          // fixed: "left",
          ellipsis: true,
          width: '200',
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
    // fetch("/api/type/pageList")
    //   .then(function(response) {
    //     return response.json();
    //   })
    //   .then(function(myJson) {
    //     console.log(myJson);
    //   });
    console.log('fsfsdfsf');
    console.log(Object.keys(this.theme));
    Object.keys(this.theme).forEach(item => {
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
/* 下面的css样式不会有作用域，也不会经过postcss */
@import './index.css';
</style>

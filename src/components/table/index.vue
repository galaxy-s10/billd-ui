<template>
  <div class="hss-table" style="width:500px;height:100px">
    <div class="table-scroll">
      <div>
        <table>
          <colgroup>
            <col
              v-for="(item, index) in columns"
              :key="index"
              :style="{
                minWidth: item.width + 'px',
                width: item.width + 'px',
              }"
            />
          </colgroup>
          <thead class="hss-table-thead">
            <tr>
              <th
                v-for="(item, index) in columns"
                :key="index"
                :style="{
                  'text-align': item.align ? item.align : 'left',
                }"
              >
                {{ item.fixed && renderFixed(item) }}
                {{ item.title }}
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div>
        <table>
          <colgroup>
            <col
              v-for="(item, index) in columns"
              :key="index"
              :style="{
                minWidth: item.width + 'px',
                width: item.width + 'px',
              }"
            />
          </colgroup>
          <tbody class="hss-table-tbody">
            <tr v-for="(rowItem, rowIndex) in data" :key="rowIndex">
              <td
                v-for="(columnsItem, columnsIndex) in columns"
                :key="columnsIndex"
                :style="{
                  'text-align': columnsItem.align ? columnsItem.align : 'left',
                }"
              >
                <!-- {{ tempRender(`${columnsItem.key}-${rowIndex}`, columnsItem.render) }} -->
                {{
                  typeof columnsItem.render == "function"
                    ? tempRender(
                        `${columnsItem.key}-${rowIndex}`,
                        rowItem,
                        columnsItem.render
                      )
                    : ""
                }}
                <slot
                  v-if="typeof columnsItem.render == 'function'"
                  :name="`${columnsItem.key}-${rowIndex}`"
                ></slot>
                <span v-else>{{ rowItem[columnsItem.key] }}</span>
                <!-- {{rowItem[columnsItem.key]}} -->
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="fixed-left">
      <div>
        <table>
          <colgroup>
            <col
              v-for="(item, index) in fixedLeftData"
              :key="index"
              :style="{
                minWidth: item.column.col.width + 'px',
                width: item.column.col.width + 'px',
              }"
            />
          </colgroup>
          <thead class="hss-table-thead">
            <tr>
              <th
                v-for="(item, index) in fixedLeftData"
                :key="index"
                :style="{
                  'text-align': item.column.col.align
                    ? item.column.col.align
                    : 'left',
                }"
              >
                {{ item.column.col.title }}
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div>
        <table>
          <colgroup>
            <col
              v-for="(item, index) in fixedLeftData"
              :key="index"
              :style="{
                minWidth: item.column.col.width + 'px',
                width: item.column.col.width + 'px',
              }"
              :aaa="item.column.col.width"
            />
          </colgroup>
          <tbody class="hss-table-tbody">
            <tr
              v-for="(item, index) in fixedLeftData[0].data.length"
              :key="index"
            >
              <td
                v-for="(col, colIndex) in fixedLeftData"
                :key="colIndex"
                :style="{
                  'text-align': col.column.col.align
                    ? col.column.col.align
                    : 'left',
                }"
              >
                {{ col.data[index][col.column.col.key] }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="fixed-right">
      <!-- <div class="scroll-bar"></div> -->
      <div>
        <table>
          <colgroup>
            <col
              v-for="(item, index) in fixedRightData"
              :key="index"
              :style="{
                minWidth: item.column.col.width + 'px',
                width: item.column.col.width + 'px',
              }"
            />
          </colgroup>
          <thead class="hss-table-thead">
            <tr>
              <th
                v-for="(item, index) in fixedRightData"
                :key="index"
                :style="{
                  'text-align': item.column.col.align
                    ? item.column.col.align
                    : 'left',
                }"
              >
                {{ item.column.col.title }}
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div>
        <table>
          <colgroup>
            <col
              v-for="(item, index) in fixedRightData"
              :key="index"
              :style="{
                minWidth: item.column.col.width + 'px',
                width: item.column.col.width + 'px',
              }"
              :aaa="item.column.col.width"
            />
          </colgroup>
          <tbody class="hss-table-tbody">
            <tr
              v-for="(item, index) in fixedRightData[0].data.length"
              :key="index"
            >
              <td
                v-for="(col, colIndex) in fixedRightData"
                :key="colIndex"
                :style="{
                  'text-align': col.column.col.align
                    ? col.column.col.align
                    : 'left',
                }"
              >
                <span> {{ col.data[index][col.column.col.key] }} </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import "./style/index.js";
import { Switch } from "../../../dist";

export default {
  components: { HSwitch: Switch },
  data() {
    return {
      fixedLeft: [],
      fixedRight: [],
      fixedLeftData: [],
      fixedRightData: [],
      allData: {},
      data: [
        {
          key: "235",
          name: "sfdsdf",
          status: "1",
          age: 32,
          money: 3456,

          address: "New No. 1 Lake Park",
          tags: ["nice", "developer"],
          sex: "男",
        },
        {
          key: "1",
          name: "John Brown",
          status: "1",
          age: 32,
          address: "New No. 1 Lake Park",
          sex: "男",
          money: 12,

          tags: ["nice", "developer"],
        },
        {
          key: "2",
          name: "Jim Green",
          status: "1",
          age: 42,
          sex: "女",
          money: 234,

          address: "London No. 1 Lake Park",
          tags: ["loser"],
        },
        {
          key: "3",
          age: 32,
          status: "0",
          name: "Joe Black",
          address: "Sidney No. 1 Lake Park",
          sex: "男",
          money: 345,
          tags: ["cool", "teacher"],
        },
      ],

      columns: [
        {
          fixed: "right",
          width: "100",
          title: "钱",
          dataIndex: "money",
          align: "center",
          key: "money",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
        },
        {
          width: "100",
          title: "性别",
          dataIndex: "sex",
          align: "center",
          key: "sex",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
        },
        {
          fixed: "left",
          width: "100",
          title: "name",
          dataIndex: "name",
          align: "center",
          key: "name",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" },
        },
        {
          // fixed: "left",
          width: "100",
          title: "状态",
          dataIndex: "switch",
          align: "right",
          key: "status",
          render: (h, row) => {
            // console.log(row, 9132999);
            return <div>{row.status}</div>;
          },
        },
        {
          fixed: "right",
          width: "100",
          title: "Age",
          dataIndex: "age",
          key: "age",
        },
        {
          width: "200",
          title: "Address",
          dataIndex: "address",
          key: "address",
        },
        {
          width: "100",
          title: "Tags",
          key: "tags",
          dataIndex: "tags",
          scopedSlots: { customRender: "tags" },
          render: (h, row) => {
            // console.log(row.name);
            // return h("div", {}, row.name);
            return <div>{row.name}</div>;
          },
        },
        // {
        //   title: "Action",
        //   key: "action",
        //   scopedSlots: { customRender: "action" },
        // },
      ],
    };
  },
  computed: {},
  created() {
    /**
     * 首先对数据进行处理，
     * 对columns进行遍历，把左固定，右固定，不固定的col分别保存在一个单独的数组里，
     * 然后把这三个数组放在一个对象保存起来。
     */
    var fixedLeftData = [];
    var fixedRightData = [];
    var normalData = [];
    var allData = { left: [], normal: [], right: [] };
    var sortColumns = [];
    this.columns.map((item) => {
      // console.log(item);
      if (item.fixed == "left") {
        let fixedLeft = this.data.filter((v) => {
          // console.log(v, v[item.key], item);
          return item.key && v[item.key];
        });
        fixedLeftData = fixedLeftData;
        allData["left"].push({
          column: { title: item.key, col: item },
          data: fixedLeft,
        });
      } else if (item.fixed == "right") {
        let fixedRight = this.data.filter((v) => {
          // console.log(v, v[item.key], item);
          return item.key && v[item.key];
        });
        fixedRightData = fixedRight;
        allData["right"].push({
          column: { title: item.key, col: item },
          data: fixedRight,
        });
      } else {
        let normal = this.data.filter((v) => {
          console.log(v, 39, item.key, item);
          return item.key && v[item.key];
        });
        normalData = normal;
        allData["normal"].push({
          column: { title: item.key, col: item },
          data: normalData,
        });

        // console.log(a, 876);
        // allData["normal"] = [{ column: item, data: a }];
      }
      // return item.fixed == "left";
    });
    // console.log(allData, 88888);
    this.allData = allData;
    this.fixedLeftData = allData.left;
    this.fixedRightData = allData.right;
    console.log("000000");
    console.log(allData);
    let arr1 = Object.values(allData);
    console.log(arr1);
    arr1.map((item) => {
      console.log(item);
      item.map((v) => {
        console.log(v.column.title);
        sortColumns.push(v.column.col);
      });
    });
    console.log(sortColumns);
    this.columns = sortColumns;
    // this.fixedLeftData = fixedLeftData;
    // let fixedRight = this.columns.filter((item) => {
    //   console.log(item);
    //   return item.fixed == "right";
    // });
    // this.fixedLeft = fixedLeft;
    // this.fixedRight = fixedRight;
    // console.log(1, fixedLeft);
    // console.log(2, fixedRight);
  },
  mounted() {},
  methods: {
    renderFixed(v) {
      // console.log(v, 99);
      // this.fixedLeft.push(v);
    },
    changeStatus(v) {
      console.log(v);
    },
    // 第一个参数是插槽名，第二个参数是当前行数据，第三个参数是render函数。
    tempRender(name, row, dom) {
      // console.log(this.$createElement);
      // console.log(name, row, dom, "------");
      let VNode = dom(this.$createElement, row);
      // console.log(dom(this.renderDom,row));
      // if (typeof dom == "function") {
      //   dom(this.renderDom, name);
      // }
      // console.log(VNode);
      this.$slots[name] = VNode;
      // console.log(this.$slots[name]);
    },
    renderDom() {
      // console.log("renderDom");
      // console.log(arguments);
    },
  },
};
</script>

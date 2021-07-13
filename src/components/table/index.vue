<template>
  <div class="hss-table border" style="width:800px;">
    <div class="table-scroll">
      <!-- {{ lastScrollLeft }} -->
      <div
        class="h-hide-scrollbar"
        :style="{ overflow: 'scroll', marginBottom: `-${scrollBarWidth}px` }"
        ref="h-table-scroll-head"
        @scroll="scrollHead"
      >
        <table :style="{ width: scroll.x ? scroll.x + 'px' : '100%' }">
          <colgroup>
            <col v-if="rowSelection.type" class="hss-table-selection-col" />
            <col
              v-for="(item, index) in columns"
              :key="index"
              :style="{
                minWidth: item.width + 'px',
                width: item.width + 'px'
              }"
            />
          </colgroup>
          <thead class="hss-table-thead">
            <tr>
              <th>
                <div class="hss-checkbox" @click="onSelectAll">
                  <input
                    type="checkbox"
                    :class="{
                      'hss-checkbox-input': true,
                      'hss-checkbox-checked': tableIsSelectAll
                    }"
                    v-model="tableIsSelectAll"
                  />
                  <!-- 当已选择的数据数组长度等于所有数据减去交集数组长度，即代表全选 -->
                  <span
                    :class="{
                      'hss-checkbox-inner': true,
                      'none-selected':
                        selectedList.length - intersection.length == 0,
                      'no-all':
                        !(selectedList.length - intersection.length == 0) &&
                        selectedList.length != 0 &&
                        selectedList.length < data.length
                    }"
                  ></span>
                </div>
              </th>
              <th
                v-for="(item, index) in columns"
                :key="index"
                :style="{
                  'text-align': item.align ? item.align : 'left'
                }"
              >
                {{ item.fixed && renderFixed(item) }}
                {{ item.title }}
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div
        class="h-table-scroll-body"
        :style="{ overflow: 'scroll', maxHeight: scroll.y + 'px' }"
        ref="h-table-scroll-body"
        @scroll.self="normalScroll"
      >
        <table :style="{ width: scroll.x ? scroll.x + 'px' : '100%' }">
          <colgroup>
            <col v-if="rowSelection.type" class="hss-table-selection-col" />
            <col
              v-for="(item, index) in columns"
              :key="index"
              :style="{
                minWidth: item.width + 'px',
                width: item.width + 'px'
              }"
            />
          </colgroup>
          <tbody class="hss-table-tbody" ref="hss-table-tbody">
            <tr
              v-for="(rowItem, rowIndex) in data"
              :key="rowIndex"
              @mouseenter="mouseEnter($event, rowIndex)"
              @mouseleave="nowTr = -1"
              :class="{ hovertr: rowIndex == nowTr }"
            >
              <td>
                <div
                  :class="{
                    'hss-checkbox': true,
                    'hss-checkbox-disabled': rowSelection.getCheckboxProps(
                      rowItem
                    ).disabled
                  }"
                  @click="e => onSelect(rowItem, isSelected(rowItem.key), e)"
                >
                  <input
                    type="checkbox"
                    :class="{
                      'hss-checkbox-input': true,
                      'hss-checkbox-checked': isSelected(rowItem.key),
                      'hss-checkbox-disabled': rowSelection.getCheckboxProps(
                        rowItem
                      ).disabled
                    }"
                    :disabled="rowSelection.getCheckboxProps(rowItem).disabled"
                    :value="rowItem"
                    v-model="selectedList"
                  />
                  <!-- <input type="checkbox" disabled> -->
                  <span
                    :class="{
                      'hss-checkbox-inner': true
                    }"
                  ></span>
                </div>
              </td>
              <td
                v-for="(columnsItem, columnsIndex) in columns"
                :key="columnsIndex"
                :class="{ ellipsis: columnsItem.ellipsis }"
                :style="{
                  'text-align': columnsItem.align ? columnsItem.align : 'left'
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
                <template v-else>{{ rowItem[columnsItem.key] }}</template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="fixed-left" v-if="fixedLeftData.length">
      <div>
        <table>
          <colgroup>
            <col
              v-for="(item, index) in fixedLeftData"
              :key="index"
              :style="{
                minWidth: item.column.col.width + 'px',
                width: item.column.col.width + 'px'
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
                    : 'left'
                }"
              >
                {{ item.column.col.title }}
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div
        :style="{
          marginRight: `-${scrollBarWidth}px`,
          marginBottom: `-${scrollBarWidth}px`
        }"
      >
        <div
          :style="{
            maxHeight: scroll.y + 'px',
            overflow: 'scroll'
          }"
          ref="h-table-fixed-left-body"
        >
          <table style="background:white">
            <colgroup>
              <col
                v-for="(item, index) in fixedLeftData"
                :key="index"
                :style="{
                  minWidth: item.column.col.width + 'px',
                  width: item.column.col.width + 'px'
                }"
                :aaa="item.column.col.width"
              />
            </colgroup>
            <tbody class="hss-table-tbody">
              <tr
                v-for="(item, index) in fixedLeftData[0].data.length"
                :key="index"
                :style="{ height: trList[index] + 'px' || 'auto' }"
                :class="{ hovertr: index == nowTr }"
                @mouseenter="mouseEnter($event, index)"
                @mouseleave="nowTr = -1"
              >
                <td
                  v-for="(col, colIndex) in fixedLeftData"
                  :key="colIndex"
                  :style="{
                    'text-align': col.column.col.align
                      ? col.column.col.align
                      : 'left'
                  }"
                >
                  {{
                    typeof col.column.col.render == "function"
                      ? tempRender(
                          `fixed-left-${col.column.col.key}-${colIndex}-${index}`,
                          col,
                          col.column.col.render
                        )
                      : ""
                  }}
                  <slot
                    v-if="typeof col.column.col.render == 'function'"
                    :name="
                      `fixed-left-${col.column.col.key}-${colIndex}-${index}`
                    "
                  ></slot>
                  <template v-else
                    >{{ col.data[index][col.column.col.key] }}
                  </template>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="fixed-right" v-if="fixedRightData.length">
      <!-- <div class="scroll-bar"></div> -->
      <div>
        <table>
          <colgroup>
            <col
              v-for="(item, index) in fixedRightData"
              :key="index"
              :style="{
                minWidth: item.column.col.width + 'px',
                width: item.column.col.width + 'px'
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
                    : 'left'
                }"
              >
                {{ item.column.col.title }}
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div
        :style="{
          maxHeight: scroll.y + 'px',
          overflow: 'scroll',
          marginBottom: `-${scrollBarWidth}px`
        }"
        ref="h-table-fixed-right-body"
        @scroll.self="normalScroll"
      >
        <table style="background:white">
          <colgroup>
            <col
              v-for="(item, index) in fixedRightData"
              :key="index"
              :style="{
                minWidth: item.column.col.width + 'px',
                width: item.column.col.width + 'px'
              }"
            />
          </colgroup>
          <tbody class="hss-table-tbody">
            <tr
              v-for="(item, index) in fixedRightData[0].data.length"
              :key="index"
              :style="{ height: trList[index] + 'px' || 'auto' }"
              :class="{ hovertr: index == nowTr }"
              @mouseenter="mouseEnter($event, index)"
              @mouseleave="nowTr = -1"
            >
              <td
                v-for="(col, colIndex) in fixedRightData"
                :key="colIndex"
                :style="{
                  'text-align': col.column.col.align
                    ? col.column.col.align
                    : 'left'
                }"
              >
                {{
                  typeof col.column.col.render == "function"
                    ? tempRender(
                        `fixed-right-${col.column.col.key}-${colIndex}-${index}`,
                        col,
                        col.column.col.render
                      )
                    : ""
                }}
                <slot
                  v-if="typeof col.column.col.render == 'function'"
                  :name="
                    `fixed-right-${col.column.col.key}-${colIndex}-${index}`
                  "
                ></slot>
                <template v-else
                  >{{ col.data[index][col.column.col.key] }}
                </template>
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
import Switch from "../../../dist/switch";
import "../../../dist/switch/style/index.css";
import { throttle, debounce, getScrollBarWidth } from "../utils/common";
console.log(throttle);
export default {
  components: { HSwitch: Switch },
  data() {
    return {
      lastScrollTop: 0,
      lastScrollLeft: 0,
      fixedScrolling: false,
      normalScrolling: false,
      scrollBarWidth: 15,
      selectedIndex: [],
      selectedList: [], //已选中的数据
      canSelected: [],
      // tableIsSelectAll: false,
      nowTr: -1,
      trList: [],
      scroll: { x: 1000, y: 200 }, //建议指定 scroll.x 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 scroll.x
      throttle,
      debounce,
      // fixedLeft: [],
      // fixedRight: [],
      fixedLeftData: [],
      fixedRightData: [],
      allData: {},
      defaultCheckedList: ["2"],
      defaultDisabledList: ["1", "2"],
      intersection: [], //交集
      union: [], //并集
      difference: [], //差集
      data: [
        {
          key: "1",
          name: "sddsdsdsdsdsdssd",
          status: "1",
          age: 323233223323,
          money: 3456,
          address: "New No. 1 Lake Park",
          tags: ["nice", "developer"],
          sex: "男"
        },
        {
          key: "2",
          name: "wwe",
          status: "1",
          age: 32,
          money: 3456,
          address: "New No. 1 Lake Park",
          tags: ["nice", "developer"],
          sex: "男"
        },
        {
          key: "3",
          name: "wew",
          status: "1",
          age: 32,
          money: 3456,
          address: "New No. 1 Lake Park",
          tags: ["nice", "developer"],
          sex: "男"
        },
        {
          key: "4",
          name: "dff",
          status: "1",
          age: 32,
          money: 3456,
          address: "New No. 1 Lake Park",
          tags: ["nice", "developer"],
          sex: "男"
        },
        {
          key: "5",
          name: "John",
          status: "1",
          age: 32,
          address: "New No. 1 Lake Park",
          sex: "男",
          money: 12,

          tags: ["nice", "developer"]
        },
        {
          key: "6",
          name: "Jim",
          status: "1",
          age: 42,
          sex: "女",
          money: 234,

          address: "London No. 1 Lake Park",
          tags: ["loser"]
        },
        {
          key: "7",
          age: 32,
          status: "0",
          name: "Joe",
          address: "Sidney No. 1 Lake Park",
          sex: "男",
          money: 345,
          tags: ["cool", "teacher"]
        }
      ],

      rowSelection: {
        type: "checkbox",
        getCheckboxProps: row => {
          // console.log(row.key, "getCheckboxProps");
          let prop = {
            defaultChecked: this.defaultCheckedList.indexOf(row.key) != -1,
            disabled: this.defaultDisabledList.indexOf(row.key) != -1
          };
          // console.log(prop);
          return prop;
        }
      },

      columns: [
        {
          width: "100",
          title: "key",
          dataIndex: "key",
          align: "center",
          key: "key",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" }
        },
        {
          fixed: "right",
          width: "100",
          title: "钱",
          dataIndex: "money",
          align: "center",
          key: "money",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" }
        },
        {
          // width: "100",
          title: "性别",
          dataIndex: "sex",
          align: "center",
          key: "sex",
          // slots: { title: "customTitle" },
          // scopedSlots: { customRender: "name" },
          render: (h, row) => {
            // console.log(row, 9132999);
            // return <span>{row.status}</span>;
            return <h-switch></h-switch>;
          }
        },
        {
          // fixed: "left",
          ellipsis: true,
          width: "100",
          title: "name",
          dataIndex: "name",
          align: "center",
          key: "name",
          slots: { title: "customTitle" },
          scopedSlots: { customRender: "name" }
        },
        {
          fixed: "right",
          width: "100",
          title: "状态",
          dataIndex: "switch",
          // align: "right",
          key: "status"
          // render: (h, row) => {
          //   // console.log(row, 9132999);
          //   // return <div style="">{row.status}</div>;
          //   // return <div style="height:100px">{row.status}</div>;
          //   return <h-switch></h-switch>;
          // },
        },
        {
          // fixed: "right",
          width: "100",
          title: "Age",
          dataIndex: "age",
          key: "age"
        },
        {
          width: "200",
          title: "Address",
          dataIndex: "address",
          key: "address"
        },
        {
          // fixed: "left",
          width: "100",
          title: "Tags",
          key: "tags",
          dataIndex: "tags",
          scopedSlots: { customRender: "tags" },
          render: (h, row) => {
            // console.log(row.name);
            // return h("div", {}, row.name);
            // return <div>{row.name}</div>;
            return <span>234</span>;
          }
        }
        // {
        //   title: "Action",
        //   key: "action",
        //   scopedSlots: { customRender: "action" },
        // },
      ]
    };
  },
  watch: {
    selectedList(newVal, oldVal) {
      // console.log(newVal, oldVal);
      newVal.length == this.data.length && (this.tableIsSelectAll = true);
      let newSelectedRowKeys = newVal.map(v => v.key);
      let newSelectedRows = newVal;
      let oldSelectedRowKeys = oldVal.map(v => v.key);
      let oldSelectedRows = oldVal;
      console.log(
        "选中项发生变化时的回调onChange:",
        newSelectedRowKeys,
        newSelectedRows,
        oldSelectedRowKeys,
        oldSelectedRows
      );
      // function(newSelectedRowKeys, newSelectedRows,oldSelectedRowKeys,oldSelectedRows) {}
    }
  },
  computed: {
    tableIsSelectAll: {
      get: function() {
        let res =
          this.data.length - this.intersection.length ==
          this.selectedList.length;
        let res1 =
          this.data.length - this.difference.length == this.selectedList.length;
        // this.data.length - this.defaultDisabledList.length;
        // console.log(res, res1, 3443433);
        // if (this.defaultCheckedList.length) {
        //   console.log("有默认选中的数据。");
        //   res =
        //     this.selectedList.length - this.defaultCheckedList.length ==
        //     this.data.length - this.defaultDisabledList.length;
        //   console.log(res);
        //   return res;
        // } else {
        //   console.log("没有默认选中的数据。");
        //   return res;
        // }
        // console.log(res);
        return res || res1;
      },
      set: function(v) {
        return v;
      }
    },
    isSelected() {
      return v => {
        // console.log("isSelectedisSelected", this.selectedList, v);
        // console.log(this.selectedList.filter(item => item.key == v).length);
        return this.selectedList.filter(item => item.key == v).length == 1;
      };
    },
    // nowHoverTr() {
    //   return (v) => {
    //     console.log(v);
    //     // console.log(this.nowTr);
    //     return v == this.nowTr;
    //   };
    // },
    getHeight() {
      return v => {
        console.log(v);
        console.log(this.$refs);
        console.log(Object.keys(this.$refs).length, 9999);
        // console.log(this.$refs['hss-table-tbody']);
        return 100 + "px";
      };
    }
  },
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
    this.columns.map(item => {
      // console.log(item);
      if (item.fixed == "left") {
        let fixedLeft = this.data.filter(v => {
          // console.log(v, v[item.key], item);
          return item.key && v[item.key];
        });
        fixedLeftData = fixedLeftData;
        allData["left"].push({
          column: { title: item.key, col: item },
          data: fixedLeft
        });
      } else if (item.fixed == "right") {
        let fixedRight = this.data.filter(v => {
          // console.log(v, v[item.key], item);
          return item.key && v[item.key];
        });
        fixedRightData = fixedRight;
        allData["right"].push({
          column: { title: item.key, col: item },
          data: fixedRight
        });
      } else {
        let normal = this.data.filter(v => {
          // console.log(v, 39, item.key, item);
          return item.key && v[item.key];
        });
        normalData = normal;
        allData["normal"].push({
          column: { title: item.key, col: item },
          data: normalData
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
    arr1.map(item => {
      console.log(item);
      item.map(v => {
        console.log(v.column.title);
        sortColumns.push(v.column.col);
      });
    });
    console.log(sortColumns);
    this.columns = sortColumns;

    // 求出默认选中和默认禁用的交集
    var intersection = this.defaultCheckedList.filter(v => {
      return this.defaultDisabledList.indexOf(v) > -1;
    });
    this.intersection = intersection;
    console.log("求出默认选中和默认禁用的交集", intersection);

    // 求出默认选中和默认禁用的并集
    this.union = Array.from(
      new Set(this.defaultCheckedList.concat(this.defaultDisabledList))
    );
    console.log("求出默认选中和默认禁用的并集", this.union);

    // 求出默认选中和默认禁用的差集
    this.difference = this.defaultDisabledList.filter(v => {
      return this.defaultCheckedList.indexOf(v) === -1;
    });
    console.log("求出默认选中和默认禁用的差集", this.union);

    // 查找所有非disabled的数据
    let canSelected = this.data.filter(v => {
      return this.defaultDisabledList.indexOf(v.key) == -1;
    });
    this.canSelected = canSelected;

    // 处理默认选中数据
    this.selectedList = this.data.filter(item => {
      console.log("处理默认选中数据", item);
      return this.defaultCheckedList.indexOf(item.key) != -1;
    });
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
  mounted() {
    this.asyncRowHeight();
    console.log(getScrollBarWidth(), 234324);
    this.scrollBarWidth = getScrollBarWidth();
  },
  methods: {
    // 用户手动选择/取消选择某列的回调
    onSelect(row, isSelected, event) {
      setTimeout(() => {
        console.log(
          "用户手动选择/取消选择某列的回调onSelect",
          "当前列数据：",
          row,
          "当前列是否选中：",
          !isSelected,
          "当前已选择数据：",
          this.selectedList,
          "event：",
          event
        );
      }, 0);
      // Function(row, isSelected, selectedRows, event){}
    },

    // selectedItem(v) {
    //   console.log(v);
    //   this.selectedIndex.push(v);
    // },
    // 更改全选
    onSelectAll(v) {
      // console.log(v);
      console.log("更改全选onSelectAll");
      let isAll = null;
      if (this.tableIsSelectAll) {
        // 当前是全选了，则取消全选
        isAll = false;
        let selectKey = this.selectedList.map(v => v.key);
        // console.log(selectKey);
        let changeData = this.data.filter(item => {
          return selectKey.indexOf(item.key) == -1;
        });
        console.log(
          "取消全选",
          "是否全选：",
          isAll,
          "原选择的数据：",
          this.selectedList,
          "现选择的数据：",
          // nowSelectedList,
          "改变的数据：",
          changeData
        );
        this.selectedList = this.data.filter(v => {
          return this.intersection.indexOf(v.key) != -1;
        });
      } else {
        // 当前不是全选，需要全选
        // console.log(changeData);
        isAll = true;
        // 查找当前选中的数据的key
        let selectKey = this.selectedList.map(v => v.key);
        // // 查找所有非disabled的数据
        // let canSelected = this.data.filter(v => {
        //   return this.defaultDisabledList.indexOf(v.key) != -1;
        // });
        // this.canSelected = canSelected;

        // console.log(selectKey);
        // 过滤出修改的数据
        let changeRows = this.canSelected.filter(item => {
          return selectKey.indexOf(item.key) == -1;
        });
        // 当前选中的数据(默认不可修改和默认选中这两数据的交集+所有可选中的数据)
        let nowSelectedRows = this.canSelected.concat(
          this.data.filter(v => v.key == this.intersection)
        );
        // let nowSelectedRows = this.data.filter(
        //   item => this.defaultDisabledList.indexOf(item.key) == -1
        // );
        // function(isAll,oldSelectRows,nowSelectedRows,changeRows){}
        console.log(
          "点击全选",
          "是否全选：",
          isAll,
          "原选择的数据：",
          this.selectedList,
          "现选择的数据：",
          nowSelectedRows,
          "改变的数据：",
          changeRows
        );
        this.selectedList = nowSelectedList;
      }
    },
    renderFixed(v) {
      // console.log(v, 191919);
    },
    asyncRowHeight() {
      console.log(this.$refs["hss-table-tbody"].children);
      let tr = this.$refs["hss-table-tbody"].children;
      let trList = [];
      for (var i = 0; i < tr.length; i++) {
        console.log(tr[i].offsetHeight);
        trList.push(tr[i].offsetHeight);
      }
      this.trList = trList;
    },
    // mouseEnter: throttle(function(e, v) {
    //   // console.log(e, v);
    //   this.nowTr = v;
    // }, 100),
    mouseEnter(e, v) {
      console.log("mouseEnter");
      this.nowTr = v;
    },
    fixedLeftScrollTop(e, index) {
      console.log("fixedLeftScrollTop", e.target, e.currentTarget);
      // if (this.normalScrolling) {
      //   this.fixedScrolling = false;
      //   console.log("normalScroll在滚动，fixedLeftScrollTop不能滚");
      //   return;
      // }
      // console.log(
      //   "fixedLeftScrollTopfixedLeftScrollTop",
      //   e.target.scrollTop,
      //   e.target
      // );
      let t = e.target.scrollTop;
      // this.fixedScrolling = true;
      if (this.lastScrollTop != t) {
        console.log("3323");
        this.$refs["h-table-scroll-body"].scrollTop = t;
      }
      //
      // this.fixedScrolling = false;
    },
    normalScroll(e, index) {
      // console.log(
      //   "normalScroll",
      //   e.target,
      //   this.$refs["h-table-scroll-body"],
      //   e.currentTarget
      // );
      // this.normalScrolling = true;
      // if (this.fixedScrolling) {
      //   this.normalScrolling = false;
      //   return;
      // }
      // return
      // console.log("normalScrollnormalScroll", e.target.scrollTop, e.target);
      let l = e.target.scrollLeft;
      let t = e.target.scrollTop;
      // console.log(
      //   "lastScrollTop:",
      //   this.lastScrollTop,
      //   "nowScroll:",
      //   t,
      //   "left:",
      //   l
      // );
      // this.$refs["h-table-scroll-head"] &&
      //   (this.$refs["h-table-scroll-head"].scrollLeft = l);
      if (this.lastScrollTop != t) {
        // console.log(
        //   "this.lastScrollTop",
        //   this.lastScrollTop,
        //   "t",
        //   t,
        //   "上下滚动"
        // );
        this.$refs["h-table-scroll-body"] &&
          (this.$refs["h-table-scroll-body"].scrollTop = t);
        // if (!this.fixedScrolling) {
        this.$refs["h-table-fixed-left-body"] &&
          (this.$refs["h-table-fixed-left-body"].scrollTop = t);
        this.$refs["h-table-fixed-right-body"] &&
          (this.$refs["h-table-fixed-right-body"].scrollTop = t);
      }
      if (this.lastScrollTop != l) {
        if (e.target == this.$refs["h-table-scroll-body"]) {
          // console.log("左右滚动");
          this.$refs["h-table-scroll-head"] &&
            (this.$refs["h-table-scroll-head"].scrollLeft = l);
        }
      }
      this.lastScrollTop = t; //记录最后的上下滚动距离
      this.lastScrollLeft = l; //记录最后的左右滚动距离
      // console.log("tttttttttttt", t);

      // this.normalScrolling = false;
    },
    // fixedLeftScrollTop: throttle(function(e, index) {
    //   console.log("fixedLeftScrollTopfixedLeftScrollTop");
    //   let t = e.target.scrollTop;
    //   this.$refs["h-table-scroll-body"].scrollTop = t;
    // }, 10),
    // scrollLeft: throttle(function(e, index) {
    //   let l = e.target.scrollLeft;
    //   let t = e.target.scrollTop;
    //   this.$refs["h-table-scroll-head"].scrollLeft = l;
    //   this.$refs["h-table-fixed-left-body"].scrollTop = t;
    //   this.$refs["h-table-fixed-right-body"].scrollTop = t;
    //   // this.scrollTo("h-table-scroll-head", { l });
    // }, 10),

    scrollHead() {
      // console.log("scrollHead");
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
      // console.log(arguments);
    }
  }
};
</script>

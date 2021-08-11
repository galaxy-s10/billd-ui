<template>
  <div
    :class="{
      'billd-table': true,
      border: bordered,
    }"
    style="width: 800px"
  >
    <div class="table-scroll">
      <div
        class="billd-table-header billd-hide-scrollbar"
        :style="{ overflow: 'scroll', marginBottom: `-${scrollBarWidth}px` }"
        ref="billd-table-scroll-head"
        @scroll.self="normalScroll"
      >
        <table :style="{ width: scroll.x ? scroll.x + 'px' : '100%' }">
          <colgroup>
            <col v-if="rowSelection.type" class="billd-table-selection-col" />
            <col
              v-for="(item, index) in columns"
              :key="item.key"
              :column-key="getColumnKey(item) || index"
              :style="{
                minWidth: item.width + 'px',
                width: item.width + 'px',
              }"
            />
          </colgroup>
          <thead class="billd-table-thead">
            <tr>
              <th>
                <div class="billd-checkbox" @click="onSelectAll">
                  <input
                    type="checkbox"
                    :class="{
                      'billd-checkbox-input': true,
                      'billd-checkbox-checked': tableIsSelectAll,
                    }"
                    v-model="tableIsSelectAll"
                  />
                  <!-- 当已选择的数据数组长度等于所有数据减去交集数组长度，即代表全选 -->
                  <span
                    :class="{
                      'billd-checkbox-inner': true,
                      'none-selected':
                        selectedList.length - intersection.length == 0,
                      'no-all':
                        !(selectedList.length - intersection.length == 0) &&
                        selectedList.length != 0 &&
                        selectedList.length < sourceData.length,
                    }"
                  ></span>
                </div>
              </th>
              <th
                v-for="(item, index) in columns"
                :key="index"
                :column-key="getColumnKey(item) || index"
                :style="{
                  'text-align': item.align ? item.align : 'left',
                }"
              >
                <!-- {{ item.fixed && renderFixed(item) }} -->
                {{ item.title }}
              </th>
            </tr>
          </thead>
        </table>
      </div>
      <div
        class="billd-table-body billd-table-scroll-body"
        :style="{ overflow: 'scroll', maxHeight: scroll.y + 'px' }"
        ref="billd-table-scroll-body"
        @scroll.self="normalScroll"
      >
        <table :style="{ width: scroll.x ? scroll.x + 'px' : '100%' }">
          <colgroup>
            <col v-if="rowSelection.type" class="billd-table-selection-col" />
            <col
              v-for="(item, index) in columns"
              :key="index"
              :column-key="getColumnKey(item) || index"
              :style="{
                minWidth: item.width + 'px',
                width: item.width + 'px',
              }"
            />
          </colgroup>
          <tbody class="billd-table-tbody" ref="billd-table-tbody">
            <tr
              v-for="(rowItem, rowIndex) in sourceData"
              :key="sourceData[rowIndex][getRowKey(rowItem)]"
              :row-key="sourceData[rowIndex][getRowKey(rowItem)]"
              @mouseenter="mouseEnter($event, rowIndex)"
              @mouseleave="mouseLeave"
              :class="{ hovertr: rowIndex == nowTr }"
            >
              <td>
                <div
                  :class="{
                    'billd-checkbox': true,
                    'billd-checkbox-disabled':
                      rowSelection.getCheckboxProps(rowItem).disabled,
                  }"
                  @click="(e) => onSelect(rowItem, isSelected(rowItem), e)"
                >
                  <input
                    type="checkbox"
                    :class="{
                      'billd-checkbox-input': true,
                      'billd-checkbox-checked': isSelected(rowItem),
                      'billd-checkbox-disabled':
                        rowSelection.getCheckboxProps(rowItem).disabled,
                    }"
                    :disabled="rowSelection.getCheckboxProps(rowItem).disabled"
                    :value="rowItem"
                    v-model="selectedList"
                  />
                  <!-- <input type="checkbox" disabled> -->
                  <span
                    :class="{
                      'billd-checkbox-inner': true,
                    }"
                  ></span>
                </div>
              </td>
              <td
                v-for="(columnsItem, columnsIndex) in columns"
                :key="getColumnKey(columnsItem) || columnsIndex"
                :row-key="getColumnKey(columnsItem) || columnsIndex"
                :class="{ ellipsis: columnsItem.ellipsis }"
                :style="{
                  'text-align': columnsItem.align ? columnsItem.align : 'left',
                }"
              >
                <!-- {{ tempRender(`${columnsItem.key}-${rowIndex}`, columnsItem.render) }} -->
                {{
                  typeof columnsItem.render == 'function'
                    ? tempRender(
                        `${columnsItem.dataIndex}-${rowIndex}`,
                        rowItem,
                        columnsItem.render
                      )
                    : ''
                }}
                <slot
                  v-if="typeof columnsItem.render == 'function'"
                  :name="`${columnsItem.dataIndex}-${rowIndex}`"
                ></slot>
                <template v-else>{{
                  getRowData(columnsItem, rowItem)
                }}</template>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="fixed-left" v-if="fixedLeftData.length">
      <div>
        <table style="min-width: auto">
          <colgroup>
            <col v-if="rowSelection.type" class="billd-table-selection-col" />
            <col
              v-for="(item, index) in fixedLeftData"
              :key="index"
              :column-key="item.column.key || index"
              :style="{
                minWidth: item.column.col.width + 'px',
                width: item.column.col.width + 'px',
              }"
            />
          </colgroup>
          <thead class="billd-table-thead">
            <tr>
              <th>
                <div class="billd-checkbox" @click="onSelectAll">
                  <input
                    type="checkbox"
                    :class="{
                      'billd-checkbox-input': true,
                      'billd-checkbox-checked': tableIsSelectAll,
                    }"
                    v-model="tableIsSelectAll"
                  />
                  <!-- 当已选择的数据数组长度等于所有数据减去交集数组长度，即代表全选 -->
                  <span
                    :class="{
                      'billd-checkbox-inner': true,
                      'none-selected':
                        selectedList.length - intersection.length == 0,
                      'no-all':
                        !(selectedList.length - intersection.length == 0) &&
                        selectedList.length != 0 &&
                        selectedList.length < sourceData.length,
                    }"
                  ></span>
                </div>
              </th>
              <th
                v-for="(item, index) in fixedLeftData"
                :key="index"
                :column-key="item.column.key || index"
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
      <div
        :style="{
          marginRight: `-${scrollBarWidth}px`,
          marginBottom: `-${scrollBarWidth}px`,
        }"
      >
        <div
          :style="{
            maxHeight: scroll.y + 'px',
            overflow: 'scroll',
          }"
          ref="billd-table-fixed-left-body"
          @scroll.self="normalScroll"
        >
          <table style="background: white">
            <colgroup>
              <col v-if="rowSelection.type" class="billd-table-selection-col" />
              <col
                v-for="(item, index) in fixedLeftData"
                :key="item.column.key"
                :column-key="item.column.key || index"
                :style="{
                  minWidth: item.column.col.width + 'px',
                  width: item.column.col.width + 'px',
                }"
              />
            </colgroup>
            <tbody class="billd-table-tbody">
              <tr
                v-for="(item, index) in sourceData"
                :key="sourceData[index][getRowKey(item)]"
                :row-key="sourceData[index][getRowKey(item)]"
                :style="{ height: trList[index] + 'px' || 'auto' }"
                :class="{ hovertr: index == nowTr }"
                @mouseenter="mouseEnter($event, index)"
                @mouseleave="mouseLeave"
              >
                <!-- <td>
                  2
                  {{ fixedLeftData[0].data[index].key }}
                </td> -->
                <td>
                  <div
                    :class="{
                      'billd-checkbox': true,
                      'billd-checkbox-disabled': rowSelection.getCheckboxProps(
                        fixedLeftData[0].data[index]
                      ).disabled,
                    }"
                    @click="
                      (e) =>
                        onSelect(
                          fixedLeftData[0].data[index],
                          isSelected(fixedLeftData[0].data[index]),
                          e
                        )
                    "
                  >
                    <input
                      type="checkbox"
                      :class="{
                        'billd-checkbox-input': true,
                        'billd-checkbox-checked': isSelected(
                          fixedLeftData[0].data[index]
                        ),
                        'billd-checkbox-disabled':
                          rowSelection.getCheckboxProps(
                            fixedLeftData[0].data[index]
                          ).disabled,
                      }"
                      :disabled="
                        rowSelection.getCheckboxProps(
                          fixedLeftData[0].data[index]
                        ).disabled
                      "
                      :value="fixedLeftData[0].data[index]"
                      v-model="selectedList"
                    />
                    <span
                      :class="{
                        'billd-checkbox-inner': true,
                      }"
                    ></span>
                  </div>
                </td>
                <td
                  v-for="(col, colIndex) in fixedLeftData"
                  :key="col.column.key || colIndex"
                  :column-key="col.column.key || colIndex"
                  :style="{
                    'text-align': col.column.col.align
                      ? col.column.col.align
                      : 'left',
                  }"
                >
                  <!-- {{col.column.col.dataIndex}}-{{colIndex}}-{{index}} -->
                  {{
                    typeof col.column.col.render == 'function'
                      ? tempRender(
                          `fixed-left-${col.column.col.dataIndex}-${colIndex}-${index}`,
                          col,
                          col.column.col.render
                        )
                      : ''
                  }}
                  <slot
                    v-if="typeof col.column.col.render == 'function'"
                    :name="`fixed-left-${col.column.col.dataIndex}-${colIndex}-${index}`"
                  ></slot>
                  <template v-else>
                    {{ getRowData(col.column.col, col.data[index]) }}
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
        <table style="min-width: auto">
          <colgroup>
            <col
              v-for="(item, index) in fixedRightData"
              :key="item.column.key"
              :column-key="item.column.key || index"
              :style="{
                minWidth: item.column.col.width + 'px',
                width: item.column.col.width + 'px',
                color: 'red',
              }"
            />
          </colgroup>
          <thead class="billd-table-thead">
            <tr>
              <th
                v-for="(item, index) in fixedRightData"
                :key="item.column.key || index"
                :column-key="item.column.key || index"
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
      <div
        :style="{
          maxHeight: scroll.y + 'px',
          overflow: 'scroll',
          marginBottom: `-${scrollBarWidth}px`,
        }"
        ref="billd-table-fixed-right-body"
        @scroll.self="normalScroll"
      >
        <table style="background: white">
          <colgroup>
            <col
              v-for="(item, index) in fixedRightData"
              :key="item.column.key || index"
              :column-key="item.column.key || index"
              :style="{
                minWidth: item.column.col.width + 'px',
                width: item.column.col.width + 'px',
              }"
            />
          </colgroup>
          <tbody class="billd-table-tbody">
            <tr
              v-for="(item, index) in sourceData"
              :key="sourceData[index][getRowKey(item)]"
              :row-key="sourceData[index][getRowKey(item)]"
              :style="{ height: trList[index] + 'px' || 'auto' }"
              :class="{ hovertr: index == nowTr }"
              @mouseenter="mouseEnter($event, index)"
              @mouseleave="mouseLeave"
            >
              <td
                v-for="(col, colIndex) in fixedRightData"
                :key="col.column.key || colIndex"
                :column-key="col.column.key || colIndex"
                :style="{
                  'text-align': col.column.col.align
                    ? col.column.col.align
                    : 'left',
                }"
              >
                {{
                  typeof col.column.col.render == 'function'
                    ? tempRender(
                        `fixed-right-${col.column.col.key}-${colIndex}-${index}`,
                        col,
                        col.column.col.render
                      )
                    : ''
                }}
                <slot
                  v-if="typeof col.column.col.render == 'function'"
                  :name="`fixed-right-${col.column.col.key}-${colIndex}-${index}`"
                ></slot>
                <template v-else>
                  {{ getRowData(col.column.col, col.data[index]) }}
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
import './style/index.js';
// import Switch from '../../../dist/switch';
// import '../../../dist/switch/style/index.css';
import { throttle, debounce, getScrollBarWidth } from './utils/common';

console.log(throttle);
export default {
  components: {},
  data() {
    return {
      rowKey: 'idd',
      bordered: true,
      lastScrollTop: 0,
      lastScrollLeft: 0,
      fixedScrolling: false,
      normalScrolling: false,
      scrollBarWidth: 15,
      selectedIndex: [],
      selectedList: [], // 已选中的数据
      canSelected: [],
      // tableIsSelectAll: false,
      nowTr: -1,
      trList: [],
      scroll: { x: 1000, y: 300 }, // 建议指定 scroll.x 为大于表格宽度的固定值或百分比。注意，且非固定列宽度之和不要超过 scroll.x
      throttle,
      debounce,
      // fixedLeft: [],
      // fixedRight: [],
      fixedLeftData: [],
      fixedRightData: [],
      allData: {},
      defaultCheckedList: [200],
      defaultDisabledList: [100, 200],
      intersection: [], // 交集
      union: [], // 并集
      difference: [], // 差集
      sourceData: [
        {
          key: 100,
          idd: 100,
          name: 'sddsdsdsdsdsdssd',
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
          // console.log(row.key, "getCheckboxProps");
          // console.log(row,this.getRowKey(row));
          const key = row[this.getRowKey(row)];
          // console.log(row, key, "0000000");
          const prop = {
            defaultChecked: this.defaultCheckedList.indexOf(key) !== -1,
            disabled: this.defaultDisabledList.indexOf(key) !== -1,
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
          fixed: 'right',
          width: '120',
          title: '性别',
          dataIndex: 'sex',
          align: 'center',
          // key: "sex",
          // slots: { title: "customTitle" },
          // scopedSlots: { customRender: "name" },
          render: () => (
            // console.log(row, 9132999);
            // return <span>{row.status}</span>;
            // <billd-switch></billd-switch>
            <span>ssss</span>
          ),
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
          render: () => (
            // console.log(row, 9132999);
            <div style="">'ddd'</div>
            // return <div style="height:100px">{row.status}</div>;
            // <billd-switch></billd-switch>
          ),
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
    };
  },
  watch: {
    selectedList(newVal, oldVal) {
      // console.log(newVal, oldVal);
      newVal.length === this.sourceData.length &&
        (this.tableIsSelectAll = true);
      // let key = this.getRowKey()
      const newSelectedRowKeys = newVal.map((v) => v.key);
      const newSelectedRows = newVal;
      const oldSelectedRowKeys = oldVal.map((v) => v.key);
      const oldSelectedRows = oldVal;
      console.log(
        '选中项发生变化时的回调onChange:',
        newSelectedRowKeys,
        newSelectedRows,
        oldSelectedRowKeys,
        oldSelectedRows
      );
      // function(newSelectedRowKeys, newSelectedRows,oldSelectedRowKeys,oldSelectedRows) {}
    },
  },
  computed: {
    tableIsSelectAll: {
      get() {
        const res =
          this.sourceData.length - this.intersection.length ===
          this.selectedList.length;
        const res1 =
          this.sourceData.length - this.difference.length ===
          this.selectedList.length;
        // this.sourceData.length - this.defaultDisabledList.length;
        // console.log(res, res1, 3443433);
        // if (this.defaultCheckedList.length) {
        //   console.log("有默认选中的数据。");
        //   res =
        //     this.selectedList.length - this.defaultCheckedList.length ==
        //     this.sourceData.length - this.defaultDisabledList.length;
        //   console.log(res);
        //   return res;
        // } else {
        //   console.log("没有默认选中的数据。");
        //   return res;
        // }
        // console.log(res);
        return res || res1;
      },
      set(v) {
        return v;
      },
    },
    isSelected() {
      return (v) => {
        const key = this.getRowKey(v);
        return (
          this.selectedList.filter((item) => item[key] === v[key]).length === 1
        );
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
      return (v) => {
        console.log(v);
        console.log(this.$refs);
        console.log(Object.keys(this.$refs).length, 9999);
        // console.log(this.$refs['billd-table-tbody']);
        return `${100}px`;
      };
    },
  },
  created() {
    console.log('created了');
    /**
     * 首先对数据进行处理，
     * 对columns进行遍历，把左固定，右固定，不固定的col分别保存在一个单独的数组里，
     * 然后把这三个数组放在一个对象保存起来。
     */
    const allData = { left: [], normal: [], right: [] };
    const sortColumns = [];
    this.columns.forEach((item) => {
      // console.log(item);
      // 判断columnKey是否正确
      const columnKey = this.getColumnKey(item);
      if (!columnKey) {
        console.error(
          'columnKey有误（column中key以及dataIndex均无）,将使用v-for遍历时的index作为columnKey'
        );
      }
      const fixed = item.fixed ? item.fixed : false;
      if (item.fixed === true || fixed === 'left') {
        const fixedLeftRowData = this.sourceData.filter((v) => {
          // row的key优先级：rowKey > key
          const rowKey = this.getRowKey(v);
          if (!rowKey) {
            console.error(
              '请确保dataSource中的每项数据都有key值，如果没有，请指定rowKey！'
            );
          }
          return rowKey && v[rowKey];
        });
        allData.left.push({
          // column: { key: columnKey, col: item },
          // 顺便将columnKey保存到key里，这样就不用再进col里面判断columnKey了
          column: { key: columnKey, col: item },
          data: fixedLeftRowData,
        });
      } else if (fixed === 'right') {
        const fixedRightRowData = this.sourceData.filter((v) => {
          const rowKey = this.getRowKey(v);
          if (!rowKey) {
            console.error(
              '请确保dataSource中的每项数据都有key值，如果没有，请指定rowKey！'
            );
          }
          return rowKey && v[rowKey];
        });
        allData.right.push({
          column: { key: columnKey, col: item },
          data: fixedRightRowData,
        });
      } else {
        const normalRowData = this.sourceData.filter((v) => {
          // console.log(v, 39, item.key, item);
          const rowKey = this.getRowKey(v);
          if (!rowKey) {
            console.error(
              '请确保dataSource中的每项数据都有key值，如果没有，请指定rowKey！'
            );
          }
          return rowKey && v[rowKey];
        });
        allData.normal.push({
          column: { key: columnKey, col: item },
          data: normalRowData,
        });
      }
    });
    this.allData = allData;
    this.fixedLeftData = allData.left;
    this.fixedRightData = allData.right;
    const arr1 = Object.values(allData);
    console.log(arr1);
    arr1.forEach((item) => {
      console.log(item);
      item.forEach((v) => {
        console.log(v.column.title);
        sortColumns.push(v.column.col);
      });
    });
    console.log(sortColumns);
    this.columns = sortColumns;

    // 求出默认选中和默认禁用的交集
    const intersection = this.defaultCheckedList.filter(
      (v) => this.defaultDisabledList.indexOf(v) > -1
    );
    this.intersection = intersection;
    console.log('求出默认选中和默认禁用的交集', intersection);

    // 求出默认选中和默认禁用的并集
    this.union = Array.from(
      new Set(this.defaultCheckedList.concat(this.defaultDisabledList))
    );
    console.log('求出默认选中和默认禁用的并集', this.union);

    // 求出默认选中和默认禁用的差集
    this.difference = this.defaultDisabledList.filter(
      (v) => this.defaultCheckedList.indexOf(v) === -1
    );
    console.log('求出默认选中和默认禁用的差集', this.union);

    // 查找所有非disabled的数据
    const canSelected = this.sourceData.filter(
      (v) => this.defaultDisabledList.indexOf(v.key) === -1
    );
    this.canSelected = canSelected;

    // 处理默认选中数据
    this.selectedList = this.sourceData.filter((item) => {
      console.log('处理默认选中数据', item);
      return this.defaultCheckedList.indexOf(item.key) !== -1;
    });
  },
  mounted() {
    console.log('mounted了');
    // 同步行高
    this.asyncRowHeight();
    console.log(getScrollBarWidth(), 234324);
    // 设置滚动条高度
    this.scrollBarWidth = getScrollBarWidth();
  },
  methods: {
    /**
     * 获取对column的v-for时的key,优先级：column.key>column.dataIndex
     * 遍历column时，如果找不到key，将使用v-for遍历时默认的index作为columnKey
     */
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
    // 获取dataIndex,colunmItem:当前column的dataIndex,rowItem:当前data的某项
    getRowData(colunmItem, rowItem) {
      // let dataIndex = colunmItem.dataIndex
      // console.log(colunmItem, rowItem,colunmItem.dataIndex, "433333333333");
      return rowItem[colunmItem.dataIndex];
    },
    // 用户手动选择/取消选择某列的回调
    onSelect(row, isSelected, event) {
      setTimeout(() => {
        console.log(
          '用户手动选择/取消选择某列的回调onSelect',
          '当前列数据：',
          row,
          '当前列是否选中：',
          !isSelected,
          '当前已选择数据：',
          this.selectedList,
          'event：',
          event
        );
      }, 0);
      // Function(row, isSelected, selectedRows, event){}
    },
    // 更改全选
    onSelectAll() {
      // console.log(v);
      console.log('更改全选onSelectAll');
      let isAll = null;
      if (this.tableIsSelectAll) {
        // 当前是全选了，则取消全选
        isAll = false;
        const selectKey = this.selectedList.map((v) => v.key);
        // console.log(selectKey);
        const changeData = this.sourceData.filter(
          (item) => selectKey.indexOf(item.key) === -1
        );
        console.log(
          '取消全选',
          '是否全选：',
          isAll,
          '原选择的数据：',
          this.selectedList,
          '现选择的数据：',
          // nowSelectedList,
          '改变的数据：',
          changeData
        );
        this.selectedList = this.sourceData.filter(
          (v) => this.intersection.indexOf(v.key) !== -1
        );
      } else {
        // 当前不是全选，需要全选
        // console.log(changeData);
        isAll = true;
        // 查找当前选中的数据的key
        const selectKey = this.selectedList.map((v) => v.key);
        // // 查找所有非disabled的数据
        // let canSelected = this.sourceData.filter(v => {
        //   return this.defaultDisabledList.indexOf(v.key) != -1;
        // });
        // this.canSelected = canSelected;

        // console.log(selectKey);
        // 过滤出修改的数据
        const changeRows = this.canSelected.filter(
          (item) => selectKey.indexOf(item.key) === -1
        );
        // 当前选中的数据(默认不可修改和默认选中这两数据的交集+所有可选中的数据)
        const nowSelectedRows = this.canSelected.concat(
          this.sourceData.filter((v) => v.key === this.intersection)
        );
        // let nowSelectedRows = this.sourceData.filter(
        //   item => this.defaultDisabledList.indexOf(item.key) == -1
        // );
        // function(isAll,oldSelectRows,nowSelectedRows,changeRows){}
        console.log(
          '点击全选',
          '是否全选：',
          isAll,
          '原选择的数据：',
          this.selectedList,
          '现选择的数据：',
          nowSelectedRows,
          '改变的数据：',
          changeRows
        );
        this.selectedList = nowSelectedRows;
      }
    },
    asyncRowHeight() {
      // console.log(this.$refs["billd-table-tbody"].children);
      const tr = this.$refs['billd-table-tbody'].children;
      const trList = [];
      for (let i = 0; i < tr.length; i += 1) {
        trList.push(tr[i].offsetHeight);
      }
      this.trList = trList;
    },
    mouseEnter(e, v) {
      // console.log("mouseEnter");
      if (this.fixedLeftData.length || this.fixedRightData.length) {
        this.nowTr = v;
      }
    },
    mouseLeave() {
      // console.log("mouseLeave");
      if (this.fixedLeftData.length || this.fixedRightData.length) {
        this.nowTr = -1;
      }
    },
    normalScroll(e) {
      if (e.target === this.$refs['billd-table-scroll-head']) {
        // console.log(e.target);
      }
      const l = e.target.scrollLeft;
      const t = e.target.scrollTop;
      if (this.lastScrollTop !== t) {
        if (e.target === this.$refs['billd-table-scroll-body']) {
          // this.$refs["billd-table-scroll-body"] &&
          //   (this.$refs["billd-table-scroll-body"].scrollTop = t);
          // if (!this.fixedScrolling) {
          this.$refs['billd-table-fixed-left-body'] &&
            (this.$refs['billd-table-fixed-left-body'].scrollTop = t);
          this.$refs['billd-table-fixed-right-body'] &&
            (this.$refs['billd-table-fixed-right-body'].scrollTop = t);
        }
        if (e.target === this.$refs['billd-table-fixed-left-body']) {
          console.log(e.target);
          this.$refs['billd-table-fixed-right-body'] &&
            (this.$refs['billd-table-fixed-right-body'].scrollTop = t);
          this.$refs['billd-table-scroll-body'] &&
            (this.$refs['billd-table-scroll-body'].scrollTop = t);
        }
        if (e.target === this.$refs['billd-table-fixed-right-body']) {
          console.log(e.target);
          this.$refs['billd-table-fixed-left-body'] &&
            (this.$refs['billd-table-fixed-left-body'].scrollTop = t);
          this.$refs['billd-table-scroll-body'] &&
            (this.$refs['billd-table-scroll-body'].scrollTop = t);
        }
      }
      // 虽然table-head不可见，鼠标滚动不了，但笔记本的触控板可以滚动table-head，可能有bug
      if (this.lastScrollLeft !== l) {
        if (e.target === this.$refs['billd-table-scroll-body']) {
          // console.log("左右滚动");
          // this.$refs["billd-table-scroll-body"] &&
          //   (this.$refs["billd-table-scroll-body"].scrollTop = t);
          // normal-head左右滚动
          this.$refs['billd-table-scroll-head'] &&
            (this.$refs['billd-table-scroll-head'].scrollLeft = l);
          // this.$refs["billd-table-scroll-body"] &&
          //   (this.$refs["billd-table-scroll-body"].scrollLeft = l);
        }
        if (e.target === this.$refs['billd-table-scroll-head']) {
          console.log(e.target);
          this.$refs['billd-table-scroll-body'] &&
            (this.$refs['billd-table-scroll-body'].scrollLeft = l);
        }
      }
      // if (e.target == this.$refs["billd-table-scroll-body"]) {
      //   console.log("左右滚动");
      //   this.$refs["billd-table-scroll-body"] &&
      //     (this.$refs["billd-table-scroll-body"].scrollTop = t);
      // }
      // if (e.target == this.$refs["billd-table-scroll-head"]) {
      //   this.$refs["billd-table-scroll-body"] &&
      //     (this.$refs["billd-table-scroll-body"].scrollLeft = l);
      // }
      this.lastScrollTop = t; // 记录最后的上下滚动距离
      this.lastScrollLeft = l; // 记录最后的左右滚动距离
      // console.log("tttttttttttt", t);

      // this.normalScrolling = false;
    },
    // 第一个参数是插槽名，第二个参数是当前行数据，第三个参数是render函数。
    tempRender(name, row, dom) {
      const VNode = dom(this.$createElement, row);
      this.$slots[name] = VNode;
    },
  },
};
</script>

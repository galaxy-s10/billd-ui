import './style/index.js';
// import "../../../dist/switch/style/index.css";
import { getScrollBarWidth } from '../utils/common';

export default {
  inheritAttrs: false,
  props: {
    rowKey: {
      type: String,
      default: undefined,
    },
    bordered: {
      type: Boolean,
    },
    sourceData: {
      type: Array,
      default() {
        return [];
      },
    },
    rowSelection: {
      type: Object,
      default() {
        return {};
      },
    },
    // columns: {
    //   type: Array,
    //   default: function () {
    //     return []
    //   }
    // },
  },
  render() {
    return (
      <div
        class={{ 'hss-table': true, border: this.bordered }}
        style="width:810px;">
        <div class="table-scroll">
          <div
            class="h-table-header h-hide-scrollbar"
            style={{
              overflow: 'scroll',
              marginBottom: `-${this.scrollBarWidth}px`,
            }}
            ref="h-table-scroll-head"
            vOn:scroll_self={(e) => this.normalScroll(e)}>
            <table
              style={{ width: this.scroll.x ? `${this.scroll.x}px` : '100%' }}>
              <colgroup>
                {this.rowSelection.type && (
                  <col class="hss-table-selection-col" />
                )}
                {this.columns.map((item, index) => (
                  <col
                    key={item.key}
                    column-key={this.getColumnKey(item) || index}
                    style={{
                      minWidth: `${item.width}px`,
                      width: `${item.width}px`,
                    }}
                  />
                ))}
              </colgroup>
              <thead class="hss-table-thead">
                <tr>
                  <th>
                    <div
                      class="hss-checkbox"
                      vOn:click={() => this.onSelectAll()}>
                      <input
                        type="checkbox"
                        class={{
                          'hss-checkbox-input': true,
                          'hss-checkbox-checked': this.tableIsSelectAll,
                        }}
                        vModel={this.tableIsSelectAll}
                      />
                      {/* <!-- 当已选择的数据数组长度等于所有数据减去交集数组长度，即代表全选 --> */}
                      <span
                        class={{
                          'hss-checkbox-inner': true,
                          'none-selected':
                            this.selectedList.length -
                              this.intersection.length ===
                            0,
                          'no-all':
                            !(
                              this.selectedList.length -
                                this.intersection.length ===
                              0
                            ) &&
                            this.selectedList.length !== 0 &&
                            this.selectedList.length < this.sourceData.length,
                        }}></span>
                    </div>
                  </th>
                  {this.columns.map((item, index) => (
                    <th
                      key={index}
                      column-key={this.getColumnKey(item) || index}
                      style={{
                        'text-align': item.align ? item.align : 'left',
                      }}>
                      {item.title}
                    </th>
                  ))}
                </tr>
              </thead>
            </table>
          </div>
          <div
            class="h-table-body h-table-scroll-body"
            style={{ overflow: 'scroll', maxHeight: `${this.scroll.y}px` }}
            ref="h-table-scroll-body"
            vOn:scroll_self={(e) => this.normalScroll(e)}>
            <table
              style={{ width: this.scroll.x ? `${this.scroll.x}px` : '100%' }}>
              <colgroup>
                {this.rowSelection.type && (
                  <col class="hss-table-selection-col" />
                )}
                {this.columns.map((item, index) => (
                  <col
                    key={index}
                    column-key={this.getColumnKey(item) || index}
                    style={{
                      minWidth: `${item.width}px`,
                      width: `${item.width}px`,
                    }}
                  />
                ))}
              </colgroup>
              <tbody class="hss-table-tbody" ref="hss-table-tbody">
                {this.sourceData.map((rowItem, rowIndex) => (
                  <tr
                    class={{ hovertr: rowIndex === this.nowTr }}
                    key={this.sourceData[rowIndex][this.getRowKey(rowItem)]}
                    row-key={this.sourceData[rowIndex][this.getRowKey(rowItem)]}
                    vOn:mouseenter={(e) => this.mouseEnter(e, rowIndex)}
                    vOn:mouseleave={(e) => this.mouseLeave(e)}>
                    <td>
                      <div
                        class={{
                          'hss-checkbox': true,
                          'hss-checkbox-disabled':
                            this._getCheckboxProps(rowItem).disabled,
                        }}
                        vOn:click={(e) =>
                          this.onSelect(rowItem, this.isSelected(rowItem), e)
                        }>
                        <input
                          type="checkbox"
                          class={{
                            'hss-checkbox-input': true,
                            'hss-checkbox-checked': this.isSelected(rowItem),
                            'hss-checkbox-disabled':
                              this._getCheckboxProps(rowItem).disabled,
                          }}
                          disabled={this._getCheckboxProps(rowItem).disabled}
                          value={rowItem}
                          vModel={this.selectedList}
                        />
                        {/* <!-- <input type="checkbox" disabled> --> */}
                        <span class={{ 'hss-checkbox-inner': true }}></span>
                      </div>
                    </td>
                    {this.columns.map((columnsItem, columnsIndex) => (
                      <td
                        key={this.getColumnKey(columnsItem) || columnsIndex}
                        row-key={this.getColumnKey(columnsItem) || columnsIndex}
                        class={{ ellipsis: columnsItem.ellipsis }}
                        style={{
                          'text-align': columnsItem.align
                            ? columnsItem.align
                            : 'left',
                        }}>
                        {typeof columnsItem.render === 'function'
                          ? this.tempRender(
                              `${columnsItem.dataIndex}-${rowIndex}`,
                              rowItem,
                              columnsItem.render
                            )
                          : ''}
                        {typeof columnsItem.render === 'function'
                          ? this.$slots[`${columnsItem.dataIndex}-${rowIndex}`]
                          : this.getRowData(columnsItem, rowItem)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {this.fixedLeftData.length && (
          <div class="fixed-left">
            <div>
              <table style="min-width:auto">
                <colgroup>
                  {this.rowSelection.type && (
                    <col class="hss-table-selection-col" />
                  )}
                  {this.fixedLeftData.map((item, index) => (
                    <col
                      key={index}
                      column-key={item.column.key || index}
                      style={{
                        minWidth: `${item.column.col.width}px`,
                        width: `${item.column.col.width}px`,
                      }}
                    />
                  ))}
                </colgroup>
                <thead class="hss-table-thead">
                  <tr>
                    <th>
                      <div
                        class="hss-checkbox"
                        vOn:click={() => this.onSelectAll()}>
                        <input
                          type="checkbox"
                          class={{
                            'hss-checkbox-input': true,
                            'hss-checkbox-checked': this.tableIsSelectAll,
                          }}
                          vModel={this.tableIsSelectAll}
                        />
                        {/* <!-- 当已选择的数据数组长度等于所有数据减去交集数组长度，即代表全选 --> */}
                        <span
                          class={{
                            'hss-checkbox-inner': true,
                            'none-selected':
                              this.selectedList.length -
                                this.intersection.length ===
                              0,
                            'no-all':
                              !(
                                this.selectedList.length -
                                  this.intersection.length ===
                                0
                              ) &&
                              this.selectedList.length !== 0 &&
                              this.selectedList.length < this.sourceData.length,
                          }}></span>
                      </div>
                    </th>
                    {this.fixedLeftData.map((item, index) => (
                      <th
                        key={index}
                        column-key={item.column.key || index}
                        style={{
                          'text-align': item.column.col.align
                            ? item.column.col.align
                            : 'left',
                        }}>
                        {item.column.col.title}
                      </th>
                    ))}
                  </tr>
                </thead>
              </table>
            </div>
            <div
              style={{
                marginRight: `-${this.scrollBarWidth}px`,
                marginBottom: `-${this.scrollBarWidth}px`,
              }}>
              <div
                style={{
                  maxHeight: `${this.scroll.y}px`,
                  overflow: 'scroll',
                }}
                ref="h-table-fixed-left-body"
                vOn:scroll_self={(e) => this.normalScroll(e)}>
                <table style="background:white">
                  <colgroup>
                    {this.rowSelection.type && (
                      <col class="hss-table-selection-col" />
                    )}
                    {this.fixedLeftData.map((item, index) => (
                      <col
                        key={item.column.key}
                        column-key={item.column.key || index}
                        style={{
                          minWidth: `${item.column.col.width}px`,
                          width: `${item.column.col.width}px`,
                        }}
                      />
                    ))}
                  </colgroup>
                  <tbody class="hss-table-tbody">
                    {this.sourceData.map((item, index) => (
                      <tr
                        key={this.sourceData[index][this.getRowKey(item)]}
                        row-key={this.sourceData[index][this.getRowKey(item)]}
                        style={{
                          height: `${this.trList[index]}px` || 'auto',
                        }}
                        class={{ hovertr: index === this.nowTr }}
                        vOn:mouseenter={(e) => this.mouseEnter(e, index)}
                        vOn:mouseleave={(e) => this.mouseLeave(e)}>
                        <td>
                          <div
                            class={{
                              'hss-checkbox': true,
                              'hss-checkbox-disabled': this._getCheckboxProps(
                                this.fixedLeftData[0].data[index]
                              ).disabled,
                            }}
                            vOn:click={(e) =>
                              this.onSelect(
                                this.fixedLeftData[0].data[index],
                                this.isSelected(
                                  this.fixedLeftData[0].data[index]
                                ),
                                e
                              )
                            }>
                            <input
                              type="checkbox"
                              class={{
                                'hss-checkbox-input': true,
                                'hss-checkbox-checked': this.isSelected(
                                  this.fixedLeftData[0].data[index]
                                ),
                                'hss-checkbox-disabled': this._getCheckboxProps(
                                  this.fixedLeftData[0].data[index]
                                ).disabled,
                              }}
                              disabled={
                                this._getCheckboxProps(
                                  this.fixedLeftData[0].data[index]
                                ).disabled
                              }
                              value={this.fixedLeftData[0].data[index]}
                              vModel={this.selectedList}
                            />
                            <span class={{ 'hss-checkbox-inner': true }}></span>
                          </div>
                        </td>
                        {this.fixedLeftData.map((col, colIndex) => (
                          <td
                            key={col.column.key || colIndex}
                            column-key={col.column.key || colIndex}
                            style={{
                              'text-align': col.column.col.align
                                ? col.column.col.align
                                : 'left',
                            }}>
                            {typeof col.column.col.render === 'function'
                              ? this.tempRender(
                                  `fixed-left-${col.column.col.dataIndex}-${colIndex}-${index}`,
                                  col.data[index],
                                  col.column.col.render
                                )
                              : ''}
                            {typeof col.column.col.render === 'function'
                              ? this.$slots[
                                  `fixed-left-${col.column.col.dataIndex}-${colIndex}-${index}`
                                ]
                              : this.getRowData(
                                  col.column.col,
                                  col.data[index]
                                )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {this.fixedRightData.length && (
          <div class="fixed-right">
            <div>
              <table style="min-width:auto">
                <colgroup>
                  {this.fixedRightData.map((item, index) => (
                    <col
                      key={item.column.key}
                      column-key={item.column.key || index}
                      style={{
                        minWidth: `${item.column.col.width}px`,
                        width: `${item.column.col.width}px`,
                        color: 'red',
                      }}
                    />
                  ))}
                </colgroup>
                <thead class="hss-table-thead">
                  <tr>
                    {this.fixedRightData.map((item, index) => (
                      <th
                        key={item.column.key || index}
                        column-key={item.column.key || index}
                        style={{
                          'text-align': item.column.col.align
                            ? item.column.col.align
                            : 'left',
                        }}>
                        {item.column.col.title}
                      </th>
                    ))}
                  </tr>
                </thead>
              </table>
            </div>
            <div
              style={{
                maxHeight: `${this.scroll.y}px`,
                overflow: 'scroll',
                marginBottom: `-${this.scrollBarWidth}px`,
              }}
              ref="h-table-fixed-right-body"
              vOn:scroll_self={(e) => this.normalScroll(e)}>
              <table>
                <colgroup>
                  {this.fixedRightData.map((item, index) => (
                    <col
                      key={item.column.key || index}
                      column-key={item.column.key || index}
                      style={{
                        minWidth: `${item.column.col.width}px`,
                        width: `${item.column.col.width}px`,
                      }}
                    />
                  ))}
                </colgroup>
                <tbody class="hss-table-tbody">
                  {this.sourceData.map((item, index) => (
                    <tr
                      key={this.sourceData[index][this.getRowKey(item)]}
                      row-key={this.sourceData[index][this.getRowKey(item)]}
                      style={{ height: `${this.trList[index]}px` || 'auto' }}
                      class={{ hovertr: index === this.nowTr }}
                      vOn:mouseenter={(e) => this.mouseEnter(e, index)}
                      vOn:mouseleave={(e) => this.mouseLeave(e)}>
                      {this.fixedRightData.map((col, colIndex) => (
                        <td
                          key={col.column.key || colIndex}
                          column-key={col.column.key || colIndex}
                          style={{
                            'text-align': col.column.col.align
                              ? col.column.col.align
                              : 'left',
                          }}>
                          {typeof col.column.col.render === 'function'
                            ? this.tempRender(
                                `fixed-right-${col.column.col.key}-${colIndex}-${index}`,
                                col.data[index],
                                col.column.col.render
                              )
                            : ''}
                          {typeof col.column.col.render === 'function'
                            ? this.$slots[
                                `fixed-right-${col.column.col.key}-${colIndex}-${index}`
                              ]
                            : this.getRowData(col.column.col, col.data[index])}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  },
  data() {
    return {
      // rowKey: "idd",
      // bordered: true,
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
      // fixedLeft: [],
      // fixedRight: [],
      fixedLeftData: [],
      fixedRightData: [],
      allData: {},
      defaultCheckedList: [],
      defaultDisabledList: [],
      // defaultCheckedList: [200],
      // defaultDisabledList: [100, 200],
      intersection: [], // 交集
      union: [], // 并集
      difference: [], // 差集
      columns: this.$attrs.columns,
    };
  },
  watch: {
    selectedList(newVal, oldVal) {
      // console.log(newVal, oldVal);
      newVal.length === this.sourceData.length &&
        (this.tableIsSelectAll = true);
      // let key = this.getRowKey()
      const newSelectedRowKeys = newVal.map(
        (v) =>
          // console.log(v, "vv");
          v.key
      );
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
      return (v) =>
        // console.log(v);
        // console.log(this.$refs);
        // console.log(Object.keys(this.$refs).length, 9999);
        // console.log(this.$refs['hss-table-tbody']);
        `${100}px`;
    },
  },
  created() {
    // 初始化
    this.initTable();
  },
  mounted() {
    // 同步行高
    this.asyncRowHeight();
    console.log('同步行高', getScrollBarWidth());
    // 设置滚动条高度
    this.scrollBarWidth = getScrollBarWidth();
  },
  methods: {
    initTable() {
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
    _getCheckboxProps(rowItem) {
      // console.log(rowItem,'============');
      const prop = this.rowSelection.getCheckboxProps(rowItem);
      if (prop.disabled) {
        // console.log(
        //   "这个默认是disabled",
        //   this.getRowKey(rowItem),
        //   prop,
        //   rowItem
        // );
        // 防止无限更新You may have an infinite update loop in a component render function.
        this.defaultDisabledList.indexOf(rowItem[this.getRowKey(rowItem)]) ===
          -1 && this.defaultDisabledList.push(rowItem[this.getRowKey(rowItem)]);
      } else if (prop.defaultChecked) {
        // console.log('这个默认是defaultChecked',prop,rowItem);
        this.defaultCheckedList.indexOf(rowItem[this.getRowKey(rowItem)]) ===
          -1 && this.defaultCheckedList.push(rowItem[this.getRowKey(rowItem)]);
      }
      return prop;
    },
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
      // console.log(this.$refs["hss-table-tbody"].children);
      const tr = this.$refs['hss-table-tbody'].children;
      const trList = [];
      for (let i = 0; i < tr.length; i += 1) {
        // console.log(tr[i], tr[i].offsetHeight, '====================');
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
      if (e.target === this.$refs['h-table-scroll-head']) {
        // console.log(e.target);
      }
      const l = e.target.scrollLeft;
      const t = e.target.scrollTop;
      if (this.lastScrollTop !== t) {
        if (e.target === this.$refs['h-table-scroll-body']) {
          // this.$refs["h-table-scroll-body"] &&
          //   (this.$refs["h-table-scroll-body"].scrollTop = t);
          // if (!this.fixedScrolling) {
          this.$refs['h-table-fixed-left-body'] &&
            (this.$refs['h-table-fixed-left-body'].scrollTop = t);
          this.$refs['h-table-fixed-right-body'] &&
            (this.$refs['h-table-fixed-right-body'].scrollTop = t);
        }
        if (e.target === this.$refs['h-table-fixed-left-body']) {
          // console.log(e.target);
          this.$refs['h-table-fixed-right-body'] &&
            (this.$refs['h-table-fixed-right-body'].scrollTop = t);
          this.$refs['h-table-scroll-body'] &&
            (this.$refs['h-table-scroll-body'].scrollTop = t);
        }
        if (e.target === this.$refs['h-table-fixed-right-body']) {
          // console.log(e.target);
          this.$refs['h-table-fixed-left-body'] &&
            (this.$refs['h-table-fixed-left-body'].scrollTop = t);
          this.$refs['h-table-scroll-body'] &&
            (this.$refs['h-table-scroll-body'].scrollTop = t);
        }
      }
      // 虽然table-head不可见，鼠标滚动不了，但笔记本的触控板可以滚动table-head，可能有bug
      if (this.lastScrollLeft !== l) {
        if (e.target === this.$refs['h-table-scroll-body']) {
          // console.log("左右滚动");
          // this.$refs["h-table-scroll-body"] &&
          //   (this.$refs["h-table-scroll-body"].scrollTop = t);
          // normal-head左右滚动
          this.$refs['h-table-scroll-head'] &&
            (this.$refs['h-table-scroll-head'].scrollLeft = l);
          // this.$refs["h-table-scroll-body"] &&
          //   (this.$refs["h-table-scroll-body"].scrollLeft = l);
        }
        if (e.target === this.$refs['h-table-scroll-head']) {
          console.log(e.target);
          this.$refs['h-table-scroll-body'] &&
            (this.$refs['h-table-scroll-body'].scrollLeft = l);
        }
      }
      // if (e.target == this.$refs["h-table-scroll-body"]) {
      //   console.log("左右滚动");
      //   this.$refs["h-table-scroll-body"] &&
      //     (this.$refs["h-table-scroll-body"].scrollTop = t);
      // }
      // if (e.target == this.$refs["h-table-scroll-head"]) {
      //   this.$refs["h-table-scroll-body"] &&
      //     (this.$refs["h-table-scroll-body"].scrollLeft = l);
      // }
      this.lastScrollTop = t; // 记录最后的上下滚动距离
      this.lastScrollLeft = l; // 记录最后的左右滚动距离
      // console.log("tttttttttttt", t);

      // this.normalScrolling = false;
    },
    // 第一个参数是插槽名，第二个参数是当前行数据，第三个参数是render函数。
    tempRender(name, row, dom) {
      const VNode = dom.call(this, this.$createElement, row);
      // console.log(VNode,'VNodeVNodeVNode');
      this.$slots[name] = VNode;
    },
  },
};

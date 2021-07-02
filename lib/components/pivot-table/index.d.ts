import { Vue } from "vue-property-decorator";
export default class ReportPivotTable extends Vue implements H3.PivotTable.Table {
    refresh: boolean;
    columns: Array<H3.Report.FieldColumn>;
    rows: Array<H3.Report.FieldColumn>;
    metric: Array<H3.Report.FieldColumn>;
    alias: any;
    isNo: boolean;
    allowDrag: boolean;
    height: number;
    width: number;
    data: H3.PivotTable.Data;
    fixedColHead: boolean;
    fixedRowHead: boolean;
    uid: string;
    title: string;
    fontColor: string;
    columnsSetting: Array<H3.PivotTable.columnSetting>;
    setTableExportData: Function;
    prefixCls: string;
    isMobile: boolean;
    bodyHeight: number;
    bodyWScroll: any;
    summary: Array<number>;
    bodyRows: Array<any>;
    tableColumns: Array<any>;
    tableColumnsWidths: Array<number>;
    tableRows: Array<any>;
    headerRows: Array<any>;
    footerRows: Array<any>;
    fixedWidth: number;
    tableWidth: number;
    fullScreen: boolean;
    loaded: boolean;
    dragLine: any;
    dragOptions: any;
    mapColumnsWidth: {
        [key: string]: number;
    };
    innerColumnsSetting: any;
    averageWidth: number;
    wrapWidth: number;
    render(): any;
    watchRefresh(): void;
    watchData(): void;
    /**
     * 监听序号变化
     */
    watchIsNo(): void;
    /**
     * 下传是否有序号
     */
    get showOrderNo(): boolean;
    get getTableClass(): {
        [x: string]: boolean;
    };
    /**
     * 设置表格样式
     */
    get getTableStyle(): {
        width: string;
        color: string;
    };
    get getTableColumns(): any[];
    get getTableRows(): any[];
    get getColumns(): H3.Report.FieldColumn[];
    get getFixedLeftWidth(): number;
    /**
     * 刷新透视表
     */
    refreshTable(): void;
    /**
     * 获取表体高度
     */
    getBodyHeight(): void;
    setFixedWidth(width: number): void;
    setTableWidth(width: number): void;
    /**
     * 监听表体滚动
     */
    bodyScroll(bodyScroll: any): void;
    /**
     * 初始化位置,及可拖动范围
     * @param container 外层容器
     * @param option 拖拽列表传出的属性
     */
    initDragOptions(container: any, option: any): {
        cur: number;
        min: number;
        max: number;
        cellW: any;
        wrapLeft: number;
        option: any;
    };
    /**
     * 拖拽列宽开始
     */
    startDrag(option: {
        e: Event;
        row: any;
    }): void;
    /**
     * 列宽拖拽中
     */
    dragMousemove(e: any): void;
    /**
     * 列宽拖拽结束
     */
    dragMouseup(e: any): void;
    /**
     * 初始化数据
     */
    initData(): void;
    initTableData(): void;
    /**
     * 列宽自适应
     * @param option
     */
    columnAdaptSize(option: {
        e: Event;
        row: H3.list.TitleOptions;
    }): void;
    /**
     * 处理图表列宽
     */
    handleColumnsWidth(): void;
    /**
     * 设置数据格式
     * @param value
     * @param index
     */
    setNumberFormat(value: any, index: number): any;
    /**
     * 获取一行的行维度的筛选条件
     */
    getRowsFilters(options: any): Array<H3.Report.FilterFieldColumn>;
    /**
     * 获取一列的行维度筛选条件
     */
    getColumnFilters(cellIndex: number): Array<H3.Report.FilterFieldColumn>;
    /**
     *  针对头部尾部的点击筛选
     * @param cellIndex
     * @param rowIndex
     * @param type
     */
    getColumnOtherFilters(cellIndex: number, rowIndex: number, type: string): Array<H3.Report.FilterFieldColumn>;
    /**
     *  单元格点击事件
     * @param options
     */
    cellClick(options: any): void;
    mounted(): void;
}

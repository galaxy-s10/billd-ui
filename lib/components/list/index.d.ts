import { Vue } from "vue-property-decorator";
export default class ReportList extends Vue {
    datasource: Array<any>;
    alias: any;
    columns: Array<H3.Report.FieldColumn>;
    columnsSetting: Array<H3.List.columnSetting>;
    staticColumn: number;
    orderNumber: H3.Report.OrderNumber;
    refresh: boolean;
    total: number;
    freezeHead: H3.Report.FreezeHead;
    fontColor: string;
    allowDrag: string;
    onFreezeHeadChange(val: any): void;
    ondataChange(val: any): void;
    render(): any;
    prefixCls: string;
    pageParams: H3.List.pageOptions;
    sortColumn: Array<H3.List.SortHeadOptions>;
    staticSortColumn: Array<H3.List.SortHeadOptions>;
    height: number;
    headScrollLeft: number;
    headScrollTop: number;
    averageWidth: number;
    isPc: boolean;
    innerDatasource: Array<any>;
    dragLine: any;
    dragOptions: any;
    innerColumnsSetting: Array<H3.List.columnSetting>;
    mapColumnsWidth: {
        [key: string]: number;
    };
    wrapWidth: number;
    get allowDragColumn(): string;
    /**
     * 固定的头部的滚动距离样式
     */
    get staticHeadStyle(): {
        transform: string;
        color: string;
    };
    /**
     * 固定的表格标题部分
     */
    get staticBodyStyle(): {
        transform: string;
        color: string;
    };
    /**
     * 分层格式化表头渲染信息 目前业务最多只有两层表头 todo: 多层表头循环
     */
    get formatColumns(): any[][];
    /**
     * 分层格式化表头渲染信息 目前业务最多只有两层表头 todo: 多层表头循环
     */
    get staticFormatColumns(): any[][];
    /**
     * 滑动面板的样式
     */
    get scrollStyle(): {
        height: string;
    };
    /**
     * 筛选可显示的字段
     */
    get visibleColumns(): H3.Report.FieldColumn[];
    /**
     * 计算固定列的宽度
     */
    get staticStyle(): {
        overflow: string;
        width: string;
    };
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
    startDrag(option: any): void;
    /**
     * 列宽拖拽中
     */
    dragMousemove(e: any): void;
    /**
     * 列宽拖拽结束
     */
    dragMouseup(e: any): void;
    /**
     *  计算列表配置信息
     */
    countColumns(targetColumns: Array<any>): {
        key: any;
        width: number;
        needAlias: any;
        options: any;
        type: any;
    }[];
    /**
     * 格式化表头配置信息
     * @param  targetColumns  列
     * @param  isAdapt  是否自适应
     */
    calculateHead(targetColumns?: Array<any>, isAdapt?: boolean): Array<H3.List.SortHeadOptions>;
    /**
     * 计算渲染的表头信息
     */
    calcuateColumns(targetColumns?: Array<any>): any[][];
    /**
     * 虚拟dom计算宽度
     * @param option
     * @param isSerialNum 是否是序号列
     * @param isOriginal 是否求原始值
     */
    virtualDom(option: any, isSerialNum?: boolean, isOriginal?: boolean): number;
    /**
     * 面板滚动
     * @param e 滚动event
     */
    scroll(e: any): void;
    /**
     * 初始化列表样式
     */
    initList(): void;
    /**
     * 列宽自适应
     * @param option
     */
    columnAdaptSize(option: any): void;
    /**
     * 过滤不存在的字段
     */
    handleColumns(): void;
    /**
     * 更新分页数据
     */
    changePage(params: H3.List.pageOptions): void;
    getterTotal(total: any): string;
    /**
     * 下钻
     */
    drillDown(data: any): void;
    /**
     * 格式化数值格式
     */
    formateNumber(value: number | string | Array<number | string>, NumberFormat: H3.Report.NumberFormat): any;
    /**
     * 格式化日期
     */
    formatDate(value: string | Array<string>, dateFormat: H3.Report.DateFormat): any;
    /**
     * 处理数据
     */
    handleData(): void;
    created(): void;
    mounted(): void;
}

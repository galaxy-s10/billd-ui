import { Vue } from 'vue-property-decorator';
export default class ReportTable extends Vue implements H3.Table {
    columns: Array<H3.TableColumns>;
    data: Array<any>;
    summary: boolean | Function;
    height: number;
    width: number;
    gutterWidth: number;
    prefixCls: string;
    gutter: boolean;
    tableId: string;
    bodyWScroll: any;
    columnsWidth: Array<number>;
    columnsIds: Array<string>;
    headerWidth: number;
    requestID: number;
    bodyHeight: number;
    timer: number;
    summaryObj: {
        [key: string]: number;
    };
    render(): any;
    /**
     * 设置表格样式
     */
    get getTableStyle(): {
        width: string;
    };
    /**
     * 获取表体高度
     */
    getBodyHeight(): number;
    /**
     * 设置预留排线是否显示
     */
    setGutterSate(state: boolean): void;
    /**
     * 监听表体滚动
     */
    bodyScroll(bodyScroll: any): void;
    /**
     * 监听表格宽度变化
     */
    addTableSizeChangeEvent(): void;
    /**
     * 获取行宽度
     */
    getColumnsWidth(): Array<number>;
    created(): void;
    updated(): void;
    mounted(): void;
    destroy(): void;
}

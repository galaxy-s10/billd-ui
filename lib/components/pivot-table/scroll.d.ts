import { Vue } from "vue-property-decorator";
export default class ReportPivotTableScroll extends Vue implements H3.PivotTable.TableScroll {
    prefixCls: string;
    alias: any;
    tableColumnsWidths: Array<number>;
    tableColumns: Array<any>;
    bodyRows: Array<any>;
    summary: Array<any>;
    height: number;
    columns: Array<H3.Report.FieldColumn>;
    metric: Array<H3.Report.FieldColumn>;
    fix: string;
    scrollTop: number;
    fixedColHead: boolean;
    showOrderNo: boolean;
    tableRows: Array<Array<string>>;
    rows: Array<H3.Report.FieldColumn>;
    fullScreen: boolean;
    allowDrag: boolean;
    y: number;
    index: number;
    rowIndex: number;
    innerData: Array<any>;
    data: Array<any>;
    rowNum: number;
    columnsLen: number;
    render(): any;
    staticCellHeight: number;
    watchData(): void;
    watchScrollTop(top: any): void;
    watchFullScreen(): void;
    /**
     * 拖拽列宽
     */
    startDrag(option: {
        e: Event;
        row: any;
    }): void;
    setInnerData(pre: number, next: number): void;
    setSplice(y: any): void;
    scroll(e: any): void;
    /**
     * 双击格子自适应
     */
    columnAdaptSize(e: any): void;
    toogleScreen(): void;
}

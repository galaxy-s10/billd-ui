import { CreateElement, VNode } from "vue";
import TableMixin from "./mixin";
declare const ReportPivotTableBody_base: import("vue-class-component/lib/declarations").VueClass<TableMixin>;
export default class ReportPivotTableBody extends ReportPivotTableBody_base {
    innerData: Array<any>;
    data: Array<any>;
    index: number;
    alias: any;
    rowIndex: number;
    rowNum: number;
    columnsLen: number;
    columns: Array<H3.Report.FieldColumn>;
    metric: Array<H3.Report.FieldColumn>;
    prefixCls: string;
    tableColumnsWidths: Array<number>;
    summary: Array<any>;
    fixedColHead: boolean;
    showOrderNo: boolean;
    tableRows: Array<Array<string>>;
    rows: Array<H3.Report.FieldColumn>;
    cellClick: Function;
    staticCellHeight: number;
    render(h: CreateElement): VNode;
}
export {};

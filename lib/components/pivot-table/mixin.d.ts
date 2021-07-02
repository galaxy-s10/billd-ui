import { Vue } from "vue-property-decorator";
export default class TableMixin extends Vue {
    alias: any;
    tableRows: Array<Array<string>>;
    rows: Array<H3.Report.FieldColumn>;
    allowDrag: boolean;
    cellClick: Function;
    /**
     * 创建表格
     * @param h
     * @param allowDrag
     */
    makeHead(h: any, allowDrag?: boolean): any;
    /**
     * 拖拽
     */
    startDrag(e: any, row: any): void;
    /**
     * 双击格子自适应
     */
    dblclick(e: any, row: any): void;
}

import { Vue } from "vue-property-decorator";
export default class ReportListHead extends Vue {
    column: any;
    sortColumn: Array<any>;
    allowDrag: string;
    prefixCls: string;
    get tableWidth(): string;
    render(): any;
    /**
    * 拖拽
    */
    startDrag(e: any, row: any): void;
    /**
     * 双击格子自适应
     */
    dblclick(e: any, row: any): void;
}

import { Vue } from "vue-property-decorator";
export default class ReportListBody extends Vue {
    datasource: any;
    sortColumn: Array<any>;
    alias: any;
    pageParams: H3.List.pageOptions;
    prefixCls: string;
    staticCellHeight: number;
    render(): void;
    /**
     * 动态计算表格的宽度
     */
    get tableWidth(): string;
    /**
     * 序号前缀
     */
    get prefixSerial(): number;
    /**
     * 动态计算表格每一行的最大行数
     */
    get maxClomns(): Array<number>;
    /**
     * 计算单元格高度和行高
     */
    calculateCellStyle(index: any, value: any): {
        height: string;
        "line-height": string;
    };
    /**
     * 点击单元格
     */
    clickField(data: any): void;
    mounted(): void;
}

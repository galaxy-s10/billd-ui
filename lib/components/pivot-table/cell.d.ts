import { Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue';
export default class ReportTableCell extends Vue {
    data: any;
    field: H3.Report.FieldColumn;
    row: any;
    rowIndex: number;
    index: number;
    formatter: Function;
    /**
     * 获取单元格数据集
     */
    getCellData(data: any): {
        data: any;
        field: H3.Report.FieldColumn;
        row: any;
        rowIndex: number;
        index: number;
    };
    render(h: CreateElement): import("vue").VNode;
}

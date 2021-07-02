import { Vue } from 'vue-property-decorator';
export default class ReportTableScroll extends Vue implements H3.TableBody {
    columnsWidth: Array<number>;
    columnsIds: Array<string>;
    columns: Array<H3.TableColumns>;
    data: Array<any>;
    prefixCls: string;
    height: number;
    y: number;
    index: number;
    rowIndex: number;
    innerData: any[];
    render(): any;
    scroll(e: any): void;
}

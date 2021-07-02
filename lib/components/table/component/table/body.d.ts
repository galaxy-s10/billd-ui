import { Vue } from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';
export default class ReportTableBody extends Vue {
    innerData: Array<any>;
    index: number;
    rowIndex: number;
    columnsIds: Array<string>;
    columns: Array<H3.TableColumns>;
    columnsWidth: Array<number>;
    prefixCls: string;
    render(h: CreateElement): VNode;
}

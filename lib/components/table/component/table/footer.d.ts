import { Vue } from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';
export default class ReportTableFooter extends Vue implements H3.TableHeader {
    columnsWidth: Array<number>;
    columnsIds: Array<string>;
    columns: Array<H3.TableColumns>;
    summaryObj: {
        [key: string]: number;
    };
    prefixCls: string;
    scrollLeft: number;
    gutter: boolean;
    gutterWidth: number;
    watchScrollLeft(): void;
    render(h: CreateElement): VNode;
}

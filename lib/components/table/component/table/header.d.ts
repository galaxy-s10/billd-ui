import { Vue } from 'vue-property-decorator';
import { CreateElement, VNode } from 'vue';
export default class ReportTable extends Vue implements H3.TableHeader {
    columnsWidth: Array<number>;
    columnsIds: Array<string>;
    columns: Array<H3.TableColumns>;
    prefixCls: string;
    scrollLeft: number;
    gutter: boolean;
    gutterWidth: number;
    watchScrollLeft(): void;
    render(h: CreateElement): VNode;
}

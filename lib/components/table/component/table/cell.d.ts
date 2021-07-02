import { Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue';
export default class ReportTableCell extends Vue {
    data: any;
    row: any;
    index: number;
    formatter: Function;
    render(h: CreateElement): import("vue").VNode;
}

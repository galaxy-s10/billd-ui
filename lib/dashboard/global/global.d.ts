import { Vue } from "vue-property-decorator";
export default class ReportModels extends Vue {
    title: H3.Report.Chart;
    global: H3.Report.Global;
    setReportTitle: Function;
    render(): any;
    prefixCls: string;
    change(e: Event): void;
    /**
     * 更新滚动条
     */
    refreshScroll(): void;
    mounted(): void;
    updated(): void;
}

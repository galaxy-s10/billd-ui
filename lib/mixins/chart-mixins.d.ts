import { Vue } from "vue-property-decorator";
export default class TableMixin extends Vue {
    chart: H3.Report.Chart;
    filters: Array<H3.Report.FilterFieldColumn>;
    ifShowTable(chart: H3.Report.Chart): number;
    /**
     * 检测图表
     */
    get checkChart(): number | boolean;
}

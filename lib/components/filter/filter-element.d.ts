import { Vue } from "vue-property-decorator";
import { CreateElement } from "vue";
import "./element/style/css";
export default class SetFilter extends Vue {
    prefixCls: string;
    filter: H3.Report.FilterFieldColumn;
    format: string;
    chartSize?: {
        h: number;
        w: number;
    } | null;
    status?: "design" | "report" | "preview";
    isTiling: boolean;
    isNewFeed: boolean;
    isSingleDate: boolean;
    tmpFilter: any;
    changeChartSize(chartSize: {
        h?: number;
        w?: number;
    }): void;
    /**
     *  值改变
     * @param value
     */
    valueChange(value: any): void;
    /**
     * 生成组件
     */
    generatingComponent(): "SingleRangeDate" | "RangeDate" | "SingleDate" | "RangeInput" | "FilterInput" | "MultiInput";
    render(h: CreateElement): import("vue").VNode;
    mounted(): void;
    created(): void;
}

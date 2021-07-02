import { Vue } from "vue-property-decorator";
import { ReportState } from "../../enum/report-state";
export default class DashboardFullScreen extends Vue {
    element: H3.Report.BaseElement;
    global: H3.Report.Global;
    corpId: string;
    refresh: boolean;
    status: ReportState;
    elementIndex: number;
    render(): any;
    prefixCls: string;
    get fullScreenElement(): any;
    /**
     * 缩小
     */
    narrow(obj: any): void;
    /**
     * 获取全屏图表样式
     */
    get getFullScreenElementStyle(): any;
    /**
     * 获取图表样式
     */
    get getItemStyle(): string;
    /**
     * 获取仪表盘背景色
     */
    get getStyles(): any;
}

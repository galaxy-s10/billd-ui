import { Vue } from "vue-property-decorator";
import { ReportState } from "../../enum/report-state";
export default class ReportContainerHeader extends Vue {
    element: H3.Report.BaseElement;
    global: H3.Report.Global;
    fixed: boolean;
    disabled: boolean;
    status: ReportState;
    render(): any;
    toolbars: H3.Element.ToolsBarType[];
    prefixCls: string;
    buttons: H3.Element.ToolsBar[];
    /**
     * 组件背景颜色设置
     */
    get getStyles(): {
        backgroundColor: any;
    };
    /**
     * 获取工具栏显示按钮
     */
    get toolsButtons(): H3.Element.ToolsBar[];
    /**
     * 获取图表颜色
     */
    get titleColor(): any;
    /**
     * 元件工具栏事件总控
     * @param btn
     */
    clickToolsButton(btn: H3.Element.ToolsBar): void;
    getPopupContainer(): Element;
}

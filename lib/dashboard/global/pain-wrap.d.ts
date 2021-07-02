import { Vue } from "vue-property-decorator";
export default class ReportPaintWrapModule extends Vue {
    global: H3.Report.Global;
    globalModules: H3.ReportModules.GlobalModules;
    render(): any;
    prefixCls: string;
    fontSettingModule: H3.ReportModules.FontSetting;
    /**
     * 获取背景色改变事件
     * @param elementCoat
     */
    elementCoatColorChange(elementCoat: H3.Report.ElementCoat): void;
}

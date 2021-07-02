import ColorMixins from "../mixins/color";
declare const ReportFontSettingModule_base: import("vue-class-component/lib/declarations").VueClass<ColorMixins>;
export default class ReportFontSettingModule extends ReportFontSettingModule_base {
    data: H3.Report.FontSetting;
    chart: H3.Report.Chart;
    module: H3.ReportModules.FontSetting;
    comPrefixCls: string;
    global: H3.Report.Global;
    render(): any;
    resizeChartView: Function;
    prefixCls: string;
    fontColorHandle(): void;
    titleColorHandle(): void;
    /**
     * fontColorChange - change
     * @param value
     */
    fontColorChange(value: string): void;
    /**
     * titleColor - change
     * @param value
     */
    titleColorChange(value: string): void;
}
export {};

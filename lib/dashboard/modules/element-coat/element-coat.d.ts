import ColorMixins from "../mixins/color";
declare const ReportElementCoatModule_base: import("vue-class-component/lib/declarations").VueClass<ColorMixins>;
export default class ReportElementCoatModule extends ReportElementCoatModule_base {
    chart: H3.Report.Chart;
    module: H3.ReportModules.ElementCoat;
    data: H3.Report.ElementCoat;
    comPrefixCls: string;
    global: H3.Report.Global;
    render(): any;
    prefixCls: string;
    moduleRadioOptions: Array<any>;
    get getDefaultColor(): string;
    handleFunction(): void;
    /**
     * 组件背景 - change
     * @param e
     */
    moduleRadioChange(e: any): void;
    /**
     * 组件背景 - color-picker - change
     * @param value
     */
    colorChange(value: string): void;
}
export {};

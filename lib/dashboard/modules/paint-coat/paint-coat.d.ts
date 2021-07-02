import ColorMixins from "../mixins/color";
declare const ReportPaintCoatModule_base: import("vue-class-component/lib/declarations").VueClass<ColorMixins>;
export default class ReportPaintCoatModule extends ReportPaintCoatModule_base {
    global: H3.Report.Global;
    render(): any;
    prefixCls: string;
    radioOptions: Array<any>;
    defaultColor: string;
    pickerDefault: string;
    watchStyles(): void;
    /**
     * clickoutside
     */
    handleFunction(): void;
    /**
     * radio - change
     * @param e
     */
    radioChange(e: any): void;
    /**
     * color-picker - change
     * @param value
     */
    colorChange(value: string): void;
    /**
     * 获取默认颜色
     */
    getDefaultColor(): void;
    created(): void;
}
export {};

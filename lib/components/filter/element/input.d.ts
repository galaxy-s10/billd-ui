import FilterMixins from '../../../mixins/filter-mixins';
declare const ReportElementFilterInput_base: import("vue-class-component/lib/declarations").VueClass<FilterMixins>;
export default class ReportElementFilterInput extends ReportElementFilterInput_base {
    prefixCls: string;
    _inputValue: string;
    render(): any;
    /**
     * 获取输入值
     */
    get inputValue(): any;
    /**
     * 设置输入值
     */
    set inputValue(value: any);
    /**
     * 输入框空状态提示
     */
    get placeholderText(): "请输入数值" | "请输入";
    /**
     * 修改值
     * @param text
     */
    changeText(text: any): void;
    created(): void;
}
export {};

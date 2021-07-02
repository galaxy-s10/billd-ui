import FilterMixins from '../../../mixins/filter-mixins';
declare const ReportElementFilterMultiInput_base: import("vue-class-component/lib/declarations").VueClass<FilterMixins>;
export default class ReportElementFilterMultiInput extends ReportElementFilterMultiInput_base {
    prefixCls: string;
    /**
     * 值改变
     * @value 改变值
     */
    changeText(value: Array<string>): void;
    render(): any;
}
export {};

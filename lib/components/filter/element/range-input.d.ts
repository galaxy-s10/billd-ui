import FilterMixins from '../../../mixins/filter-mixins';
declare const ReportElementFilterRangeInput_base: import("vue-class-component/lib/declarations").VueClass<FilterMixins>;
export default class ReportElementFilterRangeInput extends ReportElementFilterRangeInput_base {
    prefixCls: string;
    _minValue: string;
    _maxValue: string;
    render(): void;
    /**
     * 获取最小值
     */
    get minValue(): any;
    /**
     * 设置最小值
     */
    set minValue(value: any);
    /**
     * 获取最大值
     */
    get maxValue(): any;
    /**
     * 设置最大值
     */
    set maxValue(value: any);
    /**
     * 修改值
     * @param text
     */
    changeText(text: Event, index: number): void;
    created(): void;
}
export {};

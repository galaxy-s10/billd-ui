import { ElementType } from '../../enum/chart-type';
declare class BaseInstance implements H3.Report.BaseElement {
    uid: string;
    title: string;
    type: ElementType;
    i: number;
    x: number;
    y: number;
    w: number;
    h: number;
    minW: number;
    minH: number;
    handleActive: boolean;
    constructor(type: ElementType, oldChart?: H3.Report.BaseElement);
}
/**
 * 富文本实例类
 */
declare class LongTextInstance extends BaseInstance implements H3.Report.LongText {
    edit: boolean;
    content: string;
    minH: number;
    constructor(type: H3.Report.ElementType, oldChart?: H3.Report.LongText);
}
/**
 * 过滤器实例类
 */
declare class FilterInstance extends BaseInstance implements H3.Report.FilterPicker {
    w: number;
    h: number;
    minH: number;
    chartIds: Array<string>;
    dataSources: Array<any>;
    format: string;
    formula: string;
    field: H3.Report.FieldColumn;
    text: Array<string | number | any>;
    constructor(type: H3.Report.ElementType, oldChart?: H3.Report.FilterPicker);
}
/**
 * 图表基础实例类
 */
export default class ChartBaseInstance extends BaseInstance implements H3.Report.Chart {
    resize: boolean;
    data: H3.Report.ChartDataGroup;
    styles: H3.Report.ChartStyleGroup;
    authorization: number;
    dataSourceId: string | null;
    useType: number | null;
    linkageFilter: Array<H3.Report.FilterFieldColumn>;
    filterPicker: {
        [FilterPickerId: string]: Array<H3.Report.FilterFieldColumn>;
    };
    constructor(type: H3.Report.ElementType, oldChart?: H3.Report.Chart);
}
/**
 * 创建元件实例
 * @param elementType 元件类型
 * @param oldElement 旧元件
 */
export declare function createElementInstance(elementType: H3.Report.ElementType, oldElement?: H3.Report.BaseElement): H3.Report.Chart | H3.Report.FilterPicker | H3.Report.LongText;
export { LongTextInstance, FilterInstance, ChartBaseInstance };

import { Vue } from "vue-property-decorator";
export default class ReportSortModule extends Vue {
    prefixCls: string;
    comPrefixCls: string;
    chart: H3.Report.Chart;
    chartType: string;
    render(): any;
    sortList: any[];
    deepCopyChart: any;
    changeData: Array<any>;
    /**
     * 字段类型映射
     * @param uid
     * @param type
     */
    fieldTypeMapping(uid: string, type: string): string;
    /**
     * 透视图排序规则
     * @param i
     */
    tableSortRules(i: number): void;
    /**
     * 非透视图排序规则
     */
    defaultSortRules(i: number): void;
    /**
     * 排序规则
     * @param i
     */
    sortRules(i: number): void;
    /**
     * change事件
     * @param e
     * @param i
     */
    change(e: Event, i: number): void;
    /**
     * 抛出changeDate
     */
    emitDate(): void;
    /**
     * 添加排序类型字段
     * @param data
     * @param type
     */
    addSortType(data: any, type: string): void;
    /**
     * 合并维度、指标数据
     */
    combineData(): void;
    /**
     * 透视图筛选排序数据
     */
    filterTableSortData(): void;
    mounted(): void;
}

import { Vue } from "vue-property-decorator";
export default class ReportSortListModule extends Vue {
    prefixCls: string;
    comPrefixCls: string;
    chart: H3.Report.Chart;
    chartType: string;
    render(): void;
    dragOptions: {
        group: string;
        forceFallback: boolean;
        animation: number;
        touchStartThreshold: number;
        delay: number;
        filter: string;
    };
    renderList: Array<H3.Report.FieldColumn>;
    tempRenderList: Array<H3.Report.FieldColumn>;
    searchKey: string;
    value: Array<H3.Report.FieldColumn>;
    get allFields(): H3.Report.FieldColumn[];
    get allSelect(): boolean;
    get selectedList(): {};
    /**
     * 实际渲染的左侧未添加排序的字段
     */
    get viewList(): H3.Report.FieldColumn[];
    /**
     * 添加全部字段
     */
    addAllFileds(): void;
    /**
     * 添加单个字段
     */
    addSingleFiled(item: any): void;
    /**
     * 删除单独字段
     */
    delectFiled(item: any): void;
    /**
     * 改变单个排序规则
     */
    changeOrder(e: Event, item: H3.Report.FieldColumn): void;
    /**
     * 搜索字段
     */
    searchFiled(e: any): void;
    /**
     * 排序完毕
     */
    sortField(evt: any): void;
    mounted(): void;
}

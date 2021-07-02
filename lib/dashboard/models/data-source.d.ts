import { Vue } from "vue-property-decorator";
export default class ReportDataSource extends Vue {
    chart: H3.Report.Chart;
    dataSource: H3.Report.DataSource;
    setDragField: Function;
    render(): any;
    prefixCls: string;
    authorizationList: {
        label: string;
        value: number;
    }[];
    dragOptions: {
        group: {
            name: string;
            pull: string;
            put: boolean;
        };
        sort: boolean;
        forceFallback: boolean;
        fallbackClass: string;
        fallbackOnBody: boolean;
    };
    get dataSourceFilter(): {
        [key: string]: H3.Report.FieldColumn[];
    };
    getPopupContainer(): Vue | Element | Vue[] | Element[];
    changeAuthorization(e: any): void;
    /**
     * 数据源字段拖动
     */
    fieldDragging(evt: any): void;
    /**
     * 排序结束
     */
    fieldDragEnd(): void;
    fieldClone(field: H3.Report.FieldColumn): any;
    updated(): void;
}

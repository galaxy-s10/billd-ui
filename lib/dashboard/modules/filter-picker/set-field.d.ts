import { Vue } from "vue-property-decorator";
export default class SetFilterField extends Vue {
    dataSourcesList: Array<H3.Report.FilterDataSource>;
    dataSources: {
        [dataSourceId: string]: any;
    };
    prefixCls: string;
    dataSourcesOptions: Array<H3.extendDataSource>;
    dataSourcesShowValue: Array<H3.extendDataSource>;
    activeType?: string;
    classification: Array<any>;
    tmpDataSourcesList: Array<H3.Report.FilterDataSource>;
    render(): any;
    getDataSourcesOptions(newFilterDataSource: Array<H3.Report.FilterDataSource>): void;
    /**
     * 改变筛选字段
     * @param value
     */
    changeField(value: string): void;
}

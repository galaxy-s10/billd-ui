import { Vue } from "vue-property-decorator";
export default class ReportDataSourceModal extends Vue {
    dataSource: H3.ReportAPI.DataSourceNode;
    activeChart: H3.Report.Chart;
    addDataSource: Function;
    prefixCls: string;
    lastDataSourceNode: H3.ReportAPI.DataSourceNode;
    showAdvancedDataSource: boolean;
    setActiveChart: Function;
    getDataSourceList: Function;
    setLastDataSource: Function;
    clearChartRelation: Function;
    render(): any;
    searchValue: string;
    sourceList: Array<H3.ReportAPI.DataSourceNode>;
    loading: boolean;
    mappings: any;
    activeNode: H3.ReportAPI.DataSourceNode | null;
    activeTabKey: any;
    tabOptions: Array<any>;
    /**
     * 当选择完数据源之后
     */
    onSelect(val: any): void;
    search(val: any): void;
    /**
     * 目标数据源
     */
    get targetDatasource(): Array<H3.ReportAPI.DataSourceNode>;
    /**
     * 默认选择的数据源
     */
    get selectedKeys(): string[];
    /**
     * 默认展开选中的数据源的父级
     */
    get expandedKeys(): string[];
    /**
     * 获取需要打开的树节点
     */
    get openKeys(): string[];
    /**
     * old todo delect 获取数据源列表
     */
    get getSourceList(): any;
    /**
     * 表单的应用树形结构
     */
    get formDataSource(): {
        key: string;
        title: string;
        children: any[];
        useType: H3.Report.ChartUseType;
        selectable: boolean;
        isLeaf: boolean;
        scopedSlots: {
            title: string;
        };
    }[];
    /**
     * 获取高级数据源数据
     */
    get advancedDataSource(): {
        key: string;
        title: string;
        children: any[];
        useType: H3.Report.ChartUseType;
        selectable: boolean;
        isLeaf: boolean;
        scopedSlots: {
            title: string;
        };
    }[];
    /**
     * 搜索树
     */
    get searchTree(): {
        key: string;
        title: string;
        children: any[];
        useType: H3.Report.ChartUseType;
        selectable: boolean;
        isLeaf: boolean;
        scopedSlots: {
            title: string;
        };
    }[];
    get renderDatasource(): {
        key: string;
        title: string;
        children: any[];
        useType: H3.Report.ChartUseType;
        selectable: boolean;
        isLeaf: boolean;
        scopedSlots: {
            title: string;
        };
    }[];
    /**
     * 获取tree文件夹
     */
    getParent(list: Array<H3.ReportAPI.DataSourceNode>, rootParent?: boolean): {
        key: string;
        title: string;
        children: any[];
        useType: H3.Report.ChartUseType;
        selectable: boolean;
        isLeaf: boolean;
        scopedSlots: {
            title: string;
        };
    }[];
    /**
     * 获取孩子节点
     */
    getChild(list: Array<H3.ReportAPI.DataSourceNode>, parent?: any): any;
    /**
     * 添加高级数据源
     */
    goToAdd(): void;
    /**
     * 确认替换数据源
     */
    confirmDateSourceChange(callback: Function): void;
    /**
     * 修改数据源信息
     */
    updateDateSource(): void;
    /**
     * 提交检查
     */
    check(): Promise<unknown>;
    /**
     * 滚动到选中的数据源的位置
     */
    scrollToTarget(): void;
    created(): void;
    mounted(): Promise<void>;
}

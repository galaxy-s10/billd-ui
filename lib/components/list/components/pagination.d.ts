import { Vue } from 'vue-property-decorator';
export default class ReportListPagination extends Vue {
    showTotal: Function;
    total: number;
    showSizeChanger: boolean;
    pageSize: Array<number>;
    prefixCls: string;
    pageValue: number;
    pageSizeName: string;
    currentPageSize: number;
    showPageSizePane: boolean;
    /**
     * 最大页数
     */
    get maxPagesize(): number;
    render(): any;
    /**
     * 关闭页输选择器面板
     */
    closePageSize(): void;
    /**
     * 选择页数大小
     */
    selectPageSize(item: any): void;
    /**
     * 改变当前页数
     */
    changePage(e: any): void;
}

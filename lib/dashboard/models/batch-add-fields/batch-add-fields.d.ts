import { Vue } from "vue-property-decorator";
export default class BatchAddFields extends Vue {
    list: Array<H3.Report.FieldColumn>;
    value: Array<H3.Report.FieldColumn>;
    show: boolean;
    max: number;
    render(): void;
    prefixCls: string;
    showModal: boolean;
    searchValue: string;
    checkAll: boolean;
    sourceList: Array<any>;
    searchList: Array<any>;
    get indeterminate(): boolean;
    get renderList(): any[];
    get selectedList(): any[];
    /**
     * 确认回调
     */
    ok(): void;
    /**
     * 取消回调
     */
    cancel(): void;
    /**
     * 搜索框搜索
     */
    search(val: any): void;
    /**
     * 选中值改变
     */
    onChange(e: Event, item: any): void;
    /**
     * 点击全选
     */
    onCheckAllChange(e: any): void;
    created(): Promise<void>;
}

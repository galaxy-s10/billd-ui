import { Vue } from "vue-property-decorator";
export default class SetCondition extends Vue {
    filterPicker: H3.Report.FilterPicker;
    prefixCls: string;
    activeType: "number" | "string" | "date" | string;
    tmpFilterPicker: H3.Report.FilterPicker;
    formatList: Array<{
        label: string;
        value: string;
    }>;
    render(): any;
    changeFilterPicker(newFilterPicker: H3.Report.FilterPicker): void;
    /**
     * 筛选器标题
     * @param value
     */
    titleChange(value: any): void;
    formatChange(value: string): void;
    mounted(): void;
    destroyed(): void;
}

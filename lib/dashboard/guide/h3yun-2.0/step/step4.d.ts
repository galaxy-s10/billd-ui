import { Vue } from "vue-property-decorator";
export default class ReportStep extends Vue {
    global: H3.Report.Global;
    visible: boolean;
    step: number;
    setStep: Function;
    render(): any;
    prefixCls: string;
    filterPrefixCls: string;
    value: boolean;
    parent: Element | null;
    onVisibleChange(val: any): void;
    handleOk(): void;
    handleCancel(): void;
    mounted(): void;
    destroyed(): void;
}

import { Vue } from "vue-property-decorator";
export default class ReportStep extends Vue {
    global: H3.Report.Global;
    visible: boolean;
    setStep: Function;
    prefixCls: string;
    value: boolean;
    parent: Element | null;
    render(): any;
    onVisibleChange(val: any): void;
    handleOk(): void;
    handleCancel(): void;
    mounted(): void;
    destroyed(): void;
}

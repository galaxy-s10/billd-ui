import { Vue } from "vue-property-decorator";
export default class ReportEasyDetail extends Vue {
    prefixCls: string;
    value: boolean;
    title: string;
    options: Array<any>;
    activeIndex: number;
    render(): any;
    /**
     * 点击不同的选项
     */
    onChangeRadio(index: any): void;
    /**
     * 点击确认回调
     */
    handleOk(): void;
    /**
     * 取消回调
     */
    handleCancel(): void;
    /**
     * 更改
     * @param state 更改步骤状态 0 为上一步 1为下一步
     */
    changeStep(state: any): void;
}

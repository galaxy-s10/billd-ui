import { Vue } from "vue-property-decorator";
import "./index.less";
export default class ReportPreviewHeader extends Vue {
    status: string;
    prefixCls: string;
    render(): any;
    /**
     * 退出预览事件
     */
    reportOutPreview(): void;
    /**
     * 修改预览类型
     * @param e
     */
    change(e: any): void;
}

import { Vue } from "vue-property-decorator";
import "./index.less";
export default class ReportPreview extends Vue {
    reportTop: number;
    setFilterPicker: Function;
    setCharts: Function;
    setGlobal: Function;
    setReportTop: Function;
    setObjectId: Function;
    setTitle: Function;
    render(): any;
    prefixCls: string;
    display: boolean;
    status: string;
    layoutOptions: {
        draggable: boolean;
        showGridLine: boolean;
        editState: boolean;
        mask: boolean;
        resizable: boolean;
        responsive: boolean;
    };
    /**
     * 预览展示
     */
    show({ charts, global, top, objectId, title }: {
        charts: any;
        global: any;
        top: any;
        objectId: any;
        title: any;
    }): void;
    /**
     * 关闭预览
     */
    close(): void;
    /**
     * 修改预览类型
     */
    changType(type: "pc" | "mobile"): void;
    /**
     * 关闭预览完毕后销毁
     */
    afterLeave(): void;
    destroyed(): void;
}

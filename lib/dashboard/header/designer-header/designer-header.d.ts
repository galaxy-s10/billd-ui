import { Vue } from "vue-property-decorator";
export default class ReportDesignerHeader extends Vue {
    previewStatus: boolean;
    render(): any;
    corpId: string;
    modules: {
        [key: string]: H3.ReportModules.ChartModules;
    };
    getDataSourceList: Function;
    addElement: Function;
    setDragChart: Function;
    prefixCls: string;
    dragItem: any;
    dragChart: any;
    placement: string;
    chartList: any[];
    moduleToolList: any[];
    addLayoutChart(elementType: H3.Report.ElementType, chartName: string, iconType: string): Promise<void>;
    mousemoveBody(e: MouseEvent): void;
    mouseupBody(e: any): void;
    reportOutPreview(): void;
    reportPreview(): void;
    save(): void;
    getPopupContainer(): Element;
}

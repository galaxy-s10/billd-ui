import { Vue } from "vue-property-decorator";
export default class ReportStep extends Vue {
    global: H3.Report.Global;
    visible: boolean;
    step: number;
    setStep: Function;
    render(): any;
    prefixCls: string;
    dataSourcPrefixCls: string;
    toolsPrefixCls: string;
    isDragging: boolean;
    dragOptions: {
        group: {
            name: string;
            pull: string;
            put: boolean;
        };
        sort: boolean;
        forceFallback: boolean;
        fallbackClass: string;
        fallbackOnBody: boolean;
    };
    dataSource: any;
    dimensionField: Array<any>;
    metricField: Array<any>;
    filterField: Array<any>;
    fieldDragging(evt: any): void;
    /**
     * 排序结束
     */
    fieldDragEnd(evt: any): void;
    fieldClone(field: H3.Report.FieldColumn): void;
    mounted(): void;
    destroyed(): void;
}

import { Vue } from "vue-property-decorator";
export default class ReportPaintCoatThemeModule extends Vue {
    global: H3.Report.Global;
    setDataZoomThemeGrobal: Function;
    prefixCls: string;
    themeList: {
        [key: string]: any;
    };
    defaultSelect: string;
    render(): any;
    /**
     * 监听styles
     */
    watchStyles(val: any): void;
    /**
     * li - click
     * @param item
     * @param index
     */
    liClick(item: any, index: number): void;
    created(): void;
}

import { Vue } from "vue-property-decorator";
export default class ReportGuideEntry extends Vue {
    container: HTMLElement;
    config: H3.Intro.config;
    innerStep: number;
    guide: any;
    render(): any;
    watchConfig(val: any, oldval: any): void;
    /**
     * 开始新手引导
     */
    startUserGuide(step?: number): void;
    /**
     * 步数更改回掉
     */
    changeStep(step: number): void;
    /**
     * 递归去掉层级
     */
    setZindex(): void;
    /**
     * 重置样式层级
     */
    resetZindex(): void;
    mounted(): void;
}

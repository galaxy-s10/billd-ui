import { Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue';
import IntroHelper from '../utils/introjs-helper';
export default class ReportGuide extends Vue {
    step: number;
    container: HTMLElement;
    prefixCls: string;
    introHelper: IntroHelper;
    steps: H3.IntroJsHelper.Step[];
    innerStep: number;
    initStep: number;
    setStep(step: number): void;
    /**
     * 设置其他高光部分
     */
    setExtraHightLight(): void;
    /**
     *
     */
    openIntro(step: number): void;
    /**
     * 退出回掉
     */
    exitCallBack(step: any): void;
    created(): void;
    mounted(): void;
    destroyed(): void;
    render(h: CreateElement): import("vue").VNode;
}

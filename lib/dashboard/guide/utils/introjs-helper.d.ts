export default class IntroHelper {
    intro: any;
    exitCallBack?: Function | null;
    steps: H3.IntroJsHelper.Step[];
    introOption: {
        hasOverlay: boolean;
        showButtons: boolean;
        showStepNumbers: boolean;
        disableInteraction: boolean;
        exitOnOverlayClick: boolean;
        hideHelperLayer: boolean;
        tooltipPosition: string;
        steps: any[];
        stepData: any[];
        showHighLightContent: boolean;
    };
    introManage: any;
    constructor(steps?: any);
    private createIntroBullets;
    /**
     * 创建光标
     * @param rippleOffsetX
     * @param rippleOffsetY
     */
    private createRippleLayer;
    /**
     * 创建高亮部分
     * @param title
     * @param content
     */
    private createHighlightContent;
    /**
     * 创建高亮部分
     * @param content
     */
    private createMainContent;
    /**
     * 设置配置
     * @param elId
     * @param stepText
     * @param text
     * @param popPosition
     * @param step
     * @param options
     * @param textAlign
     */
    private setIntroHelper;
    /**
     * 转到第几步引导
     * @param step
     * @param stepOptions
     */
    goToStep(step: number, stepOptions?: H3.IntroJsHelper.Step): void;
    exit(): void;
}

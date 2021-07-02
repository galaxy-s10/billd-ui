import { Vue } from "vue-property-decorator";
export default class EditInput extends Vue {
    maxWidthValue: number;
    minWidthValue: number;
    inputValue: string;
    inputID: string;
    maxLength: number;
    edit: boolean;
    prefixCls: string;
    handleValue(newVal: any, oldVal: any): void;
    innerValue: string;
    /**
     * tooltip挂载
     */
    getContainer(): HTMLElement;
    /**
     * 输入框input事件
     * @param e
     */
    inputFun(e: any): void;
    /**
     * 输入框焦点事件
     * @param e
     */
    inputFocus(e: any): void;
    /**
     * 输入框失去焦点事件
     * @param e
     */
    inputBlur(e: any): void;
    /**
     * 处理输入框宽度
     */
    handleInputWidth(val?: string): void;
    render(): any;
    mounted(): void;
}

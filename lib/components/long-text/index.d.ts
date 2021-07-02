import { Vue } from "vue-property-decorator";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
export default class LongTextWrap extends Vue {
    chart: H3.Report.LongText;
    global: H3.Report.Global;
    textbbb: String;
    textccc: string;
    textddd: string;
    texteee: number;
    textfff: number;
    status: "design" | "report" | "preview";
    focus?: Function;
    blur?: Function;
    isEdit: boolean;
    prefixCls: string;
    content: string;
    maxLength: number;
    editorOption: any;
    composing: boolean;
    render(): any;
    watchEdit(v: any): void;
    /**
     * 组件背景颜色设置
     */
    get getStyles(): {
        color: string;
    };
    created(): void;
    onEditorFocus(): void;
    onEditorKeyDown(e: any): void;
    onEditorPaste(): void;
    onEditorChange(v: any): void;
    maxLengthLimit(): void;
    onEditorComposeStart(e: any): void;
    onEditorInput(e: any): void;
    onEditorComposeEnd(e: any): void;
    addEditEvent(): void;
    updated(): void;
    mounted(): void;
}

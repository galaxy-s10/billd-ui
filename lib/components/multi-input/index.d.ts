import { Vue } from 'vue-property-decorator';
export default class MultiInput extends Vue {
    items: string[];
    prefixCls: string;
    showIpt: boolean;
    currLen: number;
    maxLen: number;
    tipStart: number;
    render(): any;
    showInput(): void;
    closeInput(): void;
    removeInput(i: any): void;
    onEnter(e: any): boolean;
    onInput(e: any): void;
}

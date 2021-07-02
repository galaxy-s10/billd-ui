import { Vue } from "vue-property-decorator";
export default class ColorSelect extends Vue {
    prefixCls: string;
    value: string;
    colorSize: string;
    colorArray: Array<any>;
    get themes(): any[];
    get innerValue(): string;
    set innerValue(val: string);
    render(): any;
    getPopupContainer(): Element;
    onChange(value: any): void;
}

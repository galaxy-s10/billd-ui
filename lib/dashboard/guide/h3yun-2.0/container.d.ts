import { Vue } from "vue-property-decorator";
import { CreateElement, VNode } from "vue";
export default class ReportGuide extends Vue {
    step: number;
    container: HTMLElement;
    prefixCls: string;
    render(h: CreateElement): VNode;
}

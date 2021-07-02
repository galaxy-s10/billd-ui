import { Vue } from 'vue-property-decorator';
import { CreateElement } from 'vue';
export default class ReportGuide extends Vue {
    step: number;
    container: HTMLElement;
    prefixCls: string;
    innerStep: number;
    mounted(): void;
    render(h: CreateElement): import("vue").VNode;
}

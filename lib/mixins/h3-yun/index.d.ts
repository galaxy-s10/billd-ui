import { Vue } from 'vue-property-decorator';
import './style.less';
export default class H3YunLoginUtils extends Vue {
    prefixCls: string;
    corpId: string;
    reportId: string;
    config: any;
    getCookie(name: string): string;
    setOptions(): void;
    created(): void;
    mounted(): void;
}

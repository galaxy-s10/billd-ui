import { Vue } from "vue-property-decorator";
/**
 * 用法：
 * 1.嵌套使用，例如<backdoor><item></backdoor>，此时点击item即可触发
 * 2.直接使用，例如<backdoor />，此时会绝对定位在页面右下角20*20的区域，点击触发
 */
export default class Backdoor extends Vue {
    prefixCls: string;
    count: number;
    countdown: any;
    canGetVersion: boolean;
    version: string;
    modal: any;
    buildTimestamp: string;
    pomVersion: string;
    showModal: boolean;
    webVersion: string;
    render(): any;
    get hasSlot(): boolean;
    showVersion(): void;
    getVersion(): Promise<unknown>;
    deleteTimeout(): void;
}

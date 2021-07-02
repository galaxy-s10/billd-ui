import { Vue } from "vue-property-decorator";
export default class Backdoor extends Vue {
    prefixCls: string;
    count: number;
    countdown: any;
    canGetVersion: boolean;
    version: string;
    buildTimestamp: string;
    pomVersion: string;
    modal: any;
    get hasSlot(): boolean;
    render(): any;
    showVersion(): void;
    createModalContent(buildTimestamp: any, pomVersion: any, version: any): import("vue").VNode;
    getVersion(): Promise<unknown>;
    deleteTimeout(): void;
}

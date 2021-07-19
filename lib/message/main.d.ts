declare namespace _default {
    namespace props {
        const icon: StringConstructor;
        const msg: StringConstructor;
        const time: NumberConstructor;
    }
    namespace components {
        export { HssIcon };
    }
    function data(): {
        list: any[];
        timerList: any[];
        timerID: number;
        bool: boolean;
    };
    function data(): {
        list: any[];
        timerList: any[];
        timerID: number;
        bool: boolean;
    };
    function render(): any;
    function render(): any;
    const computed: {};
    function created(): void;
    function created(): void;
    function mounted(): void;
    function mounted(): void;
    namespace methods {
        function transition(): any;
        function transition(): any;
        function isVNode(v: any): boolean;
        function isVNode(v: any): boolean;
        function close(v: any): void;
        function close(v: any): void;
        function closeAll(): void;
        function closeAll(): void;
        function handle({ type, icon, content, closeAble, duration }: {
            type: any;
            icon: any;
            content: any;
            closeAble: any;
            duration: any;
        }): void;
        function handle({ type, icon, content, closeAble, duration }: {
            type: any;
            icon: any;
            content: any;
            closeAble: any;
            duration: any;
        }): void;
        function success(v: any): void;
        function success(v: any): void;
        function warning(v: any): void;
        function warning(v: any): void;
        function error(v: any): void;
        function error(v: any): void;
        function info(v: any): void;
        function info(v: any): void;
        function renderDom(slot: any, node: any): void;
        function renderDom(slot: any, node: any): void;
    }
}
export default _default;
import HssIcon from "../icon";

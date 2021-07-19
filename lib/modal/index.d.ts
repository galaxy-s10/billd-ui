declare namespace _default {
    const inheritAttrs: boolean;
    namespace props {
        namespace visible {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
    }
    namespace components {
        export { HFoot };
        export { HVueFragment };
    }
    function data(): {
        modalvisible: any;
    };
    function data(): {
        modalvisible: any;
    };
    namespace watch {
        function visible(newVal: any): void;
        function visible(newVal: any): void;
    }
    namespace model {
        const prop: string;
        const event: string;
    }
    function render(): any;
    function render(): any;
    const computed: {};
    function created(): void;
    function created(): void;
    function mounted(): void;
    function mounted(): void;
    namespace methods {
        function footCancel(): void;
        function footCancel(): void;
        function footConfirm(): void;
        function footConfirm(): void;
        function close(): void;
        function close(): void;
        function maskClose(): void;
        function maskClose(): void;
    }
}
export default _default;
import HFoot from "./foot";
import { Fragment as HVueFragment } from "vue-fragment";

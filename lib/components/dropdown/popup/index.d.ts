declare namespace _default {
    namespace props {
        namespace visible {
            export const type: BooleanConstructor;
            const _default: boolean;
            export { _default as default };
        }
        const openDelay: {};
        const closeDelay: {};
        const zIndex: {};
        namespace modal {
            const type_1: BooleanConstructor;
            export { type_1 as type };
            const _default_1: boolean;
            export { _default_1 as default };
        }
        namespace modalFade {
            const type_2: BooleanConstructor;
            export { type_2 as type };
            const _default_2: boolean;
            export { _default_2 as default };
        }
        const modalClass: {};
        namespace modalAppendToBody {
            const type_3: BooleanConstructor;
            export { type_3 as type };
            const _default_3: boolean;
            export { _default_3 as default };
        }
        namespace lockScroll {
            const type_4: BooleanConstructor;
            export { type_4 as type };
            const _default_4: boolean;
            export { _default_4 as default };
        }
        namespace closeOnPressEscape {
            const type_5: BooleanConstructor;
            export { type_5 as type };
            const _default_5: boolean;
            export { _default_5 as default };
        }
        namespace closeOnClickModal {
            const type_6: BooleanConstructor;
            export { type_6 as type };
            const _default_6: boolean;
            export { _default_6 as default };
        }
    }
    function beforeMount(): void;
    function beforeMount(): void;
    function beforeDestroy(): void;
    function beforeDestroy(): void;
    function data(): {
        opened: boolean;
        bodyPaddingRight: any;
        computedBodyPaddingRight: number;
        withoutHiddenClass: boolean;
        rendered: boolean;
    };
    function data(): {
        opened: boolean;
        bodyPaddingRight: any;
        computedBodyPaddingRight: number;
        withoutHiddenClass: boolean;
        rendered: boolean;
    };
    namespace watch {
        function visible(val: any): void;
        function visible(val: any): void;
    }
    namespace methods {
        function open(options: any): void;
        function open(options: any): void;
        function doOpen(props: any): void;
        function doOpen(props: any): void;
        function doAfterOpen(): void;
        function doAfterOpen(): void;
        function close(): void;
        function close(): void;
        function doClose(): void;
        function doClose(): void;
        function doAfterClose(): void;
        function doAfterClose(): void;
        function restoreBodyStyle(): void;
        function restoreBodyStyle(): void;
    }
}
export default _default;
export { PopupManager };
import PopupManager from "./popup-manager";

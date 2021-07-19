declare namespace _default {
    const inheritAttrs: boolean;
    namespace props {
        namespace rowKey {
            const type: StringConstructor;
        }
        namespace bordered {
            const type_1: BooleanConstructor;
            export { type_1 as type };
        }
        namespace sourceData {
            const type_2: ArrayConstructor;
            export { type_2 as type };
            function _default(): any[];
            export { _default as default };
        }
        namespace rowSelection {
            const type_3: ObjectConstructor;
            export { type_3 as type };
            function _default_1(): {};
            export { _default_1 as default };
        }
    }
    function render(): any;
    function render(): any;
    function data(): {
        lastScrollTop: number;
        lastScrollLeft: number;
        fixedScrolling: boolean;
        normalScrolling: boolean;
        scrollBarWidth: number;
        selectedIndex: any[];
        selectedList: any[];
        canSelected: any[];
        nowTr: number;
        trList: any[];
        scroll: {
            x: number;
            y: number;
        };
        fixedLeftData: any[];
        fixedRightData: any[];
        allData: {};
        defaultCheckedList: any[];
        defaultDisabledList: any[];
        intersection: any[];
        union: any[];
        difference: any[];
        columns: any;
    };
    function data(): {
        lastScrollTop: number;
        lastScrollLeft: number;
        fixedScrolling: boolean;
        normalScrolling: boolean;
        scrollBarWidth: number;
        selectedIndex: any[];
        selectedList: any[];
        canSelected: any[];
        nowTr: number;
        trList: any[];
        scroll: {
            x: number;
            y: number;
        };
        fixedLeftData: any[];
        fixedRightData: any[];
        allData: {};
        defaultCheckedList: any[];
        defaultDisabledList: any[];
        intersection: any[];
        union: any[];
        difference: any[];
        columns: any;
    };
    namespace watch {
        function selectedList(newVal: any, oldVal: any): void;
        function selectedList(newVal: any, oldVal: any): void;
    }
    namespace computed {
        namespace tableIsSelectAll {
            function get(): boolean;
            function set(v: any): any;
        }
        function isSelected(): (v: any) => boolean;
        function isSelected(): (v: any) => boolean;
        function getHeight(): (v: any) => string;
        function getHeight(): (v: any) => string;
    }
    function created(): void;
    function created(): void;
    function mounted(): void;
    function mounted(): void;
    namespace methods {
        function initTable(): void;
        function initTable(): void;
        function _getCheckboxProps(rowItem: any): any;
        function _getCheckboxProps(rowItem: any): any;
        /**
         * 获取对column的v-for时的key,优先级：column.key>column.dataIndex
         * 遍历column时，如果找不到key，将使用v-for遍历时默认的index作为columnKey
         */
        function getColumnKey(column: any): any;
        /**
         * 获取对column的v-for时的key,优先级：column.key>column.dataIndex
         * 遍历column时，如果找不到key，将使用v-for遍历时默认的index作为columnKey
         */
        function getColumnKey(column: any): any;
        function getRowKey(row: any): string;
        function getRowKey(row: any): string;
        function getRowData(colunmItem: any, rowItem: any): any;
        function getRowData(colunmItem: any, rowItem: any): any;
        function onSelect(row: any, isSelected: any, event: any): void;
        function onSelect(row: any, isSelected: any, event: any): void;
        function onSelectAll(v: any): void;
        function onSelectAll(v: any): void;
        function asyncRowHeight(): void;
        function asyncRowHeight(): void;
        function mouseEnter(e: any, v: any): void;
        function mouseEnter(e: any, v: any): void;
        function mouseLeave(): void;
        function mouseLeave(): void;
        function normalScroll(e: any, index: any): void;
        function normalScroll(e: any, index: any): void;
        function tempRender(name: any, row: any, dom: any): void;
        function tempRender(name: any, row: any, dom: any): void;
    }
}
export default _default;

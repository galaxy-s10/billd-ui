/// <reference types="lodash" />
import { Vue } from "vue-property-decorator";
import Popper from "./vue-popper";
declare const H3Dropdown_base: import("vue-class-component/lib/declarations").VueClass<Popper>;
export default class H3Dropdown extends H3Dropdown_base {
    dropdownParent: this;
    prefixCls: string;
    prefixStyle: string;
    selectStyle: any;
    allowClear: boolean;
    mode: string;
    selectPlaceholder: string;
    value: any[];
    suffixIcon: string;
    suffixColor: string;
    showSearch: boolean;
    render(): any;
    searchPlaceholder: string;
    handleShow: boolean;
    propLabel: any;
    searchKey: string;
    width: string;
    $refs: {
        contentPane: HTMLElement;
        dropdown: Vue;
        suffix: Vue;
    };
    showPane: boolean;
    get selectedData(): any;
    set selectedData(val: any);
    get debounceUpdatePopper(): import("lodash").DebouncedFunc<() => void>;
    resisePane(): void;
    showPaneHandler(val: boolean, oldVal: boolean): void;
    mounted(): void;
    handleOutsideClick(e: any): void;
    /**
     * 选择框聚焦事件
     */
    visibleChange(e: any): void;
    /**
     * 搜索框变化事件
     */
    searchChange(val: string): void;
    /**
     * change
     */
    change(value: any): void;
    deselect(value: any): void;
    clearSearchKey(): void;
    onClickSuffix(): void;
}
export {};

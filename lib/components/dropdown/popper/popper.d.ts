import Vue from "vue";
import { OptionsGeneric, Modifier } from "@popperjs/core";
declare const popper: import("vue/types/vue").ExtendedVue<Vue, {
    popperVisible: boolean;
    popperInstance: any;
    currentPlacement: string;
    referenceElm: any;
    popperElm: any;
    destroyTimer: any;
}, {
    refreshPopper(): void;
    updatePopper(opitons: Partial<OptionsGeneric<Modifier<string, any>>>): void;
    showPopper(): void;
    hidePopper(immediate?: boolean): void;
}, {
    innerModifiers: any[];
}, {
    visible: boolean;
    placement: string;
    transformOrigin: string | boolean;
    strategy: string;
    modifiers: unknown[];
    sameWidth: boolean;
    appendToBody: boolean;
    getParentContainer: Function;
    getBoundaryContainer: Function;
    reference: any;
    popper: any;
}>;
export default popper;

import { Vue } from "vue-property-decorator";
/**
 * @param {HTMLElement} [reference=$refs.reference] - The reference element used to position the popper.
 * @param {HTMLElement} [popper=$refs.popper] - The HTML element used as popper, or a configuration used to generate the popper.
 * @param {String} [placement=button] - Placement of the popper accepted values: top(-start, -end),left(-start, -end)
 * @param {Number} [offset=0] - Amount of pixels the popper will be shifted (can be negative).
 * @param {Boolean} [visible=false] Visibility of the popup element.
 * @param {Boolean} [visible-arrow=false] Visibility of the arrow, no style.
 */
export default class VuePopper extends Vue {
    transformOrigin: boolean | string;
    placement: string;
    boundariesPadding: number;
    reference: any;
    popper: any;
    offset: number;
    visibleArrow: boolean;
    arrowOffset: number;
    appendToBody: boolean;
    getParentContainer: any;
    getOverflowContainer: any;
    popperOptions: any;
    showPopper: boolean;
    currentPlacement: string;
    referenceElm: any;
    popperElm: any;
    popperJS: any;
    appended: any;
    showPopperHandler(val: boolean): void;
    placementChange(val: string): void;
    createPopper(): void;
    updatePopper(): void;
    doDestroy(forceDestroy: boolean): void;
    destroyPopper(): void;
    resetTransformOrigin(): void;
    appendArrow(element: Element): void;
    beforeDestroy(): void;
    deactivated(): void;
}

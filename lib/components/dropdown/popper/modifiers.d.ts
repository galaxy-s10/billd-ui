import { Modifier, ModifierArguments } from "@popperjs/core";
export declare const resetTransformOrigin: Modifier<string, any>;
export declare const sameWidth: {
    name: string;
    enabled: boolean;
    requires: string[];
    phase: string;
    fn: (params: ModifierArguments<any>) => void;
    effect: (params: ModifierArguments<any>) => void;
};
export declare const setZIndex: {
    name: string;
    enabled: boolean;
    requires: string[];
    phase: string;
    fn: (params: ModifierArguments<any>) => void;
};

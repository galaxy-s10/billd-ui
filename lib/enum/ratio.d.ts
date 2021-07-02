/**
 * 同/环比
 * inc = increase增长
 */
export declare enum Ratio {
    INCVALUE = 1,
    INCRATE = 2,
    LASTYEARINCVALUE = 3,
    LASTYEARINCRATE = 4,
    LASTMONTHINCVALUE = 5,
    LASTMONTHINCRATE = 6,
    LASTWEEKINCVALUE = 7,
    LASTWEEKINCRATE = 8
}
export declare const analysisRatio: {
    Y: {
        label: string;
        value: Ratio;
    }[];
    YQ: {
        label: string;
        value: Ratio;
    }[];
    YM: {
        label: string;
        value: Ratio;
    }[];
    YW: {
        label: string;
        value: Ratio;
    }[];
    YMD: {
        label: string;
        value: Ratio;
    }[];
};
declare const _default: {
    Y: {
        label: string;
        value: Ratio;
    }[];
    YQ: {
        label: string;
        value: Ratio;
    }[];
    YM: {
        label: string;
        value: Ratio;
    }[];
    YW: {
        label: string;
        value: Ratio;
    }[];
    YMD: {
        label: string;
        value: Ratio;
    }[];
};
export default _default;

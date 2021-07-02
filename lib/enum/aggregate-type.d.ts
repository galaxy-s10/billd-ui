/**
 * 字符串
 */
export declare enum StringType {
    COUNT = "COUNT"
}
/**
 * 数值
 */
export declare enum NumberType {
    SUM = "SUM",
    AVG = "AVG",
    MAX = "MAX",
    MIN = "MIN",
    COUNT = "COUNT"
}
/**
 * 日期
 */
export declare enum DateType {
    Y = "Y",
    YQ = "YQ",
    YM = "YM",
    YW = "YW",
    YMD = "YMD"
}
/**
 * 聚合类型
 */
export declare enum AggregateResultType {
    DEFAULT = "DEFAULT",
    PERCENT = "PERCENT"
}
declare const _default: {
    string: {
        label: string;
        value: StringType;
    }[];
    number: {
        label: string;
        value: NumberType;
    }[];
    date: {
        label: string;
        value: DateType;
    }[];
    address: {
        label: string;
        value: NumberType;
    }[];
    aggregateResult: {
        label: string;
        value: AggregateResultType;
    }[];
};
export default _default;

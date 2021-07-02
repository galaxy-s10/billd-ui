export declare enum StringType {
    Equal = "Equal",
    NotEqual = "NotEqual",
    StartWith = "StartWith",
    In = "In",
    NotIn = "NotIn",
    None = "None",
    NotNone = "NotNone",
    Match = "Match",
    NotMatch = "NotMatch"
}
export declare enum DateType {
    Equal = "Equal",
    NotEqual = "NotEqual",
    Range = "Range",
    Above = "Above",
    NotBelow = "NotBelow",
    Below = "Below",
    NotAbove = "NotAbove",
    None = "None",
    NotNone = "NotNone"
}
export declare enum NumberType {
    Equal = "Equal",
    NotEqual = "NotEqual",
    Range = "Range",
    Above = "Above",
    NotBelow = "NotBelow",
    Below = "Below",
    NotAbove = "NotAbove",
    None = "None",
    NotNone = "NotNone"
}
export declare enum DateFilterType {
    Custom = "Custom",
    Today = "Today",
    Yesterday = "Yesterday",
    ThisWeek = "ThisWeek",
    LastWeek = "LastWeek",
    ThisMonth = "ThisMonth",
    LastMonth = "LastMonth"
}
export declare enum FormatDateType {
    Date = "Date",
    Time = "Time",
    Month = "Month"
}
export declare const dateFilterType: {
    label: string;
    value: DateFilterType;
}[];
export declare const dateFilterTypeList: {
    Today: string;
    Yesterday: string;
    ThisWeek: string;
    LastWeek: string;
    ThisMonth: string;
    LastMonth: string;
    Custom: string;
};
export declare const formatDataList: {
    label: string;
    value: FormatDateType;
}[];
declare const _default: {
    string: {
        label: string;
        value: StringType;
    }[];
    date: {
        label: string;
        value: DateType;
    }[];
    number: {
        label: string;
        value: NumberType;
    }[];
};
export default _default;

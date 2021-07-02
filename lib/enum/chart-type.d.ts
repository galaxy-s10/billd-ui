/**
 * 图表类型枚举
 */
export declare enum ElementType {
    MAP = "map",
    BAR = "bar",
    PILEBAR = "pileBar",
    STRIPE = "stripe",
    LINE = "line",
    AREA = "area",
    PIE = "pie",
    FUNNEL = "funnel",
    RADAR = "radar",
    TABLE = "table",
    LIST = "list",
    CARD = "card",
    SCATTER = "scatter",
    BIAX = "biax",
    LONGTEXT = "longText",
    FILTERPICKER = "filterPicker"
}
/**
 * 图表类型枚举
 */
export declare enum ElementCNType {
    MAP = "\u5730\u56FE",
    BAR = "\u67F1\u72B6\u56FE",
    PILEBAR = "\u5806\u53E0\u67F1\u72B6\u56FE",
    STRIPE = "\u6761\u5F62\u56FE",
    LINE = "\u6298\u7EBF\u56FE",
    AREA = "\u9762\u79EF\u56FE",
    PIE = "\u997C\u56FE",
    FUNNEL = "\u6F0F\u6597\u56FE",
    RADAR = "\u96F7\u8FBE\u56FE",
    TABLE = "\u900F\u89C6\u56FE",
    LIST = "\u660E\u7EC6\u8868",
    CARD = "\u6307\u6807\u56FE",
    SCATTER = "\u6563\u70B9\u56FE",
    BIAX = "\u53CC\u8F74\u56FE",
    LONGTEXT = "\u6587\u672C\u56FE",
    FILTERPICKER = "\u8FC7\u6EE4\u5668"
}
/**
 * 图表连接关系
 */
export declare enum ChartUseType {
    CONNECT = 1,
    ETL = 100
}
/**
 * 图表tooltip 的HTML
 */
export declare enum ChartNotice {
    MAP = "",
    BAR = "1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6216\u591A\u4E2A\u6307\u6807<br>2\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807",
    PILEBAR = "1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6216\u591A\u4E2A\u6307\u6807<br>2\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807",
    STRIPE = "1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6216\u591A\u4E2A\u6307\u6807<br>2\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807",
    LINE = "1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6216\u591A\u4E2A\u6307\u6807<br>2\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807",
    AREA = "1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6216\u591A\u4E2A\u6307\u6807<br>2\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807",
    PIE = "1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807",
    FUNNEL = "1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807",
    RADAR = "1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6216\u591A\u4E2A\u6307\u6807<br>2\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807",
    TABLE = "1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6216\u591A\u4E2A\u6307\u6807<br>\u591A\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6216\u591A\u4E2A\u6307\u6807",
    LIST = "\u591A\u4E2A\u5217",
    CARD = "0\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807<br>1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807",
    SCATTER = "1\u4E2A\u7EF4\u5EA6\u30012\u4E2A\u62163\u4E2A\u6307\u6807<br/>2\u4E2A\u7EF4\u5EA6\u30012\u4E2A\u62163\u4E2A\u6307\u6807",
    BIAX = "1\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6216\u591A\u4E2A\u6307\u6807<br>2\u4E2A\u7EF4\u5EA6\u30011\u4E2A\u6307\u6807"
}

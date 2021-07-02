/**
 * 返回值匹配别名，兼容别名key_value及直接使用value两种方式
 * @param key
 * @param value
 * @param alias
 */
declare const getAliaValue: (key: string, value: string, alias: any) => any;
export default getAliaValue;

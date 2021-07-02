/**
 * 获取GUID
 */
export declare const guid: () => string;
/**
 * 获取UUID
 * @param len 长度
 * @param radix 数值进制
 */
export declare const uuid: (len: number, radix: number) => string;
declare const _default: {
    guid: () => string;
    uuid: (len: number, radix: number) => string;
};
export default _default;

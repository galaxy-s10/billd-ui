/**
 * 对象深拷贝
 * @param obj
 */
declare function objectDeepCopy(obj: Object): {};
/**
 * 对象比较赋值
 * @param baseObj 基准对象
 * @param compObj 赋值对象
 */
declare function compare(baseObj: any, compObj: any): void;
export { objectDeepCopy, compare };
declare const _default: {
    objectDeepCopy: typeof objectDeepCopy;
    compare: typeof compare;
};
export default _default;

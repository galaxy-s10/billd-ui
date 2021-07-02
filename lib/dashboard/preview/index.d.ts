import Vue from 'vue';
export declare const instance: (el: HTMLDivElement) => Vue;
declare const _default: {
    /**
     *  预览报表
     * @param charts 图表集合
     * @param charts 图表集合
     * @param global 图表的全局配置
     * @param top 预览的弹窗高度
     * @param objectId 图表标识
     * @param title 图表标题
     */
    show(preStore: any, { el, charts, global, top, objectId, title }: {
        el: any;
        charts: any;
        global: any;
        top: any;
        objectId: any;
        title: any;
    }): void;
    close(): void;
    destroy(): void;
};
export default _default;

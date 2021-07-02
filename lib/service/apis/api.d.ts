/**
 * 接口通用配置标准
 */
export default abstract class API {
    config: H3.ReportAPI.APIConfig;
    protected constructor(config: H3.ReportAPI.APIConfig);
    /**
     * 获取图表数据
     */
    /**
     * fetch方法
     * @param options 配置参数
     */
    fetch<T>(options: any): H3.ReportFetch.Result<T>;
    setConfig({ corpId, config }: any): void;
}

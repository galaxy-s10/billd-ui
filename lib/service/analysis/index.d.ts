import API from "../apis/api";
import { AnalysisApis } from "./api-type";
declare class AnalysisApi extends API {
    constructor();
    /**
     *  获取报表信息
     *  @param dataSourceId
     *  @param ownerId
     *  @param shareStatus 0 表示个人  1 表示公共
     */
    [AnalysisApis.GETREPORTINFO](dataSourceId: String, ownerId: String, shareStatus?: 0 | 1): Promise<any>;
    /**
     *  获取个人报表信息
     *  @param dataSourceId
     *  @param ownerId
     */
    [AnalysisApis.GETPERSONALINFO](dataSourceId: String, ownerId: String): Promise<any>;
    /**
     *  获取公共报表信息
     *  @param dataSourceId
     *  @param ownerId
     */
    [AnalysisApis.GETPUBLICINFO](dataSourceId: String, ownerId: String): Promise<any>;
    /**
     *  删除单个图表信息
     *  @param objectId
     */
    [AnalysisApis.REMOVECHART](objectId: String): Promise<any>;
    /**
     *  批量删除图表信息
     *  @param objectIds
     */
    [AnalysisApis.REMOVECHARTS](objectIds: String[]): Promise<any>;
    /**
     *  保存报表信息
     *  @param report
     */
    [AnalysisApis.SAVECHARTS](report: H3.AnalysisAPI.reportInfo): Promise<any>;
    /**
     *  获取个人模块统计分析报表的图表数量
     */
    [AnalysisApis.GETCHARTSLENGTH](dataSourceId: String, ownerId: String): Promise<any>;
    /**
     *  保存图表信息
     *  @param chart
     */
    [AnalysisApis.SAVECHART](chart: H3.AnalysisAPI.ChartInfo): Promise<any>;
    /**
     * 获取指定dataSourceId的数据源
     */
    [AnalysisApis.GETDATASOURCE](dataSourceId: string): Promise<any | boolean>;
    /**
     *  保存图表个人偏好信息
     *  @param chart
     */
    [AnalysisApis.SAVEOWNERCHART](chart: H3.AnalysisAPI.OwnerChart): Promise<any>;
    /**
     *  图表数据加载
     *  @param chart
     *  @param corpId
     */
    /**
     *  图表数据加载
     *  @param code
     */
    [AnalysisApis.GETMAPJSON](code: any): Promise<Object | boolean>;
}
declare const analysisApi: AnalysisApi;
export { analysisApi };
declare const _default: {
    analysisApi: AnalysisApi;
};
export default _default;

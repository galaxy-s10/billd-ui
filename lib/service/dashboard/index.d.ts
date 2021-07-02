import API from '../apis/api';
import { DashbordApis } from './api-type';
declare class DashboardApi extends API {
    constructor();
    /**
     * 保存取图表数据
     */
    [DashbordApis.SAVEREPORT](report: H3.Report.Report): Promise<any>;
    /**
     * 获取图表配置信息
     */
    [DashbordApis.GETREPORT](corpId: string, objectId: string): Promise<any>;
    /**
     * 获取数据源列表
     */
    [DashbordApis.GETDATASOURCELIST](): Promise<any>;
    /**
     * 获取指定dataSourceId的数据源
     */
    [DashbordApis.GETDATASOURCE](dataSourceInfos: Array<string>): Promise<any>;
    /**
     * 获取图表数据
     */
    /**
     * 导出数据 明细表
     */
    [DashbordApis.DATAEXPORT](chart: H3.ReportAPI.Chart, corpId?: string): Promise<any | Array<any> | boolean>;
}
declare const dashboardApi: DashboardApi;
export { dashboardApi };
declare const _default: {
    dashboardApi: DashboardApi;
};
export default _default;

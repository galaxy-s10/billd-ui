import API from '../apis/api';
import { DataSourceApis } from './api-type';
declare class DataSourceApi extends API {
    constructor();
    /**
     * 获取数据源列表
     */
    [DataSourceApis.GETDATASOURCENODES](): Promise<any>;
    /**
     * 移动分组节点
     * @param groupObjectIds
     * @param nodeObjectIds
     * @param parentObjectId
     */
    [DataSourceApis.MOVEDATASOURCENODE]({ groupObjectIds, nodeObjectIds, parentObjectId }: {
        groupObjectIds: any;
        nodeObjectIds: any;
        parentObjectId: any;
    }): Promise<any>;
    /**
     * 排序
     * @param sortModels
     */
    [DataSourceApis.UPDATEDATASOURCENODESORT](sortModels: any): Promise<any>;
    /**
     * 删除分组节点
     * @param groupObjectIds
     * @param nodeObjectIds
     */
    [DataSourceApis.REMOVEDATASOURCENODE]({ groupObjectIds, nodeObjectIds }: {
        groupObjectIds: any;
        nodeObjectIds: any;
    }): Promise<any>;
    /**
     * 更新高级数据源节点名称
     * @param name
     * @param objectId
     * @param type
     */
    [DataSourceApis.UPDATEDATASOURCENAME]({ name, objectId, type }: {
        name: any;
        objectId: any;
        type: any;
    }): Promise<any>;
    /**
     * 添加高级数据源组节点
     * @param dataSourceGroup
     */
    [DataSourceApis.ADDDATASOURCEGROUP](dataSourceGroup: any): Promise<any>;
    /**
     * 预览高级数据源数据
     * @param objectId
     */
    [DataSourceApis.PREVIEWADVANCEDDATA](objectId: string): Promise<any>;
    /**
     * 预览高级数据源数据
     * @param setting
     */
    [DataSourceApis.PREVIEWSOURCEDATA](setting: any): Promise<any>;
    /**
     * 高级数据源获取模型列表
     */
    [DataSourceApis.GETMODELLIST](): Promise<any>;
    /**
     * 高级数据源获取模型以及子模型的属性信息
     */
    [DataSourceApis.GETMODELINFO](schemaCode: any): Promise<any>;
    /**
     * 获取高级数据源节点信息
     */
    [DataSourceApis.GETDATASOURCENODEINFO](objectId: string): Promise<any | boolean>;
    /**
     * 高级数据源获取模型以及子模型的属性信息
     */
    [DataSourceApis.SAVEDATASOURCESETTING](setting: any): Promise<any>;
    /**
     * 高级数据源获取不同阶段的节点对应的模型属性
     */
    [DataSourceApis.GETSTAGEMODELINFO](setting: any): Promise<any>;
    /**
     * 校验公式
     */
    [DataSourceApis.CHECKCOMPUTE](compute: H3.DataSourceAPI.Compute): Promise<any>;
}
declare const dataSourceApi: DataSourceApi;
export { dataSourceApi };
declare const _default: {
    dataSourceApi: DataSourceApi;
};
export default _default;

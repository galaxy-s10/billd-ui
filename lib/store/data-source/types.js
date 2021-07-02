"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ReportMutation = exports.ReportAction = void 0;
var ReportAction;
exports.ReportAction = ReportAction;

(function (ReportAction) {
  /******************** 删除 start ********************/
  ReportAction["GETDATASOURCENODES"] = "getDataSourceNodes";
  ReportAction["MOVEFUNCTIONNODE"] = "moveFunctionNode";
  ReportAction["REMOVEFUNCTIONNODE"] = "removeFunctionNode";
  ReportAction["UPDATEDATASOURCENAME"] = "updateDataSourceName";
  ReportAction["ADDDATASOURCEGROUP"] = "addDataSourceGroup";
  ReportAction["PREVIEWADVANCEDDATA"] = "previewAdvancedData";
  /******************** 删除 end ********************/

  ReportAction["GETMODELLIST"] = "getModelList";
  ReportAction["GETMODELINFO"] = "getModelInfo";
  ReportAction["GETSTAGEMODELINFO"] = "getStageModelInfo";
  ReportAction["GETDATASOURCENODEINFO"] = "getDataSourceNodeInfo";
  ReportAction["SAVEDATASOURCESETTING"] = "saveDataSourceSetting";
  ReportAction["CHECKCOMPUTE"] = "checkCompute";
  ReportAction["PREVIEWSOURCEDATA"] = "previewSourceData"; // 保存节点配置信息
})(ReportAction || (exports.ReportAction = ReportAction = {}));

var ReportMutation;
exports.ReportMutation = ReportMutation;

(function (ReportMutation) {
  ReportMutation["UPDATECANVAS"] = "updateCanvas";
  ReportMutation["UPDATESETTING"] = "updateSetting";
  ReportMutation["UPDATESTAGE"] = "updateStage";
  ReportMutation["STOREAXIOSDATA"] = "storeAxiosData";
  ReportMutation["SETDATASOURCEOPTIONS"] = "setDataSourceOptions";
  ReportMutation["INITDATESOURCE"] = "initDateSource";
  ReportMutation["SETDATASOURCETITLE"] = "setDataSourceTitle";
  ReportMutation["UPDATENODE"] = "updateNode";
  ReportMutation["UPDATEOPTIONS"] = "updateOptions";
  ReportMutation["CHANGEEDITSTATUS"] = "changeEditStatus";
})(ReportMutation || (exports.ReportMutation = ReportMutation = {}));
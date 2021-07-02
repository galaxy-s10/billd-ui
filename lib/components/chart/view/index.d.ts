import "echarts/lib/chart/bar";
import "echarts/lib/chart/line";
import "echarts/lib/chart/pie";
import "echarts/lib/chart/funnel";
import "echarts/lib/chart/radar";
import "echarts/lib/chart/scatter";
import "echarts/lib/chart/map";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
import "echarts/lib/component/markLine";
import "echarts/lib/component/legendScroll";
import "echarts/lib/component/dataZoom";
import "echarts/lib/component/visualMap";
import "echarts/lib/component/graphic";
import "echarts/lib/component/geo";
/**
 * 获取图表实例
 * @param container
 * @param options
 * @param vm
 * @param showDataZoom  // 获取默认是否大数据配置 todo 老统计分析不上datazoom 后期可以优化掉
 */
export declare const chartView: (container: HTMLDivElement, options: H3.Chart.ChartOptions, vm: any, showDataZoom?: boolean) => Promise<unknown>;
export default chartView;

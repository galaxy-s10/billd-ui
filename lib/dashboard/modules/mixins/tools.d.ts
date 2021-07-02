import { Vue } from 'vue-property-decorator';
export default class ReportToolsMixins extends Vue {
    modules: H3.ReportModules.ChartModules;
    modulesData: H3.Report.Global;
    global: H3.Report.Global;
    module: H3.Report.Global;
    data: H3.Report.Global;
}

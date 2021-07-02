import { Vue } from 'vue-property-decorator';
export default class FilterMixins extends Vue {
    value: Array<string | number | any>;
    field: H3.Report.FieldColumn;
    formula: string;
    comPrefixCls: string;
    emitValue(value: string | Array<string | number | {
        label: string;
        value: string;
    }> | null): void;
}

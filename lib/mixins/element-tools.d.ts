import { Vue } from "vue-property-decorator";
export default class TableMixin extends Vue {
    status: "design" | "report" | "preview";
}

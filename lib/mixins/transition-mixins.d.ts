import { Vue } from "vue-property-decorator";
export default class Transition extends Vue implements H3.Report.AnimationGroup {
    animations: H3.Report.AnimationGroup | boolean;
    /**
     * zoomin
     */
    zoomIn(): void;
    /**
     * zoomout
     */
    zoomOut(): void;
}

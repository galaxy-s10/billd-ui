import { Vue } from 'vue-property-decorator';
export default class HandleColorPicker extends Vue {
    colorWarp: NodeList;
    colorPickerPosition(el: Element): void;
    /**
     * 批量处理
     */
    batchColorPickerPosition(): void;
    mounted(): void;
    destroy(): void;
}

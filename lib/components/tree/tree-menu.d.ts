import { Vue } from "vue-property-decorator";
import { CreateElement, VNode } from "vue";
export default class MenuTree extends Vue {
    treeNode: H3.Tree.TreeNode;
    parentNode: H3.Tree.TreeNode | null;
    accord: boolean;
    folderIcon: {
        [type in "open" | "close"]: string;
    };
    nodeIcon: string;
    multiple: boolean;
    folderSelected: boolean;
    folderCheckbox: boolean;
    dragging: boolean;
    mapping: {
        [key: string]: string;
    };
    treeDragStart: Function;
    treeDragEnd: Function;
    treeMove: Function;
    treeMenuChange: Function;
    innerTreeNode: any;
    prefixCls: string;
    dragOptions: {
        group: string;
        animation: number;
        sort: boolean;
    };
    moveNode: any;
    moveNodeParentObjectId: string;
    watchTreeNode(): void;
    watchIsOpen(val: Boolean): void;
    parentOpen(): void;
    /**
     * 拖拽开始
     * @param evt 拖拽自带属性
     */
    menuDragStart(evt: any): void;
    /**
     * 拖拽结束
     * @param evt 拖拽自带属性
     */
    menuDragEnd(evt: any): void;
    /**
     * 节点拖拽开始
     * @param evt
     * @param moveNode 拖拽的目标节点信息
     */
    treeValueChange(evt: any): void;
    /**
     *
     */
    treeMenuValueChange(evt: any): void;
    /**
     * 节点拖拽时的
     * @param evt
     */
    treeMenuMove(evt: any): void;
    /**
     * 节点拖动到另一个列表时
     * @param evt
     */
    treeRemove(evt: any): void;
    /**
     *
     */
    treeAdd(evt: any): void;
    /**
     * 找父节点ObjectId
     */
    findParentObjectId(list: any, objectId: any): void;
    render(h: CreateElement): VNode;
}

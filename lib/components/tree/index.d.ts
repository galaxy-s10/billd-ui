import { Vue } from "vue-property-decorator";
export default class Tree extends Vue {
    treeList: Array<H3.Tree.TreeNode>;
    openKeys: Array<string>;
    tile: boolean;
    accord: boolean;
    multiple: boolean;
    folderSelected: boolean;
    folderCheckbox: boolean;
    folderIcon: {
        [type in "open" | "close"]: string;
    };
    nodeIcon: string;
    dragging: boolean;
    disabled: boolean;
    keyMappings: {
        [key in "title" | "key" | "parent" | "folder"]: string;
    };
    allowNodeDrag: Function;
    prefixCls: string;
    innerNodeList: {
        [treeKey: string]: H3.Tree.TreeNode;
    };
    checkedNodeList: {};
    dragOptions: {
        group: string;
        animation: number;
        disabled: boolean;
        sort: boolean;
    };
    moveNode: any;
    toList: any;
    fromList: any;
    openTimer: any;
    renderTreeList: Array<H3.Tree.TreeNode>;
    render(): any;
    watchDisable(val: boolean): void;
    dragChange(evt: any, tree: any): void;
    /**
     * 处理数据格式
     */
    setRenderTreeList(): H3.Tree.TreeNode[];
    get innerTreeList(): H3.Tree.TreeNode[];
    get mapping(): {
        title: string;
        key: string;
        parent: string;
        folder: string;
    } & {
        title: string;
        key: string;
        parent: string;
        folder: string;
    };
    watchOpenKeys(): void;
    watchTreeList(): void;
    addFolderList(node: H3.Tree.TreeNode): void;
    nodeClick(node: H3.Tree.TreeNode): void;
    treeNodeExpand(treeNode: H3.Tree.TreeNode): void;
    multipleClick(node: H3.Tree.TreeNode): void;
    nodeHover(node: H3.Tree.TreeNode): void;
    /**
     * 向下处理节点状态
     */
    allDownChecked(node: H3.Tree.TreeNode): void;
    /**
     * 向上处理节点状态
     */
    allUpChecked(node: H3.Tree.TreeNode): void;
    /**
     * 处理需要打开的keys
     */
    handleOpenKeys(): void;
    /**
     * 节点拖拽开始
     * @param evt
     */
    treeValueChange(evt: any): void;
    /**
     * 目录自节点改变排序
     */
    treeMenuChange(evt: any, tree: any): void;
    /**
     * 节点拖拽开始
     * @param evt
     */
    treeDragStart(evt: any): void;
    /**
     * 节点拖拽结束
     * @param evt
     */
    treeDragEnd(evt: any): void;
    /**
     * 节点拖拽时的
     * @param evt
     */
    treeMove(evt: any): any;
    /**
     * 节点拖动到另一个列表时
     * @param evt
     */
    treeRemove(evt: any): void;
    /**
     * 初始化数据
     */
    initValue(): void;
    updated(): void;
    mounted(): void;
}

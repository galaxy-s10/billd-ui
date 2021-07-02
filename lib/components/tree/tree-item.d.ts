import { Vue } from "vue-property-decorator";
export default class Tree extends Vue {
    treeNode: H3.Tree.TreeNode;
    folderIcon: {
        [type in "open" | "close"]: string;
    };
    nodeIcon: string;
    multiple: boolean;
    folderSelected: boolean;
    folderCheckbox: boolean;
    mapping: {
        [key: string]: string;
    };
    nodeClick: Function;
    nodeHover: Function;
    multipleClick: Function;
    treeNodeExpand: Function;
    addFolderList: Function;
    prefixCls: string;
    render(): any;
    watchTreeNode(): void;
    get nodeIconStyle(): any;
    get getFolderCheckbox(): boolean;
    treeCheckbox(): void;
    mousemove(): void;
    click(): void;
}

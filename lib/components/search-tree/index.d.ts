import { Vue } from "vue-property-decorator";
export default class SearchTree extends Vue {
    openKeys: Array<string>;
    list: Array<H3.Tree.TreeNode>;
    value: H3.Tree.TreeNode | string;
    isSearchFolder: boolean;
    defaultScrollTop: boolean;
    mappings: {
        [key in "title" | "key" | "parent" | "folder"]: string;
    };
    empty: string;
    prefixCls: string;
    searchValue: any;
    innerList: Array<H3.Tree.TreeNode>;
    activeNode: H3.Tree.TreeNode | null;
    render(): any;
    watchList(): void;
    get defaultNodeId(): any;
    get keyMappings(): {
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
    /**
     * 获取数据源列表
     */
    get getSourceList(): any;
    /**
     * 获取查询的列表
     */
    get getSearchList(): H3.Tree.TreeNode[];
    /**
     * 获取高亮显示文本
     * @param node
     */
    getHighlight(node: H3.Tree.TreeNode): any;
    /**
     * 搜索的时候清空激活的节点
     */
    search(): void;
    /**
     * 节点点击
     */
    nodeClick(node: H3.Tree.TreeNode): void;
    /**
     * 打开数据源node之后
     */
    openKeysEnd(): void;
}

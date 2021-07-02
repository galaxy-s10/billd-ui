declare namespace H3 {
    namespace Licence {
        /**
         * 角色控制
         */
        interface Role {
            key: string;
            name?: string;
            weight: number;
            authority: Authority;
        }
        /**
         * 新统计分析权限控制
         */
        interface Authority {
            view?: moduleAuthority;
            design?: moduleAuthority;
        }
        interface moduleAuthority {
            Public?: H3.Analysis.PublicView;
            Person?: H3.Analysis.PersionView;
            Chart?: H3.Analysis.ChartController;
            Designer?: H3.Analysis.Design;
        }
        enum ModulesType {
            Public = "Public",
            Person = "Person",
            Chart = "Chart",
            Designer = "Designer"
        }
    }
}

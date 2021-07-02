export default options;
declare namespace options {
    const axios: any;
    const requestHeader: any;
    const interfaceErrorCb: any;
    const baseUrl: any;
    const config: {};
    const corpId: any;
    const reportId: any;
    const integrateComponents: any;
    const classification: any;
    const message: any;
    namespace charts {
        namespace list {
            const dimension: number;
        }
        namespace table {
            const dimension_1: number;
            export { dimension_1 as dimension };
            export const groupDimension: number;
            export const metric: number;
        }
    }
    namespace download {
        const list_1: boolean;
        export { list_1 as list };
        export const pivotTable: boolean;
    }
    namespace mobile {
        const filter: boolean;
    }
    const fieldsOptions: any[];
}

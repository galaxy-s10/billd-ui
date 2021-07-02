export default function fetch<T>(config: any): Promise<T>;
export default function fetch<T>(url: string, data: any, method?: string, allowAnonymous?: boolean, baseURL?: string): Promise<T>;

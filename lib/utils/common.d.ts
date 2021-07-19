export function throttle(fn: any, interval: any, option: any): (...args: any[]) => Promise<any>;
export function debounce(fn: any, delay: any, leading: any): {
    (...args: any[]): Promise<any>;
    cancel(): void;
};
export function getScrollBarWidth(): number;

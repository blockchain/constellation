declare const debounce: <T extends unknown, U extends void>(callback: (...args: T[]) => U | PromiseLike<U>, wait?: number, maxCount?: number) => (...args: T[]) => PromiseLike<U>;
export default debounce;
//# sourceMappingURL=debounce.d.ts.map
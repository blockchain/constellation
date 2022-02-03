declare type CopiedValue = string | null;
declare type CopyFn = (text: string) => Promise<boolean>;
declare const useCopyToClipboard: () => [CopiedValue, CopyFn];
export default useCopyToClipboard;
//# sourceMappingURL=useCopyToClipboard.d.ts.map
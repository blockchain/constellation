declare const queuevent: <K extends string, P extends {}>({ queueCallback, queueName, }: {
    queueCallback: (events: {
        key: K;
        payload: P;
    }[]) => PromiseLike<void>;
    queueName: string;
}) => {
    clear: () => void;
    push: (key: K, payload: P) => void;
};
export default queuevent;
//# sourceMappingURL=queuevent.d.ts.map
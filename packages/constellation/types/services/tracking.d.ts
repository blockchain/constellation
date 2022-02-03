declare const tracking: ({ api, platform, }: {
    api: string;
    platform: 'WALLET' | 'EXCHANGE' | 'BLOCKCHAIN_COM' | 'EXPLORER';
}) => {
    deleteIdentifier: () => void;
    hasConsent: () => Promise<boolean>;
    publish: ({ context, events, }: {
        context: {
            campaign?: {
                [key: string]: unknown;
            } | undefined;
            traits?: {
                [key: string]: unknown;
            } | undefined;
        };
        events: {
            [key: string]: unknown;
        }[];
    }) => void;
    setIdentifier: () => void;
};
export default tracking;
//# sourceMappingURL=tracking.d.ts.map
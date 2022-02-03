import { ReactNode } from 'react';
import { ColorKeysType } from '../../colors/types';
declare type VariantType = 'display' | 'title-1' | 'title-2' | 'title-3' | 'subheading' | 'body-mono' | 'body-1' | 'body-2' | 'paragraph-mono' | 'paragraph-1' | 'paragraph-2' | 'caption-1' | 'caption-2' | 'overline' | 'micro';
declare type HtmlFor = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
declare type TextComponentProps = {
    as?: HtmlFor;
    children: ReactNode;
    color?: ColorKeysType;
    variant?: VariantType;
};
export type { TextComponentProps };
//# sourceMappingURL=types.d.ts.map
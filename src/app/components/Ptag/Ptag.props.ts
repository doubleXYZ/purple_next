import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface PtagProps
    extends DetailedHTMLProps<
        HTMLAttributes<HTMLParagraphElement>,
        HTMLParagraphElement
    > {
    tag: 'p-read' | 'p-review';
    children: React.ReactNode;
}
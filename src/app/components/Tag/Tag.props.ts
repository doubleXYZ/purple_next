import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export interface TagProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    children: React.ReactNode;
    appearence: 'primary' | 'ghost';
}
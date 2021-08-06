import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  /** Button variants */
  variant?: 'text' | 'outlined' | 'contained' | 'leaf';
};

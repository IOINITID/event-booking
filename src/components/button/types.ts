import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  variant?: 'text' | 'outlined' | 'contained';
};

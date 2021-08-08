import { MouseEvent, ReactNode } from 'react';

export type ButtonProps = {
  /** Classname for button */
  className?: string;
  /** Button variants */
  variant?: 'text' | 'outlined' | 'contained' | 'leaf';
  /** Button children component */
  children: ReactNode;
  /** Handle button click */
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

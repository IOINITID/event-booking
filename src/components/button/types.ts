import { MouseEvent, ReactNode } from 'react';

type ButtonVariant = 'text' | 'outlined' | 'contained' | 'leaf';

export type ButtonProps = {
  /** Classname for button */
  className?: string;
  /** Button variants */
  variant?: ButtonVariant;
  /** Button children component */
  children: ReactNode;
  /** Handle button click */
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

import { ReactNode } from 'react';

export type ButtonType = {
  className?: string;
  type: 'default' | 'primary';
  onClick: any;
  children: ReactNode;
};

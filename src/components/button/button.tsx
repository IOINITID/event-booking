// Styles imports
import { styles } from './styles';

// Types imports
import { ButtonType } from './types';

// Additional imports
import { cx } from '@emotion/css';
import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & ButtonType;

const Button = ({ className, variant = 'text', children, ...props }: ButtonProps) => {
  return (
    <button
      className={cx(
        styles.root,
        variant === 'text' && styles.text,
        variant === 'outlined' && styles.outlined,
        variant === 'contained' && styles.contained,
        className
      )}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };

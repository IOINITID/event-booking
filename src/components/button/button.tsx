// Types
import { ButtonProps } from './types';

// Additional
import { cx } from '@emotion/css';

// Styles
import { styles } from './styles';

const Button = ({ className, variant = 'text', children, ...props }: ButtonProps) => {
  const buttonStyles = cx(
    styles.root,
    variant === 'text' && styles.text,
    variant === 'outlined' && styles.outlined,
    variant === 'contained' && styles.contained,
    variant === 'leaf' && styles.leaf,
    className
  );

  return (
    <button className={buttonStyles} type="button" {...props}>
      {children}
    </button>
  );
};

export { Button };

// Styles imports
import { styles } from './styles';

// Types imports
import { ButtonType } from './types';

// Additional imports
import { cx } from '@emotion/css';

const Button = ({ type, className, onClick, children, ...props }: ButtonType) => {
  return (
    <button
      className={cx(styles.root, type === 'default' && styles.default, type === 'primary' && styles.primary, className)}
      type="button"
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };

// Types
import { LinkProps } from './types';

// Additional
import { Link as ReactRouterLink } from 'react-router-dom';
import { cx } from '@emotion/css';

// Styles
import { styles } from './styles';

const Link = ({ className, variant, to, children }: LinkProps) => {
  const linkStyles = cx(
    styles.root,
    variant === 'text' && styles.text,
    variant === 'outlined' && styles.outlined,
    variant === 'contained' && styles.contained,
    className
  );

  return (
    <ReactRouterLink to={to} className={linkStyles}>
      {children}
    </ReactRouterLink>
  );
};

export { Link };

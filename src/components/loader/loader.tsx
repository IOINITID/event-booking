// Types
import { LoaderProps } from './types';

// Styles imports
import { css, cx } from '@emotion/css';
import { styles } from './styles';

const Loader = ({ color, duration }: LoaderProps) => {
  return (
    <div className={styles.container}>
      <div
        className={cx(
          styles.loader,
          css`
            --loader-color: ${color};
            --loader-animation-duration: ${duration}s;
          `
        )}
      ></div>
    </div>
  );
};

export { Loader };

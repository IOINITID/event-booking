// Components
import { Button } from '../button';

// Types
import { InfoBannerProps } from './types';

// Additional
import { css, cx } from '@emotion/css';

// Styles
import { styles } from './styles';

const InfoBanner = ({ type, title, description, buttonTitle, onClick }: InfoBannerProps) => {
  return (
    <div className={styles.container}>
      <h2
        className={cx(
          styles.heading,
          css`
            max-width: ${type === 'events' ? '663px' : '752px'};
          `
        )}
      >
        {title}
        <br />
        {description}
      </h2>
      <Button variant="contained" onClick={onClick}>
        {buttonTitle}
      </Button>
    </div>
  );
};

export { InfoBanner };

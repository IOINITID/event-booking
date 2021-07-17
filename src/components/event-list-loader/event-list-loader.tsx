// Additional imports
import { css } from '@emotion/css';
import ContentLoader, { IContentLoaderProps } from 'react-content-loader';

const EventItemLoader = (props: IContentLoaderProps) => (
  <ContentLoader
    width={384}
    height={176}
    viewBox="0 0 384 176"
    backgroundColor="#f26b4e"
    foregroundColor="#ef4723"
    {...props}
  >
    <rect x="0" y="0" rx="16" ry="16" width="384" height="176" />
  </ContentLoader>
);

const EventListButtonLoader = (props: IContentLoaderProps) => (
  <ContentLoader
    width={181}
    height={56}
    viewBox="0 0 181 56"
    backgroundColor="#f26b4e"
    foregroundColor="#ef4723"
    {...props}
  >
    <rect x="0" y="0" rx="8" ry="8" width="181" height="56" />
  </ContentLoader>
);

// Interfaces and types
interface IEventListLoader {
  itemsCount: number;
}

const EventListLoader = (props: IEventListLoader) => {
  return (
    <div
      className={css`
        display: grid;
        grid-template-columns: repeat(3, 384px);
        gap: 32px;
        row-gap: 40px;
      `}
    >
      {Array.from(Array(props.itemsCount).keys()).map((item) => {
        return <EventItemLoader key={item} />;
      })}
      <EventListButtonLoader
        className={css`
          justify-self: center;
          grid-column: 2/3;
        `}
      />
    </div>
  );
};

export { EventListLoader };

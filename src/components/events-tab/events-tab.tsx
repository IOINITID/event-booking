// Components
import { Loader } from '../loader';
import { InfoBanner } from '../info-banner';
import { EventCardTab } from '../event-card-tab';

// Types
import { EventsTabProps } from './types';
import { EventType } from '../../store/eventsSlice/types';

// Hooks
import { useInfoBanner } from '../info-banner/hooks';

// Styles
import { styles } from './styles';

const EventsTab = ({ isLoading, events, onEventDeleteClick }: EventsTabProps) => {
  const { title, description, buttonTitle, handleInfoBannerClick } = useInfoBanner('events');

  if (isLoading) {
    return <Loader />;
  }

  if (events.length === 0) {
    return (
      <InfoBanner
        type="events"
        title={title}
        description={description}
        buttonTitle={buttonTitle}
        onClick={handleInfoBannerClick}
      />
    );
  }

  return (
    <ul className={styles.list}>
      {events.map(({ id, title, price, date, location, image }: EventType, index: number) => {
        const handleEventDeleteClick = () => onEventDeleteClick(id);

        return (
          <li key={id}>
            <EventCardTab
              type="events"
              index={index}
              title={title}
              price={price}
              date={date}
              location={location}
              image={image}
              onDeleteClick={handleEventDeleteClick}
            />
          </li>
        );
      })}
    </ul>
  );
};

export { EventsTab };

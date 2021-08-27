// Components
import { EventCardTab } from '../event-card-tab';
import { InfoBanner } from '../info-banner';

// Types
import { BookingsTabProps } from './types';
import { BookingType } from '../../store/bookingsSlice/types';

// Hooks
import { useInfoBanner } from '../info-banner/hooks';

// Styles
import { styles } from './styles';

const BookingsTab = ({ bookings, onBookingDeleteClick }: BookingsTabProps) => {
  const { title, description, buttonTitle, handleInfoBannerClick } = useInfoBanner('bookings');

  if (bookings.length === 0) {
    return (
      <InfoBanner
        type="bookings"
        title={title}
        description={description}
        buttonTitle={buttonTitle}
        onClick={handleInfoBannerClick}
      />
    );
  }

  return (
    <ul className={styles.list}>
      {bookings.map(({ id, event: { title, price, date, location, image } }: BookingType, index: number) => {
        const handleBookingDeleteClick = () => onBookingDeleteClick(id);

        return (
          <li key={id}>
            <EventCardTab
              type="bookings"
              index={index}
              title={title}
              price={price}
              date={date}
              location={location}
              image={image}
              onDeleteClick={handleBookingDeleteClick}
            />
          </li>
        );
      })}
    </ul>
  );
};

export { BookingsTab };

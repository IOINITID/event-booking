// Components
import { Loader } from '../loader';
import { InfoBanner } from '../info-banner';
import { EventCardTab } from '../event-card-tab';

// Types
import { BookingsTabProps } from './types';
import { BookingType } from '../../store/bookingsSlice/types';

// Hooks
import { useInfoBanner } from '../info-banner/hooks';

// Styles
import { styles } from './styles';

const BookingsTab = ({ isLoading, bookings, onBookingDeleteClick }: BookingsTabProps) => {
  const { title, description, buttonTitle, handleInfoBannerClick } = useInfoBanner('bookings');

  if (isLoading) {
    return <Loader />;
  }

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

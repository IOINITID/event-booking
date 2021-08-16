export type InfoBannerType = 'events' | 'bookings';

export type InfoBannerProps = {
  type: InfoBannerType;
  title: string;
  description: string;
  buttonTitle: string;
  onClick: () => void;
};

import { ControlType } from '../../store/bookingsSlice/types';

export type EventCardTabProps = {
  type: ControlType;
  index: number;
  title: string;
  price: string;
  date: string;
  location: string;
  image: string;
  onDeleteClick: () => void;
};

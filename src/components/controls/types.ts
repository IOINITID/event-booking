import { ControlType } from '../../store/bookingsSlice/types';

export type ControlsProps = {
  controlType: ControlType;
  bookingsCount: number;
  eventsCount: number;
  onControlClick: (type: ControlType) => void;
};

export type ControlsDataType = {
  title: string;
  type: ControlType;
  length?: number;
};

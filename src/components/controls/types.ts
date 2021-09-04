import { BookingsControlsCountsType, ControlType } from '../../store/bookingsSlice/types';

export type ControlsProps = {
  controlType: ControlType;
  controlsCounts: BookingsControlsCountsType;
  onControlClick: (type: ControlType) => void;
};

export type ControlsDataType = {
  title: string;
  type: ControlType;
  length?: number;
};

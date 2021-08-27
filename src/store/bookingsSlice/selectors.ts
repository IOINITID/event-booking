import { RootState } from '../index';

export const controlTypeSelector = (state: RootState) => state.bookings.controlType;
export const userBookingsSelector = (state: RootState) => state.bookings.userBookings;

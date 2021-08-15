import { RootState } from '../index';

export const userTokenSelector = (state: RootState) => state.user.token;
export const userIdSelector = (state: RootState) => state.user.id;

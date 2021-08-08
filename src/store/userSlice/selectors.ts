import { RootState } from '../index';

export const userTokenSelector = (state: RootState) => state.user.token;
export const userUserIdSelector = (state: RootState) => state.user.userId;

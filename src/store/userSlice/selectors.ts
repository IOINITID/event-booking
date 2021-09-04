import { RootState } from '../index';

export const tokenSelector = (state: RootState) => state.user.token;
export const idSelector = (state: RootState) => state.user.id;

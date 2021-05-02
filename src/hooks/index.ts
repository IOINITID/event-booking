import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

export const useDispatchTyped = () => useDispatch<AppDispatch>();

export const useSelectorTyped: TypedUseSelectorHook<RootState> = useSelector;

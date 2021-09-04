import { ModeType } from '../types/types';

const MODE: ModeType = 'production';
const PRODUCTION_URL = 'https://ioinitid-event-booking-server.herokuapp.com/graphql';
const DEVELOPMENT_URL = 'http://localhost:8080/graphql';

export const REQUEST_URL = MODE === 'production' ? PRODUCTION_URL : DEVELOPMENT_URL;

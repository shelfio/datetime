import type dayjs from 'dayjs';
import nextDay from './utils/nextDay';

export default (date: dayjs.ConfigType): Date => nextDay(date, 0);

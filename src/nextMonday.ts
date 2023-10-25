import type dayjs from 'dayjs';
import nextDay from './utils/nextDay.js';

export default (date: dayjs.ConfigType): Date => nextDay(date, 1);

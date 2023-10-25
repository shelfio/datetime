import type dayjs from 'dayjs';
import nextMonday from './nextMonday.js';
import startOfDay from './startOfDay.js';

export default (date: dayjs.ConfigType): Date => nextMonday(startOfDay(date));

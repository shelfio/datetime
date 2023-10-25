import type dayjs from 'dayjs';
import nextMonday from './nextMonday.js';
import nextSunday from './nextSunday.js';
import endOfDay from './endOfDay.js';

export default (date: dayjs.ConfigType): Date => nextSunday(nextMonday(endOfDay(date)));

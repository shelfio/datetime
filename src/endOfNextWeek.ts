import type dayjs from 'dayjs';
import nextMonday from './nextMonday';
import nextSunday from './nextSunday';
import endOfDay from './endOfDay';

export default (date: dayjs.ConfigType): Date => nextSunday(nextMonday(endOfDay(date)));

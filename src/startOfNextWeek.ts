import type dayjs from 'dayjs';
import nextMonday from './nextMonday';
import startOfDay from './startOfDay';

export default (date: dayjs.ConfigType): Date => nextMonday(startOfDay(date));

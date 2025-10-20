import dayjs from 'dayjs';
import {DATE_FORMATS} from './utils/formats.js';

export default (date: string | Date): string => {
  if (typeof date === 'string') {
    return date.slice(23);
  }

  return dayjs(date).format(DATE_FORMATS.TIMEZONE_OFFSET);
};

import dayjs from 'dayjs';
import {isString} from 'lodash';

export default (date: string | Date): string => {
  if (isString(date)) {
    return date.slice(23);
  }

  return dayjs(date).format('Z');
};

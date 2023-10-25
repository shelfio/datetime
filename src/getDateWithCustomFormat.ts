import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat.js';
import advancedFormat from 'dayjs/plugin/advancedFormat.js';
import isDate from './isDate.js';

dayjs.extend(localizedFormat);
dayjs.extend(advancedFormat);

export default ({date, dateFormat}: {date: dayjs.ConfigType; dateFormat: string}): string => {
  if (!isDate(date)) {
    return '';
  }

  return dayjs(date).format(dateFormat).toString();
};

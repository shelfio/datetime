import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import isDate from './isDate';

dayjs.extend(localizedFormat);
dayjs.extend(advancedFormat);

export default ({date, dateFormat}: {date: dayjs.ConfigType; dateFormat: string}): string => {
  if (!isDate(date)) {
    return '';
  }

  return dayjs(date).format(dateFormat).toString();
};

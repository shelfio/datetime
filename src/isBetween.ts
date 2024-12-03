import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween.js';

dayjs.extend(isBetween);

export default (
  dateLeft: dayjs.ConfigType,
  dateMiddle: dayjs.ConfigType,
  dateRight: dayjs.ConfigType
): boolean => dayjs(dateMiddle).isBetween(dayjs(dateLeft), dayjs(dateRight));

import dayjs from 'dayjs';

export default (dateLeft: dayjs.ConfigType, dateRight: dayjs.ConfigType): boolean =>
  dayjs(dateLeft).isSame(dayjs(dateRight));

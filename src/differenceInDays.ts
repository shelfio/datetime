import dayjs from 'dayjs';

export default (dateLeft: dayjs.ConfigType, dateRight: dayjs.ConfigType): number =>
  dayjs(dateLeft).diff(dayjs(dateRight), 'day');

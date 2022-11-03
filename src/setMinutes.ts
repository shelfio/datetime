import dayjs from 'dayjs';

export default (date: dayjs.ConfigType, minutes: number): Date =>
  dayjs(date).minute(minutes).toDate();

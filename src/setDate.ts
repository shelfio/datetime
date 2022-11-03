import dayjs from 'dayjs';

export default (date: dayjs.ConfigType, dayOfMonth: number): Date =>
  dayjs(date).date(dayOfMonth).toDate();

import dayjs from 'dayjs';

export default (date: dayjs.ConfigType, amount: number): Date =>
  dayjs(date).subtract(amount, 'second').toDate();

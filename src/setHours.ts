import dayjs from 'dayjs';

export default (date: dayjs.ConfigType, hours: number): Date => dayjs(date).hour(hours).toDate();

import dayjs from 'dayjs';

export default (date: dayjs.ConfigType): Date => dayjs(date).endOf('month').toDate();

import dayjs from 'dayjs';

export default (date: dayjs.ConfigType): Date => dayjs(date).startOf('day').toDate();

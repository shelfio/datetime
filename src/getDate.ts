import dayjs from 'dayjs';

export default (date: dayjs.ConfigType): number => dayjs(date).date();

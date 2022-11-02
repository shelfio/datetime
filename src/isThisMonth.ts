import dayjs from 'dayjs';

export default (date: dayjs.ConfigType): boolean => dayjs(date).month() === dayjs().month();

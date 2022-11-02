import dayjs from 'dayjs';

export default (date: dayjs.ConfigType): Date => {
  const isoString = dayjs(date).toISOString();

  return dayjs(isoString).toDate();
};

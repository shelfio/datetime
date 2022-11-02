import dayjs from 'dayjs';

export default (date: dayjs.ConfigType): Date => {
  const dateTime = dayjs(date);

  if (dateTime.second() < 30) {
    return dateTime.startOf('minute').toDate();
  }

  return dateTime.add(1, 'minute').startOf('minute').toDate();
};

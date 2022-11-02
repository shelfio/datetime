import dayjs from 'dayjs';

export default (date: dayjs.ConfigType, day: number): Date => {
  const dateInstance = dayjs(date);

  let delta = day - dateInstance.day();

  if (delta <= 0) {
    delta += 7;
  }

  return dateInstance.add(delta, 'day').toDate();
};

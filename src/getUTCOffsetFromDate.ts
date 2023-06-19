import dayjs from 'dayjs';

export default (date: string | Date): string => {
  if (typeof date === 'string') {
    return date.slice(23);
  }

  return dayjs(date).format('Z');
};

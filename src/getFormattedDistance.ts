import type dayjs from 'dayjs';
import formatDistance from './formatDistance';

export default (date: dayjs.ConfigType): string =>
  formatDistance(date, new Date(), {addSuffix: true});

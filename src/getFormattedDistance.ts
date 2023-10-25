import type dayjs from 'dayjs';
import formatDistance from './formatDistance.js';

export default (date: dayjs.ConfigType): string =>
  formatDistance(date, new Date(), {addSuffix: true});

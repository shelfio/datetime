import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime.js';
import type {DistanceOptions} from './types/index.js';

dayjs.extend(relativeTime);

export default (
  date: dayjs.ConfigType,
  baseDate: dayjs.ConfigType,
  options: DistanceOptions = {}
): string => {
  const {addSuffix} = options;

  const baseDateInstance = dayjs(baseDate);

  return dayjs(date).from(baseDateInstance, !addSuffix);
};

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import type {ConfigType} from 'dayjs';
import type {DateRange} from './types';

dayjs.extend(relativeTime);

export default (from: ConfigType, to: ConfigType, parts: number, isExact = true): DateRange[] => {
  const fromDate = dayjs(from);
  const toDate = dayjs(to);
  const duration = toDate.diff(fromDate);
  const interval = Math.floor(duration / parts);

  return Array.from({length: parts}, (_, i) => {
    const startDate = fromDate.add(interval * i);
    let endDate = fromDate.add(interval * (i + 1));

    if (!isExact && i !== parts - 1) {
      endDate = endDate.subtract(1, 'millisecond');
    }

    return {
      from: startDate.toISOString(),
      to: endDate.toISOString(),
    };
  });
};

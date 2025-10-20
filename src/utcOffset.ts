import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import format from './format.js';
import {DATE_FORMATS} from './utils/formats.js';

dayjs.extend(utc);
dayjs.extend(timezone);

const DEFAULT_DATE_FORMAT = DATE_FORMATS.ISO_OFFSET_MS;

export default (date: Date, timeZone: string, dateFormat = DEFAULT_DATE_FORMAT): string =>
  format(dayjs.tz(date, timeZone), dateFormat);

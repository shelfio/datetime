import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc.js';
import timezone from 'dayjs/plugin/timezone.js';
import format from './format.js';

dayjs.extend(utc);
dayjs.extend(timezone);

const DEFAULT_DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSZ';

export default (date: Date, timeZone: string, dateFormat = DEFAULT_DATE_FORMAT): string =>
  format(dayjs.tz(date, timeZone), dateFormat);

import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import format from './format';

dayjs.extend(utc);
dayjs.extend(timezone);

const DEFAULT_DATE_FORMAT = 'YYYY-MM-DDTHH:mm:ss.SSSZ';

export default (date: Date, timeZone: string, dateFormat = DEFAULT_DATE_FORMAT): string =>
  format(dayjs.tz(date, timeZone), dateFormat);

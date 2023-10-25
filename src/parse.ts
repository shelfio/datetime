import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat.js';

dayjs.extend(customParseFormat);

export default (date: dayjs.ConfigType, template: string | string[]): Date =>
  dayjs(date, template).toDate();

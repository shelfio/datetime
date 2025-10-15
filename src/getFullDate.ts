import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat.js';
import {DATE_FORMATS} from './utils/formats.js';

dayjs.extend(localizedFormat);

export default (date: dayjs.ConfigType): string =>
  dayjs(date).format(DATE_FORMATS.LOCALIZED_DATETIME_LONG).toString();

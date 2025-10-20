import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData.js';
import localizedFormat from 'dayjs/plugin/localizedFormat.js';
import {DATE_FORMATS} from './utils/formats.js';

dayjs.extend(localeData);
dayjs.extend(localizedFormat);

export default () => {
  const localeData = dayjs().localeData();

  return {
    full: localeData.longDateFormat(DATE_FORMATS.LOCALIZED_TIME_LONG),
    long: localeData.longDateFormat(DATE_FORMATS.LOCALIZED_TIME_LONG),
    medium: localeData.longDateFormat(DATE_FORMATS.LOCALIZED_TIME_LONG),
    short: localeData.longDateFormat(DATE_FORMATS.LOCALIZED_TIME_SHORT),
  };
};

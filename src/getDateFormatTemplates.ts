import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData.js';
import {DATE_FORMATS} from './utils/formats.js';

dayjs.extend(localeData);

export default () => {
  const localeData = dayjs().localeData();

  return {
    full: localeData.longDateFormat(DATE_FORMATS.LOCALIZED_DATE_MEDIUM),
    long: localeData.longDateFormat(DATE_FORMATS.LOCALIZED_DATE_MEDIUM),
    medium: localeData.longDateFormat(DATE_FORMATS.LOCALIZED_DATE_MEDIUM),
    short: localeData.longDateFormat(DATE_FORMATS.LOCALIZED_DATE_SHORT),
  };
};

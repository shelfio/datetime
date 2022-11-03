import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localeData);
dayjs.extend(localizedFormat);

export default () => {
  const localeData = dayjs().localeData();

  return {
    full: localeData.longDateFormat('LTS'),
    long: localeData.longDateFormat('LTS'),
    medium: localeData.longDateFormat('LTS'),
    short: localeData.longDateFormat('LT'),
  };
};

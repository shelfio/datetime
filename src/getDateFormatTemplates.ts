import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';

dayjs.extend(localeData);

export default () => {
  const localeData = dayjs().localeData();

  return {
    full: localeData.longDateFormat('LL'),
    long: localeData.longDateFormat('LL'),
    medium: localeData.longDateFormat('LL'),
    short: localeData.longDateFormat('L'),
  };
};

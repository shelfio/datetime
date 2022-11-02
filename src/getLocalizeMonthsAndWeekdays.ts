import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import times from 'lodash/times';
import compact from 'lodash/compact';

dayjs.extend(localeData);

export default () => {
  const localeData = dayjs().localeData();

  const monthNumbers = times(12, Number);
  const weekdaysNumbers = times(7, Number);

  return {
    monthsShort: compact(monthNumbers.map(month => localeData.monthsShort()[month])),
    monthsFull: compact(monthNumbers.map(month => localeData.months()[month])),
    weekdaysFull: compact(weekdaysNumbers.map(day => localeData.weekdays()[day])),
    weekdaysAbbreviated: compact(weekdaysNumbers.map(day => localeData.weekdaysShort()[day])),
    weekdaysShort: compact(weekdaysNumbers.map(day => localeData.weekdaysMin()[day])),
  };
};

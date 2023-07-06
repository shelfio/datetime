import dayjs from 'dayjs';
import localeDataPlugin from 'dayjs/plugin/localeData';

dayjs.extend(localeDataPlugin);

export default () => {
  const localeData = dayjs().localeData();

  const monthNumbers = Array.from({length: 12}, (_, i) => i);
  const weekdaysNumbers = Array.from({length: 7}, (_, i) => i);

  return {
    monthsShort: monthNumbers.map(month => localeData.monthsShort()[month]),
    monthsFull: monthNumbers.map(month => localeData.months()[month]),
    weekdaysFull: weekdaysNumbers.map(day => localeData.weekdays()[day]),
    weekdaysAbbreviated: weekdaysNumbers.map(day => localeData.weekdaysShort()[day]),
    weekdaysShort: weekdaysNumbers.map(day => localeData.weekdaysMin()[day]),
  };
};

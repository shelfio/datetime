import dayjs from 'dayjs';
import localeDataPlugin from 'dayjs/plugin/localeData';

dayjs.extend(localeDataPlugin);
const localeData = dayjs().localeData();

export default () => {
  const monthNumbers = Array.from({length: 12}, (_, i) => i);
  const weekdaysNumbers = Array.from({length: 7}, (_, i) => i);

  return {
    monthsShort: monthNumbers.map(month => localeData.monthsShort()[month]).filter(Boolean),
    monthsFull: monthNumbers.map(month => localeData.months()[month]).filter(Boolean),
    weekdaysFull: weekdaysNumbers.map(day => localeData.weekdays()[day]).filter(Boolean),
    weekdaysAbbreviated: weekdaysNumbers
      .map(day => localeData.weekdaysShort()[day])
      .filter(Boolean),
    weekdaysShort: weekdaysNumbers.map(day => localeData.weekdaysMin()[day]).filter(Boolean),
  };
};

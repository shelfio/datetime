import getLocalizeMonthsAndWeekdays from './getLocalizeMonthsAndWeekdays';
import setGlobalLocale from './setGlobalLocale';

describe('getLocalizeMonthsAndWeekdays', () => {
  it('should return localized months and weekdays for en', () => {
    const result = {
      monthsFull: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      monthsShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      weekdaysAbbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      weekdaysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
    };

    expect(getLocalizeMonthsAndWeekdays()).toEqual(result);
  });

  it('should return localized months and weekdays for uk', () => {
    const result = {
      monthsFull: [
        'січень',
        'лютий',
        'березень',
        'квітень',
        'травень',
        'червень',
        'липень',
        'серпень',
        'вересень',
        'жовтень',
        'листопад',
        'грудень',
      ],
      monthsShort: [
        'січ',
        'лют',
        'бер',
        'квіт',
        'трав',
        'черв',
        'лип',
        'серп',
        'вер',
        'жовт',
        'лист',
        'груд',
      ],
      weekdaysAbbreviated: ['ндл', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
      weekdaysFull: ['неділя', 'понеділок', 'вівторок', 'середа', 'четвер', 'п’ятниця', 'субота'],
      weekdaysShort: ['нд', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
    };

    setGlobalLocale('uk');

    expect(getLocalizeMonthsAndWeekdays()).toEqual(result);
  });
});

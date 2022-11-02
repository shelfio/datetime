import getShortMonthDayYearDate from './getShortMonthDayYearDate';
import setGlobalLocale from './setGlobalLocale';

describe('getShortMonthDayYearDate', () => {
  it('should return short month day year date with default locale', () => {
    expect(getShortMonthDayYearDate(new Date('03 June 2020'))).toBe('Jun 3, 2020');
  });

  it('should return short month day year date with uk locale', () => {
    setGlobalLocale('uk');

    expect(getShortMonthDayYearDate(new Date('03 June 2020'))).toBe('черв 3, 2020');
  });
});

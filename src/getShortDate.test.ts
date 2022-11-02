import getShortDate from './getShortDate';
import setGlobalLocale from './setGlobalLocale';

describe('getShortDate', () => {
  it('should return short date with default locale', () => {
    expect(getShortDate(new Date('04.04.2020'))).toBe('4 Apr 2020');
  });

  it('should return short date with uk locale', () => {
    setGlobalLocale('uk');

    expect(getShortDate(new Date('04.04.2020'))).toBe('4 квіт 2020');
  });
});

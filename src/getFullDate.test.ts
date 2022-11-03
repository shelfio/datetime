import getFullDate from './getFullDate';
import setGlobalLocale from './setGlobalLocale';

describe('getFullDate', () => {
  it('should return full date with default language', () => {
    expect(getFullDate(new Date('04.04.2020'))).toBe('April 4, 2020 12:00 AM');
  });

  it('should return full date with uk language', () => {
    setGlobalLocale('uk');

    expect(getFullDate(new Date('04.04.2020'))).toBe('4 квітня 2020 р., 00:00');
  });
});

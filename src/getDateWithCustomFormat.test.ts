import getDateWithCustomFormat from './getDateWithCustomFormat';
import setGlobalLocale from './setGlobalLocale';

describe('getDateWithCustomFormat', () => {
  beforeEach(() => {
    setGlobalLocale('uk');
  });

  it('should return locale date with custom format', () => {
    const result = getDateWithCustomFormat({
      date: new Date('2016'),
      dateFormat: 'MMMM D, YYYY',
    });
    const expected = 'січень 1, 2016';

    expect(result).toEqual(expected);
  });

  it('should return empty string invalid date passed', () => {
    const result = getDateWithCustomFormat({
      date: 'random value',
      dateFormat: 'MMMM D, YYYY',
    });
    const expected = '';

    expect(result).toEqual(expected);
  });
});

import getFormattedDistance from './getFormattedDistance';
import setGlobalLocale from './setGlobalLocale';

describe('getFormattedDistance', () => {
  it('should return time distance from now with default locale', () => {
    jest.useFakeTimers().setSystemTime(new Date(2022, 3, 4, 10, 32, 0).getTime());

    expect(getFormattedDistance(new Date('2016'))).toBe('6 years ago');
  });

  it('should return time distance from now with uk locale', () => {
    jest.useFakeTimers().setSystemTime(new Date(2022, 3, 4, 10, 32, 0).getTime());

    setGlobalLocale('uk');

    expect(getFormattedDistance(new Date('2016'))).toBe('6 років тому');
  });
});

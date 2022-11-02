import getWeekStartsOn from './getWeekStartsOn';
import setGlobalLocale from './setGlobalLocale';

describe('getWeekStartsOn', () => {
  it('should return value of week start with default locale', () => {
    expect(getWeekStartsOn()).toBe(0);
  });

  it('should return value of week start with uk locale', () => {
    setGlobalLocale('uk');

    expect(getWeekStartsOn()).toBe(1);
  });
});

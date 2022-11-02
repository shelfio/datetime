import lastDayOfMonth from './lastDayOfMonth';

describe('lastDayOfMonth', () => {
  it('returns the date with the time set to 00:00:00 and the date set to the last day of a month', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = lastDayOfMonth(date);
    const expected = new Date(2014, 8 /* Sep */, 30);

    expect(result).toEqual(expected);
  });

  it('accepts a timestamp', () => {
    const date = new Date(2014, 7 /* Aug */, 2, 11, 55, 0).getTime();
    const result = lastDayOfMonth(date);
    const expected = new Date(2014, 7 /* Aug */, 31);

    expect(result).toEqual(expected);
  });

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    lastDayOfMonth(date);
    const expected = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);

    expect(date).toEqual(expected);
  });
});

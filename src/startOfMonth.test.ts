import startOfMonth from './startOfMonth';

describe('startOfMonth', () => {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a month', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = startOfMonth(date);
    const expected = new Date(2014, 8 /* Sep */, 1);

    expect(result).toEqual(expected);
  });

  it('accepts a timestamp', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    const result = startOfMonth(date);
    const expected = new Date(2014, 8 /* Sep */, 1);

    expect(result).toEqual(expected);
  });
});

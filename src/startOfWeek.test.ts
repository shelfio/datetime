import startOfWeek from './startOfWeek';

describe('startOfWeek', () => {
  it('returns the date with the time set to 00:00:00 and the date set to the first day of a week', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = startOfWeek(date);
    const expected = new Date(2014, 7 /* Aug */, 31);

    expect(result).toEqual(expected);
  });
});

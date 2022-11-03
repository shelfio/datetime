import lastDayOfWeek from './lastDayOfWeek';

describe('lastDayOfWeek', () => {
  it('returns the date with the time set to 00:00:00 and the date set to the last day of a week', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = lastDayOfWeek(date);
    const expected = new Date(2014, 8 /* Sep */, 6);

    expect(result).toEqual(expected);
  });
});

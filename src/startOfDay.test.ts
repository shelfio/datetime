import startOfDay from './startOfDay';

describe('startOfDay', () => {
  it('returns the date with the time set to 00:00:00', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = startOfDay(date);
    const expected = new Date(2014, 8 /* Sep */, 2, 0, 0, 0, 0);

    expect(result).toEqual(expected);
  });

  it('accepts a timestamp', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    const result = startOfDay(date);
    const expected = new Date(2014, 8 /* Sep */, 2, 0, 0, 0, 0);

    expect(result).toEqual(expected);
  });
});

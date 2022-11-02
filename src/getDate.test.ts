import getDate from './getDate';

describe('getDate', () => {
  it('returns the day of the month of the given date', () => {
    const result = getDate(new Date(2012, 1 /* Feb */, 29));

    expect(result).toEqual(29);
  });

  it('accepts a timestamp', () => {
    const result = getDate(new Date(2014, 11 /* Dec */, 31).getTime());

    expect(result).toEqual(31);
  });
});

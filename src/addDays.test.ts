import addDays from './addDays';

describe('addDays', () => {
  it('adds the given number of months', () => {
    const result = addDays(new Date(2014, 8, 1), 5);

    expect(result).toEqual(new Date(2014, 8, 6));
  });

  it('accepts a timestamp', () => {
    const result = addDays(new Date(2014, 8, 1).getTime(), 12);

    expect(result).toEqual(new Date(2014, 8, 13));
  });

  it('converts a fractional number to an integer', () => {
    const result = addDays(new Date(2014, 8, 1), 5.75);

    expect(result).toEqual(new Date(2014, 8, 7));
  });

  it('implicitly converts number arguments', () => {
    const result = addDays(new Date(2014, 8, 1), '5' as any);

    expect(result).toEqual(new Date(2014, 8, 6));
  });

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8, 1);
    addDays(date, 12);

    expect(date).toEqual(new Date(2014, 8, 1));
  });

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', () => {
    const date = new Date(2014, 11, 31);
    const result = addDays(date, 2);

    expect(result).toEqual(new Date(2015, 0, 2));
  });

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = addDays(new Date(NaN), 5);

    expect(result instanceof Date && isNaN(result.getTime())).toBeTruthy();
  });

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = addDays(new Date(2014, 8 /* Sep */, 1), NaN);

    expect(result instanceof Date && isNaN(result.getTime())).toBeTruthy();
  });
});

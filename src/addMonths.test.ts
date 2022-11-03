import addMonths from './addMonths';

describe('addMonths', () => {
  it('adds the given number of months', () => {
    const result = addMonths(new Date(2014, 8 /* Sep */, 1), 5);

    expect(result).toEqual(new Date(2015, 1 /* Feb */, 1));
  });

  it('accepts a timestamp', () => {
    const result = addMonths(new Date(2014, 8 /* Sep */, 1).getTime(), 12);

    expect(result).toEqual(new Date(2015, 8 /* Sep */, 1));
  });

  it('converts a fractional number to an integer', () => {
    const result = addMonths(new Date(2014, 8 /* Sep */, 1), 5.75);

    expect(result).toEqual(new Date(2015, 1 /* Feb */, 1));
  });

  it('implicitly converts number arguments', () => {
    const result = addMonths(new Date(2014, 8 /* Sep */, 1), '5' as any);

    expect(result).toEqual(new Date(2015, 1 /* Feb */, 1));
  });

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 1);
    addMonths(date, 12);

    expect(date).toEqual(new Date(2014, 8 /* Sep */, 1));
  });

  it('works well if the desired month has fewer days and the provided date is in the last day of a month', () => {
    const date = new Date(2014, 11 /* Dec */, 31);
    const result = addMonths(date, 2);

    expect(result).toEqual(new Date(2015, 1 /* Feb */, 28));
  });

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = addMonths(new Date(NaN), 5);

    expect(result instanceof Date && isNaN(result.getTime())).toBeTruthy();
  });

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = addMonths(new Date(2014, 8 /* Sep */, 1), NaN);

    expect(result instanceof Date && isNaN(result.getTime())).toBeTruthy();
  });
});

import addMinutes from './addMinutes';

describe('addMinutes', () => {
  it('adds the given number of minutes', () => {
    const result = addMinutes(new Date(2014, 8, 1), 30);

    expect(result).toEqual(new Date(2014, 8, 1, 0, 30));
  });

  it('accepts a timestamp', () => {
    const result = addMinutes(new Date(2014, 8, 1).getTime(), 20);

    expect(result).toEqual(new Date(2014, 8, 1, 0, 20));
  });

  it('converts a fractional number to minutes and seconds', () => {
    const result = addMinutes(new Date(2014, 8, 1), 30.75);

    expect(result).toEqual(new Date(2014, 8, 1, 0, 30, 45));
  });

  it('implicitly converts number arguments', () => {
    const result = addMinutes(new Date(2014, 8, 1), '30' as any);

    expect(result).toEqual(new Date(2014, 8, 1, 0, 30));
  });

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8, 1);
    addMinutes(date, 25);

    expect(date).toEqual(new Date(2014, 8, 1));
  });

  it('works well if the given number of minutes overlaps the month limit', () => {
    const date = new Date(2014, 11, 31);
    const result = addMinutes(date, 1441);

    expect(result).toEqual(new Date(2015, 0, 1, 0, 1));
  });

  it('returns `Invalid Date` if the given date is invalid', () => {
    const result = addMinutes(new Date(NaN), 30);

    expect(result instanceof Date && isNaN(result.getTime())).toBeTruthy();
  });

  it('returns `Invalid Date` if the given amount is NaN', () => {
    const result = addMinutes(new Date(2014, 8, 1), NaN);

    expect(result instanceof Date && isNaN(result.getTime())).toBeTruthy();
  });
});

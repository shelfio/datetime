import differenceInSeconds from './differenceInSeconds';

describe('differenceInSeconds', () => {
  it('returns the number of seconds between the given dates with `trunc` as a default rounding method', () => {
    const result = differenceInSeconds(
      new Date(2014, 6 /* Jul */, 2, 12, 30, 6, 29),
      new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 28.777)
    );

    expect(result).toEqual(-13);
  });

  it('returns the number of seconds between the given dates', () => {
    const result = differenceInSeconds(
      new Date(2014, 6 /* Jul */, 2, 12, 30, 20),
      new Date(2014, 6 /* Jul */, 2, 12, 30, 6)
    );

    expect(result).toEqual(14);
  });

  it('returns a negative number if the time value of the first date is smaller', () => {
    const result = differenceInSeconds(
      new Date(2014, 6 /* Jul */, 2, 12, 30, 6),
      new Date(2014, 6 /* Jul */, 2, 12, 30, 20)
    );

    expect(result).toEqual(-14);
  });

  it('returns a 0, not a negative 0 - issue #2555', () => {
    const result = differenceInSeconds(
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28.973),
      new Date(2021, 6 /* Jul */, 22, 6, 1, 28.976)
    );

    expect(result).toEqual(0);
  });

  it('accepts timestamps', () => {
    const result = differenceInSeconds(
      new Date(2014, 8 /* Sep */, 5, 18, 30, 45).getTime(),
      new Date(2014, 8 /* Sep */, 5, 18, 30, 15).getTime()
    );

    expect(result).toEqual(30);
  });
});

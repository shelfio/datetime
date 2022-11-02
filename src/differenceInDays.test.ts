import differenceInDays from './differenceInDays';

describe('differenceInDays', () => {
  it('returns the number of full days between the given dates', () => {
    const result = differenceInDays(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    );

    expect(result).toEqual(366);
  });

  it('returns a negative number if the time value of the first date is smaller', () => {
    const result = differenceInDays(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    );

    expect(result).toEqual(-366);
  });

  it('accepts timestamps', () => {
    const result = differenceInDays(
      new Date(2014, 8 /* Sep */, 5, 18, 0).getTime(),
      new Date(2014, 8 /* Sep */, 4, 6, 0).getTime()
    );

    expect(result).toEqual(1);
  });
});

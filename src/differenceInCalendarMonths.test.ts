import differenceInCalendarMonths from './differenceInCalendarMonths';

describe('differenceInCalendarMonths', () => {
  it('returns the number of calendar months between the given dates', () => {
    const result = differenceInCalendarMonths(
      new Date(2012, 6 /* Jul */, 2, 18, 0),
      new Date(2011, 6 /* Jul */, 2, 6, 0)
    );

    expect(result).toEqual(12);
  });

  it('returns a negative number if the time value of the first date is smaller', () => {
    const result = differenceInCalendarMonths(
      new Date(2011, 6 /* Jul */, 2, 6, 0),
      new Date(2012, 6 /* Jul */, 2, 18, 0)
    );

    expect(result).toEqual(-12);
  });

  it('accepts timestamps', () => {
    const result = differenceInCalendarMonths(
      new Date(2014, 7 /* Aug */, 2).getTime(),
      new Date(2010, 6 /* Jul */, 2).getTime()
    );

    expect(result).toEqual(49);
  });
});

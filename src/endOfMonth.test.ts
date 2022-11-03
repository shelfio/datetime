import endOfMonth from './endOfMonth';

describe('endOfMonth', () => {
  it('returns the date with the time set to 23:59:59.999 and the date set to the last day of a month', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    const result = endOfMonth(date);
    const expectedResult = new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999);

    expect(result).toEqual(expectedResult);
  });

  it('accepts a timestamp', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0).getTime();
    const result = endOfMonth(date);
    const expectedResult = new Date(2014, 8 /* Sep */, 30, 23, 59, 59, 999);

    expect(result).toEqual(expectedResult);
  });

  it('does not mutate the original date', () => {
    const date = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);
    endOfMonth(date);
    const expectedResult = new Date(2014, 8 /* Sep */, 2, 11, 55, 0);

    expect(date).toEqual(expectedResult);
  });
});

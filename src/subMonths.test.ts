import subMonths from './subMonths';

describe('subMonths', () => {
  it('subtracts the given number of months', () => {
    const result = subMonths(new Date(2015, 1 /* Feb */, 1), 5);
    const expected = new Date(2014, 8 /* Sep */, 1);

    expect(result).toEqual(expected);
  });

  it('accepts a timestamp', () => {
    const result = subMonths(new Date(2015, 8 /* Sep */, 1).getTime(), 12);
    const expected = new Date(2014, 8 /* Sep */, 1);

    expect(result).toEqual(expected);
  });
});

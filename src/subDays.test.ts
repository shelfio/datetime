import subDays from './subDays';

describe('subDays', () => {
  it('subtracts the given number of days', () => {
    const result = subDays(new Date(2014, 8 /* Sep */, 1), 10);
    const expected = new Date(2014, 7 /* Aug */, 22);

    expect(result).toEqual(expected);
  });

  it('accepts a timestamp', () => {
    const result = subDays(new Date(2014, 8 /* Sep */, 1).getTime(), 10);
    const expected = new Date(2014, 7 /* Aug */, 22);

    expect(result).toEqual(expected);
  });
});

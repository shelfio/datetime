import subWeeks from './subWeeks';

describe('subWeeks', () => {
  it('subtracts the given number of weeks', () => {
    const result = subWeeks(new Date(2014, 8 /* Sep */, 1), 4);
    const expected = new Date(2014, 7 /* Aug */, 4);

    expect(result).toEqual(expected);
  });

  it('accepts a timestamp', () => {
    const result = subWeeks(new Date(2014, 8 /* Sep */, 1).getTime(), 1);
    const expected = new Date(2014, 7 /* Aug */, 25);

    expect(result).toEqual(expected);
  });
});

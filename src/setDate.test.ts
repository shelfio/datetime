import setDate from './setDate';

describe('setDate', () => {
  it('sets the day of the month', () => {
    const result = setDate(new Date(2022, 8 /* Sep */, 6), 6);
    const expected = new Date(2022, 8 /* Sep */, 6);

    expect(result).toEqual(expected);
  });

  it('accepts a timestamp', () => {
    const result = setDate(new Date(2014, 8 /* Sep */, 1).getTime(), 25);
    const expected = new Date(2014, 8 /* Sep */, 25);

    expect(result).toEqual(expected);
  });

  it('converts a fractional number to an integer', () => {
    const result = setDate(new Date(2014, 8 /* Sep */, 1), 30.3);
    const expected = new Date(2014, 8 /* Sep */, 30);

    expect(result).toEqual(expected);
  });
});

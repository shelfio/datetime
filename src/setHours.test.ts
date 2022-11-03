import setHours from './setHours';

describe('setHours', () => {
  it('sets the amount of hours', () => {
    const result = setHours(new Date(2014, 8 /* Sep */, 1, 11, 30), 4);
    const expected = new Date(2014, 8 /* Sep */, 1, 4, 30);

    expect(result).toEqual(expected);
  });

  it('accepts a timestamp', () => {
    const result = setHours(new Date(2014, 8 /* Sep */, 1, 11).getTime(), 5);
    const expected = new Date(2014, 8 /* Sep */, 1, 5);

    expect(result).toEqual(expected);
  });

  it('converts a fractional number to an integer', () => {
    const result = setHours(new Date(2014, 8 /* Sep */, 1, 11, 30), 4.123);
    const expected = new Date(2014, 8 /* Sep */, 1, 4, 30);

    expect(result).toEqual(expected);
  });
});

import setMinutes from './setMinutes';

describe('setMinutes', () => {
  it('sets the minutes', () => {
    const result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), 45);
    const expected = new Date(2014, 8 /* Sep */, 1, 11, 45, 40);

    expect(result).toEqual(expected);
  });

  it('accepts a timestamp', () => {
    const result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30).getTime(), 5);
    const expected = new Date(2014, 8 /* Sep */, 1, 11, 5);

    expect(result).toEqual(expected);
  });

  it('converts a fractional number to an integer', () => {
    const result = setMinutes(new Date(2014, 8 /* Sep */, 1, 11, 30, 40), 45.54);
    const expected = new Date(2014, 8 /* Sep */, 1, 11, 45, 40);

    expect(result).toEqual(expected);
  });
});

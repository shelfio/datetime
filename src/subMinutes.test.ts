import subMinutes from './subMinutes';

describe('subMinutes', () => {
  it('subtracts the given number of minutes', () => {
    const result = subMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0), 30);
    const expected = new Date(2014, 6 /* Jul */, 10, 11, 30);

    expect(result).toEqual(expected);
  });

  it('accepts a timestamp', () => {
    const result = subMinutes(new Date(2014, 6 /* Jul */, 10, 12, 0).getTime(), 20);
    const expected = new Date(2014, 6 /* Jul */, 10, 11, 40);

    expect(result).toEqual(expected);
  });
});

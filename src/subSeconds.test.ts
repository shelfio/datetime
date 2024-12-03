import subSeconds from './subSeconds';

describe('subSeconds', () => {
  it('subtracts the given number of seconds', () => {
    const result = subSeconds(new Date(2014, 6 /* Jul */, 10, 12, 30, 30), 30);
    const expected = new Date(2014, 6 /* Jul */, 10, 12, 30, 0);

    expect(result).toEqual(expected);
  });

  it('accepts a timestamp', () => {
    const result = subSeconds(new Date(2014, 6 /* Jul */, 10, 12, 40, 20).getTime(), 20);
    const expected = new Date(2014, 6 /* Jul */, 10, 12, 40, 0);

    expect(result).toEqual(expected);
  });
});

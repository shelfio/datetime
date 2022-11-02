import roundToNearestMinutes from './roundToNearestMinutes';

describe('roundToNearestMinutes', () => {
  it('rounds given date to the nearest minute by default', () => {
    const result = roundToNearestMinutes(new Date(2014, 6 /* Jul */, 10, 12, 16, 16));
    const expected = new Date(2014, 6 /* Jul */, 10, 12, 16, 0);

    expect(result).toEqual(expected);
  });

  it('accepts a timestamp', () => {
    const result = roundToNearestMinutes(new Date(2014, 6 /* Jul */, 10, 12, 13, 16).getTime());
    const expected = new Date(2014, 6 /* Jul */, 10, 12, 13, 0);

    expect(result).toEqual(expected);
  });

  it('rounds up >=30 seconds', () => {
    const result = roundToNearestMinutes(new Date(2014, 6 /* Jul */, 10, 12, 13, 30));
    const expected = new Date(2014, 6 /* Jul */, 10, 12, 14, 0);

    expect(result).toEqual(expected);
  });

  it('rounds down <30 seconds', () => {
    const result = roundToNearestMinutes(new Date(2014, 6 /* Jul */, 10, 12, 13, 29, 999));
    const expected = new Date(2014, 6 /* Jul */, 10, 12, 13, 0);

    expect(result).toEqual(expected);
  });
});

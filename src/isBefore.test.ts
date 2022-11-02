import isBefore from './isBefore';

describe('isBefore', () => {
  it('returns true if the first date is before the second one', () => {
    const result = isBefore(new Date(1987, 1 /* Feb */, 11), new Date(1989, 6 /* Jul */, 10));

    expect(result).toBeTruthy();
  });

  it('returns false if the first date is after the second one', () => {
    const result = isBefore(new Date(1989, 6 /* Jul */, 10), new Date(1987, 1 /* Feb */, 11));

    expect(result).toBeFalsy();
  });

  it('returns false if the first date is equal to the second one', () => {
    const result = isBefore(new Date(1989, 6 /* Jul */, 10), new Date(1989, 6 /* Jul */, 10));

    expect(result).toBeFalsy();
  });
});

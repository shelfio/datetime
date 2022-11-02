import isEqual from './isEqual';

describe('isEqual', () => {
  it('returns true if the given dates are equal', () => {
    const result = isEqual(new Date(1987, 1 /* Feb */, 11), new Date(1987, 1 /* Feb */, 11));

    expect(result).toBeTruthy();
  });

  it('returns false if the given dates are not equal', () => {
    const result = isEqual(new Date(1989, 6 /* Jul */, 10), new Date(1987, 1 /* Feb */, 11));

    expect(result).toBeFalsy();
  });
});

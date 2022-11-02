import isValid from './isValid';

describe('isValid', () => {
  it('returns true if the given date is valid', () => {
    const result = isValid(new Date());

    expect(result).toBeTruthy();
  });

  it('returns false if the given date is invalid', () => {
    const result = isValid(new Date(''));

    expect(result).toBeFalsy();
  });

  it('accepts a timestamp', () => {
    expect(isValid(new Date(2014, 1 /* Feb */, 11).getTime())).toBeTruthy();
    expect(isValid(NaN)).toBeFalsy();
  });

  it('treats null as an invalid date', () => {
    const result = isValid(null);

    expect(result).toBeFalsy();
  });
});

import isDate from './isDate';

describe('isDate', () => {
  it('returns true if the given value is a date object', () => {
    expect(isDate(new Date())).toBeTruthy();
  });

  it('returns true if the given value is an Invalid Date', () => {
    expect(isDate(new Date(NaN))).toBeTruthy();
  });

  it('returns false if the given value is not a date object', () => {
    expect(!isDate(new Date().getTime())).toBeTruthy();
    expect(!isDate(new Date().toISOString())).toBeTruthy();
    expect(!isDate({})).toBeTruthy();
    expect(!isDate(null)).toBeTruthy();
    expect(!isDate(0)).toBeTruthy();
  });
});

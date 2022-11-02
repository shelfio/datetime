import isThisMonth from './isThisMonth';

describe('isThisMonth', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date(2014, 8 /* Sep */, 25).getTime());
  });

  it('returns true if the given date and the current date have the same month (and year)', () => {
    const date = new Date(2014, 8 /* Sep */, 15);

    expect(isThisMonth(date)).toBeTruthy();
  });

  it('returns false if the given date and the current date have different months', () => {
    const date = new Date(2013, 7 /* Aug */, 31);

    expect(isThisMonth(date)).toBeFalsy();
  });
});

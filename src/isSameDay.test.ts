import isSameDay from './isSameDay';

describe('isSameDay', () => {
  it('returns true if the given dates have the same day', () => {
    const result = isSameDay(
      new Date(2014, 8 /* Sep */, 4, 6, 0),
      new Date(2014, 8 /* Sep */, 4, 18, 0)
    );

    expect(result).toBeTruthy();
  });

  it('returns false if the given dates have different days', () => {
    const result = isSameDay(
      new Date(2014, 8 /* Sep */, 4, 23, 59),
      new Date(2014, 8 /* Sep */, 5, 0, 0)
    );

    expect(result).toBeFalsy();
  });
});

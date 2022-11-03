import startOfTomorrow from './startOfTomorrow';

describe('startOfTomorrow', () => {
  it('returns the start of tomorrow', () => {
    jest.useFakeTimers().setSystemTime(new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime());

    const result = startOfTomorrow();
    const expected = new Date(2014, 8 /* Sep */, 26);

    expect(result).toEqual(expected);
  });
});

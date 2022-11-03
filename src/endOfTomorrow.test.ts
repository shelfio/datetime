import endOfTomorrow from './endOfTomorrow';

describe('endOfTomorrow', () => {
  it('returns tomorrow with the time settled to 23:59:59.999', () => {
    jest.useFakeTimers().setSystemTime(new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime());

    const result = endOfTomorrow();
    const expectedResult = new Date(2014, 8 /* Sep */, 26, 23, 59, 59, 999);

    expect(result).toEqual(expectedResult);
  });
});

import formatDistanceToNow from './formatDistanceToNow';

describe('formatDistanceToNow', () => {
  beforeEach(() => {
    jest.useFakeTimers().setSystemTime(new Date(1986, 3, 4, 10, 32, 0).getTime());
  });

  it('less than a minute', () => {
    const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 40));
    const expectedResult = 'a few seconds';

    expect(result).toEqual(expectedResult);
  });

  it('1 minute', () => {
    const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 10));
    const expectedResult = 'a minute';

    expect(result).toEqual(expectedResult);
  });

  it('n minutes', () => {
    const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 29, 10));
    const expectedResult = '3 minutes';

    expect(result).toEqual(expectedResult);
  });

  it('about 1 hour', () => {
    const result = formatDistanceToNow(new Date(1986, 3, 4, 9, 32, 0));
    const expectedResult = 'an hour';

    expect(result).toEqual(expectedResult);
  });

  it('about n hours', () => {
    const result = formatDistanceToNow(new Date(1986, 3, 4, 7, 32, 0));
    const expectedResult = '3 hours';

    expect(result).toEqual(expectedResult);
  });

  it('1 day', () => {
    const result = formatDistanceToNow(new Date(1986, 3, 3, 10, 32, 0));
    const expectedResult = 'a day';

    expect(result).toEqual(expectedResult);
  });

  it('n days', () => {
    const result = formatDistanceToNow(new Date(1986, 3, 1, 10, 32, 0));
    const expectedResult = '3 days';

    expect(result).toEqual(expectedResult);
  });

  it('about 1 month', () => {
    const result = formatDistanceToNow(new Date(1986, 2, 4, 10, 32, 0));
    const expectedResult = 'a month';

    expect(result).toEqual(expectedResult);
  });

  it('n months', () => {
    const result = formatDistanceToNow(new Date(1986, 0, 4, 10, 32, 0));
    const expectedResult = '3 months';

    expect(result).toEqual(expectedResult);
  });

  it('about 1 year', () => {
    const result = formatDistanceToNow(new Date(1985, 3, 4, 10, 32, 0));
    const expectedResult = 'a year';

    expect(result).toEqual(expectedResult);
  });

  it('adds a past suffix', () => {
    const result = formatDistanceToNow(new Date(1986, 3, 4, 10, 31, 35), {
      addSuffix: true,
    });
    const expectedResult = 'a few seconds ago';

    expect(result).toEqual(expectedResult);
  });

  it('adds a future suffix', () => {
    const result = formatDistanceToNow(new Date(1986, 3, 4, 11, 32, 0), {
      addSuffix: true,
    });
    const expectedResult = 'in an hour';

    expect(result).toEqual(expectedResult);
  });
});

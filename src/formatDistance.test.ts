import formatDistance from './formatDistance';

describe('formatDistance', () => {
  it('less than a minute', () => {
    const result = formatDistance(
      new Date(1986, 3, 4, 10, 32, 0),
      new Date(1986, 3, 4, 10, 32, 20)
    );
    const expectedResult = 'a few seconds';

    expect(result).toEqual(expectedResult);
  });

  it('1 minute', () => {
    const result = formatDistance(
      new Date(1986, 3, 4, 10, 32, 0),
      new Date(1986, 3, 4, 10, 32, 50)
    );
    const expectedResult = 'a minute';

    expect(result).toEqual(expectedResult);
  });

  it('n minutes', () => {
    const result = formatDistance(
      new Date(1986, 3, 4, 10, 32, 0),
      new Date(1986, 3, 4, 10, 34, 50)
    );
    const expectedResult = '3 minutes';

    expect(result).toEqual(expectedResult);
  });

  it('about 1 hour', () => {
    const result = formatDistance(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 11, 32, 0));
    const expectedResult = 'an hour';

    expect(result).toEqual(expectedResult);
  });

  it('about n hours', () => {
    const result = formatDistance(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 13, 32, 0));
    const expectedResult = '3 hours';

    expect(result).toEqual(expectedResult);
  });

  it('1 day', () => {
    const result = formatDistance(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 5, 10, 32, 0));
    const expectedResult = 'a day';

    expect(result).toEqual(expectedResult);
  });

  it('n days', () => {
    const result = formatDistance(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 7, 10, 32, 0));
    const expectedResult = '3 days';

    expect(result).toEqual(expectedResult);
  });

  it('about 1 month', () => {
    const result = formatDistance(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 4, 4, 10, 32, 0));
    const expectedResult = 'a month';

    expect(result).toEqual(expectedResult);
  });

  it('n months', () => {
    const result = formatDistance(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 6, 4, 10, 32, 0));
    const expectedResult = '3 months';

    expect(result).toEqual(expectedResult);
  });

  it('about 1 year', () => {
    const result = formatDistance(new Date(1986, 3, 4, 10, 32, 0), new Date(1987, 3, 4, 10, 32, 0));
    const expectedResult = 'a year';

    expect(result).toEqual(expectedResult);
  });

  it('over 1 year', () => {
    const result = formatDistance(new Date(1986, 3, 4, 10, 32, 0), new Date(1987, 9, 4, 10, 32, 0));
    const expectedResult = '2 years';

    expect(result).toEqual(expectedResult);
  });

  it('adds a past suffix', () => {
    const result = formatDistance(
      new Date(1986, 3, 4, 10, 32, 0),
      new Date(1986, 3, 4, 10, 32, 25),
      {addSuffix: true}
    );
    const expectedResult = 'a few seconds ago';

    expect(result).toEqual(expectedResult);
  });

  it('adds a future suffix', () => {
    const result = formatDistance(
      new Date(1986, 3, 4, 11, 32, 0),
      new Date(1986, 3, 4, 10, 32, 0),
      {addSuffix: true}
    );
    const expectedResult = 'in an hour';

    expect(result).toEqual(expectedResult);
  });
});

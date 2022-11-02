import format from './format';

describe('format', () => {
  it('accepts a timestamp', () => {
    const date = new Date(2014, 3, 4).getTime();
    const result = format(date, 'YYYY-MM-DD');
    const expectedResult = '2014-04-04';

    expect(result).toEqual(expectedResult);
  });
});

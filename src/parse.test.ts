import parse from './parse';
import setGlobalLocale from './setGlobalLocale';

describe('parse', () => {
  it('return parsed date by format', () => {
    const result = parse('2018 July 2nd', 'YYYY MMMM Do');
    const expected = new Date(2018, 6 /* Jul */, 2);

    expect(result).toEqual(expected);
  });

  it('accepts new line charactor', () => {
    const result = parse('2014-04-04\n05:00:00', "YYYY-MM-DD'\n'HH:mm:ss");
    const expected = new Date(2014, 3 /* Apr */, 4, 5);

    expect(result).toEqual(expected);
  });

  it('should parse date with locale', () => {
    setGlobalLocale('uk');

    const result = parse('2014 квітень 4', 'YYYY MMMM D');
    const expected = new Date(2014, 3 /* Apr */, 4);

    expect(result).toEqual(expected);
  });
});

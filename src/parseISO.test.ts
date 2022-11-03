import parseISO from './parseISO';

describe('parseISO', () => {
  it('parses YYYY', () => {
    const result = parseISO('2014');
    const expected = new Date(2014, 0 /* Jan */, 1);

    expect(result).toEqual(expected);
  });

  it('parses YYYY-MM', () => {
    const result = parseISO('2014-02');
    const expected = new Date(2014, 1 /* Feb */, 1);

    expect(result).toEqual(expected);
  });

  it('parses YYYY-MM-DD', () => {
    const result = parseISO('2014-02-11');
    const expected = new Date(2014, 1, /* Feb */ 11);

    expect(result).toEqual(expected);
  });

  it('parses YYYYMMDD', () => {
    const result = parseISO('20140211');
    const expected = new Date(2014, 1 /* Feb */, 11);

    expect(result).toEqual(expected);
  });
});

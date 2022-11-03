import toDate from './toDate';

describe('toDate', () => {
  it('returns a clone of the given date', () => {
    const date = new Date(2016, 0, 1);
    const dateClone = toDate(date);
    dateClone.setFullYear(2015);
    const expected = new Date(2016, 0, 1);

    expect(date).toEqual(expected);
  });
});

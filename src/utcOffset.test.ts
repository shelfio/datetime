import utcOffset from './utcOffset';

describe('utcOffset', () => {
  it('returns converted date to given time-zone', () => {
    const date = new Date('2023-06-06T13:00:00.000Z');
    const convertedDate = utcOffset(date, 'Europe/Kiev');

    expect(convertedDate).toEqual('2023-06-06T16:00:00.000+03:00');
  });
});

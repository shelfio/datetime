import getDatePeriods from './getDatePeriods';
import setGlobalLocale from './setGlobalLocale';

describe('getDatePeriods', () => {
  beforeEach(() => {
    setGlobalLocale('uk');
  });

  it('should split one year to 12 parts', () => {
    const from = new Date('2022-05-10T00:00:00.000Z');
    const to = new Date('2023-05-10T00:00:00.000Z');
    const result = getDatePeriods(from, to, 12);

    expect(result).toHaveLength(12);
    expect(result).toEqual([
      {from: from.toISOString(), to: '2022-06-09T10:00:00.000Z'},
      {from: '2022-06-09T10:00:00.000Z', to: '2022-07-09T20:00:00.000Z'},
      {from: '2022-07-09T20:00:00.000Z', to: '2022-08-09T06:00:00.000Z'},
      {from: '2022-08-09T06:00:00.000Z', to: '2022-09-08T16:00:00.000Z'},
      {from: '2022-09-08T16:00:00.000Z', to: '2022-10-09T02:00:00.000Z'},
      {from: '2022-10-09T02:00:00.000Z', to: '2022-11-08T12:00:00.000Z'},
      {from: '2022-11-08T12:00:00.000Z', to: '2022-12-08T22:00:00.000Z'},
      {from: '2022-12-08T22:00:00.000Z', to: '2023-01-08T08:00:00.000Z'},
      {from: '2023-01-08T08:00:00.000Z', to: '2023-02-07T18:00:00.000Z'},
      {from: '2023-02-07T18:00:00.000Z', to: '2023-03-10T04:00:00.000Z'},
      {from: '2023-03-10T04:00:00.000Z', to: '2023-04-09T14:00:00.000Z'},
      {from: '2023-04-09T14:00:00.000Z', to: to.toISOString()},
    ]);
  });

  it('should split one month to 4 parts', () => {
    const from = new Date('2023-03-01T00:00:00.000Z');
    const to = new Date('2023-04-01T00:00:00.000Z');
    const result = getDatePeriods(from, to, 4);

    expect(result).toHaveLength(4);
    expect(result).toEqual([
      {from: from.toISOString(), to: '2023-03-08T18:00:00.000Z'},
      {from: '2023-03-08T18:00:00.000Z', to: '2023-03-16T12:00:00.000Z'},
      {from: '2023-03-16T12:00:00.000Z', to: '2023-03-24T06:00:00.000Z'},
      {from: '2023-03-24T06:00:00.000Z', to: to.toISOString()},
    ]);
  });

  it('should split one hour to 6 parts', () => {
    const from = new Date('2023-05-05T07:00:00.000Z');
    const to = new Date('2023-05-05T08:00:00.000Z');
    const result = getDatePeriods(from, to, 6);

    expect(result).toHaveLength(6);
    expect(result).toEqual([
      {from: from.toISOString(), to: '2023-05-05T07:10:00.000Z'},
      {from: '2023-05-05T07:10:00.000Z', to: '2023-05-05T07:20:00.000Z'},
      {from: '2023-05-05T07:20:00.000Z', to: '2023-05-05T07:30:00.000Z'},
      {from: '2023-05-05T07:30:00.000Z', to: '2023-05-05T07:40:00.000Z'},
      {from: '2023-05-05T07:40:00.000Z', to: '2023-05-05T07:50:00.000Z'},
      {from: '2023-05-05T07:50:00.000Z', to: to.toISOString()},
    ]);
  });

  it(`should split one month to 4 parts with 'to' less then next 'from'`, () => {
    const from = new Date('2023-03-01T00:00:00.000Z');
    const to = new Date('2023-04-01T00:00:00.000Z');
    const result = getDatePeriods(from, to, 4, false);

    expect(result).toHaveLength(4);
    expect(result).toEqual([
      {from: from.toISOString(), to: '2023-03-08T17:59:59.999Z'},
      {from: '2023-03-08T18:00:00.000Z', to: '2023-03-16T11:59:59.999Z'},
      {from: '2023-03-16T12:00:00.000Z', to: '2023-03-24T05:59:59.999Z'},
      {from: '2023-03-24T06:00:00.000Z', to: to.toISOString()},
    ]);
  });
});

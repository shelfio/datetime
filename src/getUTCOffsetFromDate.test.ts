import getUTCOffsetFromDate from './getUTCOffsetFromDate';

it('should return timezone from date string', () => {
  expect(getUTCOffsetFromDate('2019-01-25T00:00:00.000+05:00')).toEqual('+05:00');
});

it('should return timezone from date object', () => {
  expect(getUTCOffsetFromDate(new Date())).toEqual('+00:00');
});

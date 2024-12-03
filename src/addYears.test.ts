import addYears from './addYears';

it('adds the given number of years', () => {
  const result = addYears(new Date('2024-11-19'), 2);

  expect(result).toEqual(new Date('2026-11-19T00:00:00.000Z'));
});

it('does not mutate the original date', () => {
  const date = new Date('2024-11-19');
  addYears(date, 25);

  expect(date).toEqual(new Date('2024-11-19T00:00:00.000Z'));
});

it('returns `Invalid Date` if the given date is invalid', () => {
  const result = addYears(new Date(NaN), 30);

  expect(result instanceof Date && isNaN(result.getTime())).toBeTruthy();
});

it('returns `Invalid Date` if the given amount is NaN', () => {
  const result = addYears(new Date(2014, 8, 1), NaN);

  expect(result instanceof Date && isNaN(result.getTime())).toBeTruthy();
});

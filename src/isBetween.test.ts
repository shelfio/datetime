import isBetween from './isBetween';

const now = new Date('01 January 2020 14:48');

beforeAll(() => {
  jest.useFakeTimers();
  jest.setSystemTime(now);
});

const dateRight = new Date('01 January 2021 00:00');

it('should return false for now date', () => {
  const res = isBetween(now, now, dateRight);

  expect(res).toEqual(false);
});

it('should return false for before now date (-1s)', () => {
  const res = isBetween(now, +now - 1000, dateRight);

  expect(res).toEqual(false);
});

it('should return false for 1 year from start day of now', () => {
  const res = isBetween(now, new Date('01 January 2021 00:00:00'), dateRight);

  expect(res).toEqual(false);
});

it('should return false for more than 1 year from start day of now', () => {
  const res = isBetween(now, new Date('01 January 2021 00:00:01'), dateRight);

  expect(res).toEqual(false);
});

it.each(['01 January 2020 14:49', '31 December 2020 23:59:59'])(
  'should pass if publicationDate in range of one year',
  publicationDate => {
    const res = isBetween(now, new Date(publicationDate), dateRight);

    expect(res).toBeTruthy();
  }
);

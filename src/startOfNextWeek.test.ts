import startOfNextWeek from './startOfNextWeek';

describe('startOfNextWeek', () => {
  it('should return start of next week', () => {
    expect(startOfNextWeek(new Date('1 March 2022')).toDateString()).toBe('Mon Mar 07 2022');
  });
});

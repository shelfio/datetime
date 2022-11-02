import endOfNextWeek from './endOfNextWeek';

describe('endOfNextWeek', () => {
  it('should return valid end of next week by date', () => {
    const result = endOfNextWeek(new Date('1 March 2022'));

    expect(result.toDateString()).toBe('Sun Mar 13 2022');
  });
});

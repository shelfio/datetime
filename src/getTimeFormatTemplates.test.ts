import getTimeFormatTemplates from './getTimeFormatTemplates';

describe('getTimeFormatTemplates', () => {
  it('should return time format templates for en', () => {
    const result = getTimeFormatTemplates();
    const expectedResult = {
      full: 'h:mm:ss A',
      long: 'h:mm:ss A',
      medium: 'h:mm:ss A',
      short: 'h:mm A',
    };

    expect(result).toEqual(expectedResult);
  });
});

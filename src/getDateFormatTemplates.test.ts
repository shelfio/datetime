import setGlobalLocale from './setGlobalLocale';
import getDateFormatTemplates from './getDateFormatTemplates';

describe('getDateFormatTemplates', () => {
  it('should return date format templates', () => {
    const formatTemplates = {
      full: 'D MMMM YYYY р.',
      long: 'D MMMM YYYY р.',
      medium: 'D MMMM YYYY р.',
      short: 'DD.MM.YYYY',
    };

    setGlobalLocale('uk');

    expect(getDateFormatTemplates()).toEqual(formatTemplates);
  });
});

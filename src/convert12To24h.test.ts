import convert12To24h from './convert12To24h';

describe('convert12To24h', () => {
  it('returns correct hour', () => {
    expect(convert12To24h('AM', 12)).toEqual(0);
    expect(convert12To24h('AM', 1)).toEqual(1);
    expect(convert12To24h('PM', 12)).toEqual(12);
    expect(convert12To24h('PM', 1)).toEqual(13);
    expect(() => convert12To24h('PM', 13)).toThrow(
      'Hour should be an integer in the range from 1 to 12'
    );
    // @ts-ignore
    expect(() => convert12To24h('PM', '2')).toThrow(
      'Hour should be an integer in the range from 1 to 12'
    );
  });
});

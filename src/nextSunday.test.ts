import nextSunday from './nextSunday';

describe('nextSunday', () => {
  it('returns the following Sunday given various dates before the same', () => {
    expect(nextSunday(new Date(2020, 4 /* May */, 23))).toEqual(new Date(2020, 4 /* May */, 24));

    expect(nextSunday(new Date(2020, 4 /* May */, 22))).toEqual(new Date(2020, 4 /* May */, 24));

    expect(nextSunday(new Date(2020, 4 /* May */, 21))).toEqual(new Date(2020, 4 /* May */, 24));

    expect(nextSunday(new Date(2020, 4 /* May */, 20))).toEqual(new Date(2020, 4 /* May */, 24));

    expect(nextSunday(new Date(2020, 4 /* May */, 19))).toEqual(new Date(2020, 4 /* May */, 24));

    expect(nextSunday(new Date(2020, 4 /* May */, 18))).toEqual(new Date(2020, 4 /* May */, 24));

    expect(nextSunday(new Date(2020, 4 /* May */, 17))).toEqual(new Date(2020, 4 /* May */, 24));
  });
});

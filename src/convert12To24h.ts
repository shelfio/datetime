export default (ampm: 'AM' | 'PM', hour: number): number => {
  if (hour < 1 || hour > 12 || !Number.isInteger(hour)) {
    throw Error('Hour should be an integer in the range from 1 to 12');
  }

  if (hour === 12) {
    return ampm === 'AM' ? 0 : 12;
  }

  if (ampm === 'AM') {
    return hour;
  }

  return hour + 12;
};

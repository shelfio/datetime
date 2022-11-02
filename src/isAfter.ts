import dayjs from 'dayjs';
import type {OpUnitType} from 'dayjs';

export default (
  date: dayjs.ConfigType,
  dateToCompare: dayjs.ConfigType,
  unitType?: OpUnitType
): boolean => dayjs(date).isAfter(dayjs(dateToCompare), unitType);

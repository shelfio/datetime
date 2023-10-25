import dayjs from 'dayjs';
import type {Locale} from './types/index.js';
import './utils/importLocales.js';

export default (locale: Locale): void => {
  dayjs.locale(locale);
};

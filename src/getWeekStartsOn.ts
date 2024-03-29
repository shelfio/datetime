import dayjs from 'dayjs';
import localeData from 'dayjs/plugin/localeData.js';

dayjs.extend(localeData);

export default (): number => dayjs().localeData().firstDayOfWeek();

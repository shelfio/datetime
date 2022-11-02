import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

export default (date: dayjs.ConfigType): string => dayjs(date).format('D MMM YYYY').toString();

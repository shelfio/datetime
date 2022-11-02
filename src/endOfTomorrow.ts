import dayjs from 'dayjs';

export default (): Date => dayjs().add(1, 'day').endOf('day').toDate();

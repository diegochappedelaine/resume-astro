import dayjs from 'dayjs';

export const formatDate = (date: string) => {
  if (dayjs(date).isValid()) return dayjs(date).format('MMMM YYYY');
  return date;
};

export const splitStringInFragmentOfNChar = (str: string, n: number) =>
  str.match(new RegExp(`.{1,${n}}`, 'g'));

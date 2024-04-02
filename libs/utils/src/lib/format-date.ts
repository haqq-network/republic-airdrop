import moment from 'moment';

export function formatDate(date: string): string {
  const newDate = new Date(date);
  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;

  return `${day < 10 ? '0' + day : day}.${month < 10 ? '0' + month : month}`;
}

export function dateToWeekDayShort(date: Date): string {
  const newDate = new Date(date);
  const days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
  return days[newDate.getDay()];
}

export function toFullDate(date: string): string {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}

export function toTimeAgo(date: string): string {
  return moment(date).fromNow();
}

export function convertDateToMonthDay(date: string): string {
  const dateParts = date?.split('-');
  const year = dateParts?.[0];
  const month = dateParts?.[1];
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const monthAbbreviation = monthNames[parseInt(month) - 1];

  return `${monthAbbreviation} ${year}`;
}

import { ReactElement, memo, useCallback, useMemo } from 'react';
import { DateRangePicker as Picker } from '@wojtekmaj/react-daterange-picker';
import './date-range-picker.css';
import './calendar.css';
import { dateToWeekDayShort } from '@haqq-nft/utils';
import { ChevronDownIcon, CrossIcon } from '../icons/icons';

type ValuePiece = Date | null;
export type DateRangeValue = ValuePiece | [ValuePiece, ValuePiece];

const DEFAULT_DATES: DateRangeValue = [new Date(), new Date()];

const NOW = new Date();

interface IDatePicker {
  date?: DateRangeValue;
  minDate?: Date;
  ref?: any;
  onChange?: (value: DateRangeValue) => void;
  defaultDate?: DateRangeValue;
}

export function DateRangePicker({
  date,
  defaultDate = DEFAULT_DATES,
  ...restProps
}: {
  id?: string;
  error?: string;
} & IDatePicker) {
  const formatWeekDays = useCallback((_: string | undefined, date: Date) => {
    return dateToWeekDayShort(date);
  }, []);

  return (
    <Picker
      defaultValue={defaultDate}
      value={date}
      locale="en"
      format={'dd-MM-yyyy'}
      formatShortWeekday={formatWeekDays}
      next2Label={null}
      prev2Label={null}
      calendarIcon={ChevronDownIcon}
      clearIcon={CrossIcon}
      {...restProps}
    />
  );
}

export const HookedDateToPicker = memo(
  ({
    toDate,
    setToDate,
  }: {
    toDate?: DateRangeValue;
    setToDate: (value: Date | null) => void;
  } & IDatePicker): ReactElement => {
    const handleChange = useCallback(
      (event: DateRangeValue) => {
        const targetDate = event instanceof Array ? event[1] : event;

        setToDate(targetDate as ValuePiece);
      },
      [setToDate],
    );

    const date = useMemo(() => {
      if (!toDate) {
        return NOW as ValuePiece;
      }

      return [NOW, toDate] as DateRangeValue;
    }, [toDate]);

    return (
      <DateRangePicker onChange={handleChange} minDate={NOW} date={date} />
    );
  },
);

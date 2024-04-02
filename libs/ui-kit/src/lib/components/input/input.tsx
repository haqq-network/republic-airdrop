import { ChangeEvent, ReactNode, forwardRef, useCallback } from 'react';
import clsx from 'clsx';

type InputType = 'text' | 'email' | 'number';
type NumberOrString<T> = T extends 'number' ? number : string;
export interface AdditionalInputProps<T extends InputType> {
  inputClassName?: string;
  label?: string;
  labelRightSlot?: ReactNode;
  error?: string;
  leftSlot?: ReactNode;
  rightSlot?: ReactNode;
  onChange?: (
    event: ChangeEvent<HTMLInputElement>,
    value: NumberOrString<T> | any,
  ) => void;
  onBlur?: (e: any) => void;
  onFocus?: (e: any) => void;
  disabled?: boolean;
  value?: string | number;
  id?: string;
  type?: T;
  className?: string;
  placeholder?: string;
  hint?: ReactNode;
  name?: string;
  autoFocus?: boolean;
  required?: boolean;
}

export const Input = forwardRef(
  <T extends InputType>(
    {
      className,
      inputClassName,
      label,
      labelRightSlot,
      type,
      id,
      placeholder,
      error,
      leftSlot,
      rightSlot,
      value,
      onChange,
      onBlur,
      onFocus,
      disabled,
      hint,
      name,
      required,
      autoFocus,
      ...rest
    }: AdditionalInputProps<T>,
    ref: any,
  ) => {
    const handleChange = useCallback(
      (event: ChangeEvent<HTMLInputElement>) => {
        if (onChange) {
          onChange(
            event,
            type === 'number'
              ? (parseFloat(event.target.value) as T extends 'number'
                  ? number
                  : string)
              : (event.target.value as NumberOrString<T>),
          );
        }
      },
      [onChange, type],
    );

    return (
      <div
        className={clsx(
          'flex w-full flex-col gap-y-[4px]',
          disabled && 'cursor-not-allowed',
          className,
        )}
      >
        {label && (
          <label
            htmlFor={id}
            className={clsx(
              'font-guise flex items-center gap-[7px] text-[13px] font-medium leading-[24px]',
              disabled && 'cursor-not-allowed',
            )}
          >
            {label}
            {labelRightSlot && labelRightSlot}
          </label>
        )}
        <div
          className={clsx(
            'flex w-full flex-row items-center gap-x-[6px] rounded-[6px] bg-white/[8%] px-[14px] py-[8px] font-[600] transition-colors duration-150 focus-within:bg-white/[24%]',
            error && '!bg-[#360C0E]',
          )}
        >
          <input
            type={type}
            placeholder={placeholder}
            required={required}
            disabled={disabled}
            id={id}
            name={name}
            onChange={handleChange}
            onBlur={onBlur}
            onFocus={onFocus}
            value={value}
            ref={ref}
            autoFocus={autoFocus}
            className={clsx(
              'font-guise peer order-2 w-full flex-1 text-[13px] font-medium placeholder-white/25 outline-none transition-colors duration-150 placeholder:font-medium',
              error ? 'bg-[#360C0E] text-[#FF5454]' : 'bg-transparent',
              disabled && 'cursor-not-allowed',
              inputClassName,
            )}
            {...rest}
          />
          {leftSlot && (
            <div className="font-guise order-1 text-[13px] font-medium">
              {leftSlot}
            </div>
          )}
          {rightSlot && (
            <div className="font-guise order-3 text-[13px] font-medium">
              {rightSlot}
            </div>
          )}
        </div>
        {error && (
          <div className="text-[14px] leading-[20px] text-[#FF5454]">
            {error}
          </div>
        )}
        {hint && hint}
      </div>
    );
  },
);

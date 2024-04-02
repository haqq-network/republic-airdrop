import { ChangeEvent, forwardRef, useCallback } from 'react';
import clsx from 'clsx';

export interface TextareaProps {
  id?: string;
  label?: string;
  placeholder?: string;
  value?: string | number;
  error?: string;
  disabled?: boolean;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>, value: string) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  autoFocus?: boolean;
  resizable?: boolean;
  rows?: number;
  cols?: number;
  required?: boolean;
  containerClassName?: string;
  inputWrapperClassName?: string;
  inputClassName?: string;
  isOptional?: boolean;
}

export const Textarea = forwardRef(
  (
    {
      id,
      label,
      placeholder,
      error,
      value,
      onChange,
      onBlur,
      onFocus,
      disabled,
      name,
      required,
      autoFocus,
      rows,
      cols,
      inputClassName = '',
      containerClassName = '',
      inputWrapperClassName = '',
      isOptional,
      resizable = true,
      ...rest
    }: TextareaProps,
    ref: any,
  ) => {
    const handleChange = useCallback(
      (event: ChangeEvent<HTMLTextAreaElement>) => {
        if (onChange) {
          onChange(event, event.target.value as string);
        }
      },
      [onChange],
    );

    return (
      <div
        className={clsx(
          'flex w-full flex-col gap-y-[4px]',
          disabled && 'cursor-not-allowed',
          containerClassName,
        )}
      >
        {label && (
          <label
            htmlFor={id}
            className={clsx(
              'text-[16px] font-[500] leading-[24px]',
              disabled && 'cursor-not-allowed',
            )}
          >
            {label}
            {isOptional && (
              <span className="ml-[9px] text-white/50">Optional</span>
            )}
          </label>
        )}
        <div
          className={clsx(
            'flex w-full flex-row items-center gap-x-[6px] rounded-[10px] bg-white/[8%] px-[14px] py-[8px] font-[600] transition-colors duration-150 focus-within:bg-white/[24%]',
            error && '!bg-[#360C0E]',
            inputWrapperClassName,
          )}
        >
          <textarea
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
            rows={rows}
            cols={cols}
            className={clsx(
              'order-2 w-full flex-1 placeholder-white/50 outline-none transition-colors duration-150',
              error ? 'bg-[#360C0E] text-[#FF5454]' : 'bg-transparent',
              disabled && 'cursor-not-allowed',
              inputClassName,
              !resizable && 'resize-none',
            )}
            {...rest}
          />
        </div>
        {error && (
          <div className="text-[14px] leading-[20px] text-[#FF5454]">
            {error}
          </div>
        )}
      </div>
    );
  },
);

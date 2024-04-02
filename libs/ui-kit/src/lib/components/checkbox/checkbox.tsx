import { ChangeEvent, PropsWithChildren, useCallback } from 'react';
import clsx from 'clsx';

export interface CheckboxProps {
  id?: string;
  disabled?: boolean;
  className?: string;
  value?: boolean;
  onChange: (value: boolean, event: ChangeEvent<HTMLInputElement>) => void;
}

export function Checkbox({
  disabled = false,
  id,
  className,
  children,
  onChange,
  value,
}: PropsWithChildren<CheckboxProps>) {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event.target.checked, event);
      }
    },
    [onChange],
  );

  return (
    <div
      className={clsx(
        'inline-flex items-center gap-x-[8px]',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        className,
      )}
    >
      <label className="relative flex items-center" htmlFor={id}>
        <input
          id={id}
          type="checkbox"
          className={clsx(
            'peer relative h-[20px] w-[20px] appearance-none rounded-md border border-white/50 transition-all duration-150 checked:border-none ',
            disabled
              ? 'cursor-not-allowed checked:bg-white/[24%]'
              : 'cursor-pointer checked:bg-[#74F051] hover:border-white checked:hover:bg-[#2CE59E]',
          )}
          disabled={disabled}
          checked={value}
          onChange={handleChange}
        />
        <span
          className={clsx(
            'pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-150 peer-checked:opacity-100',
            disabled ? 'text-white/50' : 'text-[#0D0D0E]',
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[14px] w-[14px]"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </label>
      {children && (
        <label
          className={clsx(
            'select-none text-base font-[600]',
            disabled
              ? 'cursor-not-allowed text-white/50'
              : 'cursor-pointer text-white',
          )}
          htmlFor={id}
        >
          {children}
        </label>
      )}
    </div>
  );
}

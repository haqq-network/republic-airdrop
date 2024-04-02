import { useCallback } from 'react';
import clsx from 'clsx';

export interface RadioInputOption {
  id: string;
  value: boolean;
  label: string;
  disabled?: boolean;
  onChange: (id: string) => void;
}

export function RadioInput({
  id,
  value,
  onChange,
  label,
  disabled,
}: RadioInputOption) {
  const handleChange = useCallback(() => {
    if (!disabled && onChange) {
      onChange(id);
    }
  }, [disabled, onChange, id]);

  return (
    <div
      className={clsx(
        'inline-flex items-center gap-x-[8px]',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
      )}
    >
      <label
        className={clsx('relative flex items-center rounded-full')}
        htmlFor={id}
      >
        <input
          type="radio"
          className={clsx(
            'peer relative h-[20px] w-[20px] appearance-none rounded-full border border-white/50 transition-colors duration-150',
            disabled
              ? 'cursor-not-allowed border-white/[24%] checked:border-white/50 checked:hover:border-white/[24%] disabled:checked:hover:border-white/50'
              : 'cursor-pointer checked:border-[#74F051] hover:border-white  checked:hover:border-[#2CE59E]',
          )}
          id={id}
          onChange={handleChange}
          disabled={disabled}
          checked={value}
        />
        <span
          className={clsx(
            'pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  transition-[color,opacity] duration-150',
            'opacity-0 peer-checked:opacity-100',
            'peer-checked:text-[#74F051] peer-checked:peer-hover:text-[#2CE59E]',
            disabled && '!text-white/50',
          )}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[10px] w-[10px]"
            viewBox="0 0 16 16"
            fill="currentColor"
          >
            <circle data-name="ellipse" cx="8" cy="8" r="8" />
          </svg>
        </span>
      </label>

      <label
        className={clsx(
          'text-base font-[600]',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        )}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}

export function RadioInputGroup({
  value,
  className,
  options,
  onChange,
  disabled,
}: {
  value: string | null;
  className?: string;
  options: { id: string; label: string }[];
  disabled?: boolean;
  onChange: (id: string) => void;
}) {
  return (
    <div className={clsx('flex flex-col gap-y-[10px]', className)}>
      {options.map((option) => {
        return (
          <RadioInput
            key={option.id}
            id={option.id}
            value={option.id === value}
            disabled={disabled}
            label={option.label}
            onChange={onChange}
          />
        );
      })}
    </div>
  );
}

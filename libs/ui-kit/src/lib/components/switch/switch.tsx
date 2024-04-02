import { ChangeEvent, useCallback } from 'react';
import clsx from 'clsx';

export function Switch({
  size = 'default',
  onChange,
  value,
}: {
  size?: 'big' | 'default';
  value: boolean;
  onChange: (value: boolean) => void;
}) {
  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.checked);
    },
    [onChange],
  );

  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        type="checkbox"
        className="peer sr-only"
        onChange={handleChange}
        checked={value}
      />
      <div
        className={clsx(
          size === 'default' &&
            'h-[32px] w-[60px] after:h-[28px] after:w-[28px]',
          size === 'big' && 'h-[40px] w-[76px] after:h-[36px] after:w-[36px]',
          "peer rounded-full bg-[#252528] duration-150 after:absolute after:start-[2px] after:top-0.5 after:rounded-full after:bg-[#AAABB2] after:transition-all after:content-[''] hover:bg-[#3A3A3A] peer-checked:bg-[#74F051] peer-checked:after:translate-x-full after:peer-checked:bg-white peer-checked:hover:bg-[#B6EAA7]",
        )}
      />
    </label>
  );
}

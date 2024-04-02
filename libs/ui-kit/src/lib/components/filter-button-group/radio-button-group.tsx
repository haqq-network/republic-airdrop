import { PropsWithChildren } from 'react';
import clsx from 'clsx';

type Variant = {
  id: string;
  label: string;
};

export function RadioButton({
  children,
  onClick,
  className,
  isActive = false,
}: PropsWithChildren<{
  className?: string;
  isActive?: boolean;
  onClick: () => void;
}>) {
  return (
    <div
      className={clsx(
        'font-inconsolata cursor-pointer rounded-[8px] px-[12px] py-[8px] text-sm font-[700] uppercase transition-colors duration-150',
        isActive
          ? 'bg-white/[15%] text-white'
          : 'bg-transparent text-white/50 hover:bg-white/[24%]',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export function RadioButtonGroup({
  variants,
  className,
  current,
  onChange,
  buttonClassName,
}: {
  className?: string;
  variants: Variant[];
  onChange: (id: string) => void;
  current: string;
  buttonClassName?: string;
}) {
  return (
    <div
      className={clsx(
        'flex w-fit flex-row items-center gap-x-[8px] rounded-[12px] border border-white/[15%] bg-transparent p-[6px] text-center',
        className,
      )}
    >
      {variants.map((variant, index) => {
        return (
          <RadioButton
            key={`${index}-${variant.id}`}
            isActive={current === variant.id}
            onClick={() => {
              onChange(variant.id);
            }}
            className={buttonClassName}
          >
            {variant.label}
          </RadioButton>
        );
      })}
    </div>
  );
}

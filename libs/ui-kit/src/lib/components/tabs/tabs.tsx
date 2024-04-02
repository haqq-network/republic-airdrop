import { PropsWithChildren } from 'react';
import clsx from 'clsx';

export function Tabs({
  current,
  variants,
  onChange,
  className,
}: {
  current: string;
  variants: {
    id: string;
    label: string;
    counter?: number;
  }[];
  onChange: (id: string) => void;
  className?: string;
}) {
  return (
    <div
      className={clsx('flex flex-row gap-x-[24px] lg:gap-x-[36px]', className)}
    >
      {variants.map(({ id, label, counter }, index) => {
        return (
          <Tab
            key={`tab-${id}`}
            counter={counter}
            onClick={() => {
              onChange(id);
            }}
            isActive={id === current}
          >
            {label}
          </Tab>
        );
      })}
    </div>
  );
}

interface TabProps {
  counter?: number;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}
export function Tab({
  children,
  counter,
  isActive = false,
  onClick,
  className,
}: PropsWithChildren<TabProps>) {
  return (
    <div
      className={clsx(
        'flex flex-row items-center gap-x-[10px]',
        'transition-colors duration-300',
        'font-stretched cursor-pointer font-[800]',
        !isActive ? 'text-white/50 hover:text-white/80' : 'text-white',
        'whitespace-nowrap',
        className,
      )}
      onClick={onClick}
    >
      <div className="text-[22px] leading-[30px] lg:text-[36px] lg:leading-[50px]">
        {children}
      </div>
      {counter && counter > 0 ? (
        <div className="rounded-[8px] bg-white/15 px-[8px] py-[2px] text-base">
          {counter}
        </div>
      ) : null}
    </div>
  );
}

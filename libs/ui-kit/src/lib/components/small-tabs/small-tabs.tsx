import { PropsWithChildren } from 'react';
import clsx from 'clsx';

export function SmallTabs({
  className,
  tabs,
  onChange,
  current,
}: {
  className?: string;
  current: string;
  tabs: {
    id: string;
    label: string;
  }[];
  onChange: (label: string) => void;
}) {
  return (
    <div
      className={clsx(
        'flex w-full items-start md:border-b-[1px] md:border-b-white/15',
        className,
      )}
    >
      {tabs.map(({ label, id }) => {
        return (
          <SmallTab
            key={`small-tab-${id}`}
            onClick={() => {
              onChange(id);
            }}
            isActive={id === current}
          >
            {label}
          </SmallTab>
        );
      })}
    </div>
  );
}

export interface SmallTabProps {
  className?: string;
  isActive?: boolean;
  onClick: () => void;
}

export function SmallTab({
  children,
  isActive = false,
  onClick,
  className,
}: PropsWithChildren<SmallTabProps>) {
  return (
    <div
      className={clsx(
        'px-[16px] py-[12px]',
        'text-base font-[600] md:text-[18px] md:leading-[26px]',
        'cursor-pointer transition-colors duration-150',
        'md:mb-[-1px]',
        isActive
          ? 'border-b-[2px] border-b-white text-white'
          : 'text-white/50 hover:text-white',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

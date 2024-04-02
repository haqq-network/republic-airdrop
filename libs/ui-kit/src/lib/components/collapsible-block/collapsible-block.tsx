'use client';
import { PropsWithChildren, useState } from 'react';
import clsx from 'clsx';
import { ChevronDownIcon, ChevronUpIcon } from '../icons/icons';

export function CollapsibleBlock({
  title,
  children,
  isInitiallyOpen = false,
  className,
}: PropsWithChildren<{
  title: string;
  isInitiallyOpen?: boolean;
  className?: string;
}>) {
  const [isOpen, setIsOpen] = useState(isInitiallyOpen);

  return (
    <div
      className={clsx(
        'w-[346px] rounded-[16px] border border-white/15 transition-colors duration-150 hover:border-white/50',
        isOpen && 'flex flex-col',
        className,
      )}
    >
      <div
        className="flex cursor-pointer flex-row items-center justify-between px-[24px] py-[18px]"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <div className="font-stretched text-[20px] font-[600] leading-[26px]">
          {title}
        </div>
        {!isOpen ? <ChevronDownIcon /> : <ChevronUpIcon />}
      </div>
      {isOpen && <div className="px-[24px] pb-[18px]">{children}</div>}
    </div>
  );
}

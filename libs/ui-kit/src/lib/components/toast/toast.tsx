import { PropsWithChildren, ReactNode } from 'react';
import { XMarkLargeIcon } from '../icons/icons';

export function Toast({
  icon,
  onClick,
  children,
}: PropsWithChildren<{
  icon: ReactNode;
  onClick?: () => void;
}>) {
  return (
    <div className="flex max-w-[332px] flex-row items-start gap-x-[8px] rounded-[12px] border border-white/[24%] bg-[#E7E7E7] p-[16px] text-[#0D0D0E]">
      <div>{icon}</div>
      <div className="font-stretched select-none text-[20px] font-[600] leading-[26px]">
        {children}
      </div>
      <div className="cursor-pointer" onClick={onClick}>
        <XMarkLargeIcon className="h-[16px] w-[16px]" />
      </div>
    </div>
  );
}

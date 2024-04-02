import { PropsWithChildren, ReactNode } from 'react';
import clsx from 'clsx';

interface AlertProps extends PropsWithChildren {
  type: 'warning' | 'danger';
  icon: ReactNode;
  className?: string;
}

export function Alert({ icon, type, children, className }: AlertProps) {
  return (
    <div
      className={clsx(
        'rounded-[10px] px-[16px] py-[12px]',
        type === 'warning' && 'bg-[#48361B]',
        type === 'danger' && 'bg-[#360C0E]',
        className,
      )}
    >
      <div
        className={clsx(
          'flex flex-row items-start gap-x-[12px]',
          type === 'warning' && 'text-[#E3A13F]',
          type === 'danger' && 'text-[#FF5454]',
        )}
      >
        <div className="flex-1">{icon}</div>
        <div className="text-[13px] font-[500] leading-[20px] sm:text-[14px]">
          {children}
        </div>
      </div>
    </div>
  );
}

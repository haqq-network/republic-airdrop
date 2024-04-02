import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import clsx from 'clsx';

export interface TooltipProps {
  text?: ReactNode;
  className?: string;
}

export function Tooltip({
  text,
  children,
  className,
}: PropsWithChildren<TooltipProps>): ReactElement {
  return (
    <span className="group relative inline-block leading-none">
      {children}
      {text && (
        <div
          className={clsx(
            'invisible absolute w-fit max-w-[240px] scale-90 opacity-0',
            'bottom-full left-1/2 -translate-x-1/2 -translate-y-2',
            'pointer-events-none select-none transition delay-75 duration-100 ease-out',
            'z-50 group-hover:visible group-hover:translate-y-0 group-hover:scale-100 group-hover:opacity-100',
            'rounded-[8px] px-[12px] py-[8px] text-[14px] font-[500] leading-[20px]',
            'drop-shadow-tooltip-drop-shadow mb-[4px] transform-gpu border border-white/15 bg-[#0D0D0E] text-white',
            className,
          )}
        >
          {text}
        </div>
      )}
    </span>
  );
}

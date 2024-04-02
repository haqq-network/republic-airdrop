import { ReactNode } from 'react';
import clsx from 'clsx';

export function BurgerMenu({
  className,
  onClose,
  buttonSlot,
}: {
  className?: string;
  onClose?: () => void;
  buttonSlot?: ReactNode;
}) {
  return (
    <div
      className={clsx(
        'bg-haqq-black z-50 h-full px-[20px] py-[32px] sm:py-[40px] sm:pl-[40px] sm:pr-[64px]',
        'border-haqq-border overflow-y-auto sm:border-l',
        className,
      )}
    >
      <div className="mb-[60px] flex flex-col items-start space-y-[16px] sm:mb-[80px]">
        {buttonSlot}
      </div>
    </div>
  );
}

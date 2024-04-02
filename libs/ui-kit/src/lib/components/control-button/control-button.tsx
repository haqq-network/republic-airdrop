import clsx from 'clsx';
import { XMarkLargeIcon, PlusSignLargeIcon } from '../icons/icons';

export function ControlButton({
  className,
  onClick,
  variant = 'close',
}: {
  className?: string;
  onClick?: () => void;
  variant?: 'close' | 'add';
}) {
  return (
    <button
      className={clsx(
        'rounded-md p-[8px] text-white',
        'transition-color duration-150 ease-in-out will-change-[background]',
        variant === 'close' && 'bg-graphite hover:bg-light-graphite',
        variant === 'add' && 'bg-dark-graphite hover:bg-graphite',
        className,
      )}
      onClick={onClick}
      type="button"
    >
      {variant === 'add' && <PlusSignLargeIcon />}
      {variant === 'close' && <XMarkLargeIcon />}
    </button>
  );
}

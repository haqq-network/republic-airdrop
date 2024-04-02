import clsx from 'clsx';
import { BurgerIcon, XMarkMediumIcon } from '../icons/icons';

export function BurgerButton({
  className,
  onClick,
  isOpen = false,
}: {
  className?: string;
  onClick?: () => void;
  isOpen?: boolean;
}) {
  return (
    <button
      className={clsx('cursor-pointer p-[6px]', className)}
      onClick={onClick}
    >
      {isOpen ? <XMarkMediumIcon /> : <BurgerIcon />}
    </button>
  );
}

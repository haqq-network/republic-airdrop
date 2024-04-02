import clsx from 'clsx';
import { ButtonProps } from './button';
import { IconButton } from './icon-button';
import { BagIcon } from '../icons/icons';

export function BagButton({
  className,
  count,
  ...rest
}: ButtonProps & { count: number }) {
  return (
    <IconButton
      className={clsx(className, 'relative !px-[16px] !py-[8px]')}
      variant="green"
      {...rest}
    >
      <BagIcon />
      <div className="absolute right-[2px] top-[2px] flex h-[16px] flex-row items-center rounded-full bg-white px-[4px] text-[14px] font-[800] leading-none text-[#01B26E]">
        {count}
      </div>
    </IconButton>
  );
}

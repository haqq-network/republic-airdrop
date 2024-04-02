import clsx from 'clsx';
import { Button, ButtonProps } from './button';

export function IconButton({
  className,
  size = 'normal',
  ...rest
}: ButtonProps) {
  return (
    <Button
      className={clsx(
        className,
        size === 'small' && '!px-[4px] !py-[4px]',
        size === 'normal' && '!px-[16px] !py-[8px]',
      )}
      size={size}
      {...rest}
    />
  );
}

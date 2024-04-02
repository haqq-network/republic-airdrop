import { PropsWithChildren, forwardRef } from 'react';
import clsx from 'clsx';
import { SpinnerLoader } from '../spinner-loader/spinner-loader';

export type ButtonProps = PropsWithChildren<{
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onClick?: (e: any) => void;
  variant?: 'default' | 'green' | 'red' | 'subtle';
  size?: 'normal' | 'small';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  isLoading?: boolean;
}>;

export const Button = forwardRef(
  (
    {
      onClick,
      className,
      variant = 'default',
      disabled = false,
      children,
      type = 'button',
      isLoading,
      size = 'normal',
    }: ButtonProps,
    ref: any,
  ) => {
    return (
      <button
        className={clsx(
          'relative select-none rounded-[10px]',
          'font-inconsolata text-[14px] font-[800] leading-[14px]',
          'transition-color duration-150 ease-in-out will-change-[color,background]',
          variant === 'default' &&
            (isLoading
              ? 'bg-white/[8%]'
              : 'bg-white/[8%] text-white hover:bg-white/[24%] disabled:!bg-white/[8%] disabled:opacity-50'),
          variant === 'green' &&
            (isLoading
              ? 'bg-default-green'
              : 'bg-default-green hover:bg-light-green disabled:!bg-default-green text-black disabled:opacity-50'),
          variant === 'red' &&
            (isLoading
              ? 'bg-main-red'
              : 'bg-main-red text-black hover:bg-[#F18C8C] disabled:!bg-[#F18C8C] disabled:opacity-50'),
          variant === 'subtle' &&
            (isLoading
              ? 'bg-white/[0%]'
              : 'bg-white/[0%] hover:bg-white/[12%] disabled:!bg-white/[8%] disabled:opacity-50'),
          size === 'small' && 'h-[32px] px-[20px] py-[9px]',
          size === 'normal' && 'h-[40px] px-[32px] py-[13px]',
          disabled ? 'cursor-not-allowed' : 'cursor-pointer',
          isLoading && '!cursor-wait text-transparent',
          className,
        )}
        onClick={onClick}
        disabled={disabled}
        type={type}
        ref={ref}
      >
        {isLoading && (
          <div className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] leading-none">
            <SpinnerLoader
              className={clsx(
                variant === 'default' ? 'text-white' : 'text-black',
              )}
            />
          </div>
        )}
        {children}
      </button>
    );
  },
);

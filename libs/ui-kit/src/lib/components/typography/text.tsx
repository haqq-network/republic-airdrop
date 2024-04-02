import { PropsWithChildren } from 'react';
import clsx from 'clsx';

export function Text({
  children,
  className,
  size = 'medium',
  isStretched = false,
  weight = 'normal',
}: PropsWithChildren<{
  className?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
  weight?: 'normal' | 'semibold' | 'extrabold';
  isStretched?: boolean;
}>) {
  return (
    <span
      className={clsx(
        size === 'small' && 'text-[14px] leading-[20px]',
        size === 'medium' &&
          'text-[14px] leading-[22px] lg:text-[16px] lg:leading-[24px]',
        size === 'large' &&
          'text-[16px] leading-[24px] lg:text-[18px] lg:leading-[26px]',
        size === 'xlarge' &&
          'text-[24px] leading-[26px] lg:text-[20px] lg:leading-[28px]',
        size === 'xxlarge' &&
          'text-[32px] leading-[36px] lg:text-[40px] lg:leading-[44px]',
        weight === 'normal' && 'font-[500]',
        weight === 'semibold' && 'font-[600]',
        weight === 'extrabold' && 'font-[800]',
        isStretched && 'font-stretched',
        className,
      )}
    >
      {children}
    </span>
  );
}

import { AnchorHTMLAttributes } from 'react';
import clsx from 'clsx';
import NextLink, { LinkProps } from 'next/link';

export function Link({
  className,
  ...rest
}: AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps) {
  return (
    <NextLink
      className={clsx(
        'cursor-pointer transition-colors duration-150 ease-in-out',
        'text-white hover:text-white/50',
        className,
      )}
      {...rest}
    />
  );
}

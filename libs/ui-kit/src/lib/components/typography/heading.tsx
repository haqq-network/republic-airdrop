import { PropsWithChildren, ReactNode } from 'react';
import clsx from 'clsx';

export interface HeadingProps extends PropsWithChildren {
  className?: string;
  level?: 1 | 2 | 3 | 4 | 5;
  weight?: 'normal' | 'semibold' | 'extrabold';
  isStretched?: boolean;
}

export function Heading({
  children,
  className,
  level = 3,
  isStretched = false,
  weight = 'semibold',
}: HeadingProps) {
  const headingClassNames = clsx(
    isStretched && 'font-stretched',
    weight === 'normal' && 'font-[500]',
    weight === 'semibold' && 'font-[600]',
    weight === 'extrabold' && 'font-[800]',
    className,
  );

  if (level === 1) {
    return (
      <h1 className={clsx('text-[140px] leading-[140px]', headingClassNames)}>
        {children}
      </h1>
    );
  }

  if (level === 2) {
    return (
      <h2
        className={clsx(
          'text-[32px] leading-[32px] lg:text-[70px] lg:leading-[70px]',
          headingClassNames,
        )}
      >
        {children}
      </h2>
    );
  }

  if (level === 3) {
    return (
      <h3
        className={clsx(
          'text-[22px] leading-[30px] lg:text-[36px] lg:leading-[50px]',
          headingClassNames,
        )}
      >
        {children}
      </h3>
    );
  }

  if (level === 4) {
    return (
      <h4
        className={clsx(
          'text-[18px] leading-[26px] lg:text-[24px] lg:leading-[30px]',
          headingClassNames,
        )}
      >
        {children}
      </h4>
    );
  }

  return (
    <h5 className={clsx('text-[20px] leading-[26px]', headingClassNames)}>
      {children}
    </h5>
  );
}

export function HaqqHeading({
  level = 2,
  className,
  children,
}: {
  children: ReactNode;
  className?: string;
  level?: 1 | 2 | 3;
}) {
  if (level === 1) {
    return (
      <h1
        className={clsx(
          'font-clash text-[18px] font-[500] leading-none sm:text-[28px] lg:text-[48px] xl:text-[70px]',
          className,
        )}
      >
        {children}
      </h1>
    );
  }

  if (level === 2) {
    return (
      <h2
        className={clsx(
          'font-clash text-[18px] font-[500] leading-[1.3em] sm:text-[24px] lg:text-[32px]',
          className,
        )}
      >
        {children}
      </h2>
    );
  }

  return (
    <h3
      className={clsx(
        'font-clash text-[16px] font-[500] leading-[1.2em] sm:text-[18px] lg:text-[22px]',
        className,
      )}
    >
      {children}
    </h3>
  );
}

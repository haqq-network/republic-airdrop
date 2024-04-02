'use client';
import { PropsWithChildren, ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import { Toaster } from './toaster';

export function Container({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div className={clsx('mx-auto w-full', 'z-0 ', className)}>{children}</div>
  );
}

export function Page({
  children,
  header,
  footer,
  className,
}: PropsWithChildren<{
  header?: ReactNode;
  footer?: ReactNode;
  className?: string;
}>): ReactElement {
  return (
    <div
      className={clsx(
        'relative flex min-h-screen flex-col overflow-clip',
        className,
      )}
    >
      {header ? <div className="flex-0 sticky top-0 z-50">{header}</div> : null}
      <div className="relative flex flex-1 flex-col overflow-x-clip">
        {children}
        <Toaster />
      </div>
      {footer ? footer : null}
    </div>
  );
}

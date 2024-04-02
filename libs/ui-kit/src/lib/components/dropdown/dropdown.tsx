'use client';
import { Fragment, PropsWithChildren, ReactNode } from 'react';
import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';

export function Dropdown({
  content,
  children,
  className,
  classNameContainer,
  positionHorizontal = 'left',
  positionVertical = 'bottom',
  disabled,
}: PropsWithChildren<{
  className?: string;
  classNameContainer?: string;
  content: ReactNode;
  positionHorizontal?: 'left' | 'right';
  positionVertical?: 'top' | 'bottom';
  disabled?: boolean;
}>) {
  return (
    <Menu
      as="div"
      className={clsx(
        'group relative inline-block leading-none',
        classNameContainer,
      )}
    >
      <Menu.Button disabled={disabled} as={Fragment}>
        {children}
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={clsx(
            'absolute w-full sm:w-fit',
            'transition delay-75 duration-100 ease-out',
            'transform-gpu border border-white/15 text-white',
            'shadow-dropdown-shadow bg-[#131313] backdrop-blur-[80px]',
            'z-[100] rounded-[10px]',
            positionHorizontal === 'right'
              ? 'left-full -translate-x-full'
              : 'right-full translate-x-full',
            positionVertical === 'top'
              ? 'bottom-full mb-[4px] -translate-y-0'
              : 'top-full mt-[4px] translate-y-0',
            className,
          )}
        >
          {content}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export function DropdownItem({
  children,
  onClick,
  disabled,
}: PropsWithChildren<{
  onClick?: () => void;
  disabled?: boolean;
}>) {
  return (
    <Menu.Item
      disabled={disabled}
      as="button"
      onClick={onClick}
      className={clsx(
        'font-inconsolata inline-flex w-[100%] flex-row items-center gap-[10px] px-[18px] py-[12px] text-[24px] font-[600] leading-[28px]',
        'hover:text-white/50',
        'transition-colors duration-150 ease-in-out',
      )}
    >
      {children}
    </Menu.Item>
  );
}

export function DropdownHorizontalDivider() {
  return <Menu.Item as="hr" className="h-[1px] bg-white opacity-15" />;
}

export function DropdownVerticalDivider() {
  return <hr className="h-[52px] w-[1px] bg-white opacity-15" />;
}

'use client';
import { Fragment, PropsWithChildren, ReactNode } from 'react';
import { Menu, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { ChevronDownIcon } from '../icons/icons';

export function DropdownSelect({
  content,
  children,
  className,
  positionHorizontal = 'left',
  positionVertical = 'bottom',
}: PropsWithChildren<{
  className?: string;
  content: ReactNode;
  positionHorizontal?: 'left' | 'right';
  positionVertical?: 'top' | 'bottom';
}>) {
  return (
    <Menu as="div" className="group relative inline-block leading-none">
      <Menu.Button>
        <div className="flex w-[220px] flex-row items-center justify-between rounded-[10px] bg-white/[8%] px-[18px] py-[8px]">
          {children}
          <ChevronDownIcon />
        </div>
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
            'absolute w-fit',
            'transition delay-75 duration-100 ease-out',
            'transform-gpu border border-white/10 text-white',
            'shadow-dropdown-shadow backdrop-blur-[80px]',
            'rounded-[10px]',
            positionHorizontal === 'right'
              ? 'left-full -translate-x-full'
              : 'right-full translate-x-full',
            positionVertical === 'top'
              ? 'bottom-full mb-[4px] -translate-y-0'
              : 'top-full mt-[4px] translate-y-0',
            className,
          )}
        >
          {<Menu.Item as={Fragment}>{content}</Menu.Item>}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

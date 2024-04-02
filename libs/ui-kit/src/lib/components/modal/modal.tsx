'use client';
import {
  Fragment,
  PropsWithChildren,
  SyntheticEvent,
  useCallback,
} from 'react';
import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import { noop } from '@haqq-nft/utils';
import { Heading } from '../typography/heading';

function ModalOverlay({ onClose }: { onClose: () => void }) {
  const handleKeydown = useCallback(
    (event: SyntheticEvent<HTMLDivElement, KeyboardEvent>) => {
      event.preventDefault();
      event.stopPropagation();

      if (event.nativeEvent.code === 'Escape') {
        onClose();
      }
    },
    [onClose],
  );

  return (
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-300"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div
        role="none"
        className="bg-modal-overlay fixed inset-0 transform-gpu backdrop-blur-[5px]"
        onClick={onClose}
        onKeyDown={handleKeydown}
      />
    </Transition.Child>
  );
}

export function ModalCloseButton({
  onClick,
  className,
}: {
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      className={clsx(
        'h-[24px] w-[24px] cursor-pointer transition-opacity duration-100 ease-in-out hover:opacity-60',
        className,
      )}
      onClick={onClick}
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.2687 16.7531C18.6983 17.1826 18.6983 17.8791 18.2687 18.3087C17.8391 18.7383 17.1426 18.7383 16.713 18.3087L11.9909 13.5865L7.26868 18.3087C6.83911 18.7383 6.14263 18.7383 5.71305 18.3087C5.28347 17.8791 5.28347 17.1826 5.71305 16.7531L10.4352 12.0309L5.68218 7.27782C5.25261 6.84824 5.25261 6.15176 5.68218 5.72218C6.11176 5.29261 6.80824 5.29261 7.23782 5.72218L11.9909 10.4752L16.7439 5.72218C17.1735 5.29261 17.87 5.29261 18.2996 5.72218C18.7291 6.15176 18.7291 6.84824 18.2996 7.27782L13.5465 12.0309L18.2687 16.7531Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}

export function Modal({
  children,
  onClose = noop,
  isOpen = false,
}: PropsWithChildren<{
  isOpen?: boolean;
  onClose?: () => void;
}>) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <ModalOverlay onClose={onClose} />

        <div className="pointer-events-none fixed inset-0 overflow-y-auto">
          <div className="pointer-events-none flex min-h-full items-center justify-center sm:p-[32px]">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="pointer-events-auto transform transition-all">
                {children}
              </div>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export function MobileBody({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <div
      className={clsx(
        'bg-modal-background shadow-modal-shadow mx-auto rounded-[24px] p-[36px]',
        className,
      )}
    >
      {children}
    </div>
  );
}

export function MobileHeading({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) {
  return (
    <Heading isStretched level={4} className={clsx(className)}>
      {children}
    </Heading>
  );
}

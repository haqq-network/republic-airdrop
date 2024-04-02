'use client';
import { Fragment, PropsWithChildren, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import clsx from 'clsx';
import { CrossIcon } from '../icons/icons';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
}

function DrawerOverlay({ onClose }: { onClose: () => void }) {
  return (
    <Transition.Child
      as={Fragment}
      enter="ease-out duration-200"
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
      />
    </Transition.Child>
  );
}

export function Drawer({
  isOpen,
  onClose,
  className,
  children,
}: PropsWithChildren<DrawerProps>) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <Transition show={isOpen}>
      <DrawerOverlay onClose={onClose} />

      <Transition.Child
        as="div"
        enter="ease-out duration-200"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="ease-in duration-150"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full"
      >
        <div className={clsx('fixed right-0 top-0 z-40 h-screen')}>
          <button
            type="button"
            onClick={onClose}
            className="absolute left-[-42px] top-[16px] z-20 inline-flex items-center justify-center text-white transition-colors duration-150 ease-in hover:text-white/80"
          >
            <CrossIcon />
            <span className="sr-only">Close menu</span>
          </button>

          <div
            className={clsx(
              'bg-modal-background shadow-modal-shadow h-full w-[430px] overflow-y-auto p-[36px]',
              className,
            )}
          >
            {children}
          </div>
        </div>
      </Transition.Child>
    </Transition>
  );
}

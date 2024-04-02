'use client';
import { Fragment, ReactNode, useCallback, useState } from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import ScrollLock from 'react-scrolllock';
import { BurgerMenu } from './burger-menu';
import logoImageData from '../../assets/haqq-logo-sign.svg';
import { HaqqBurgerButton } from '../burger-button/haqq-burger-button';

export function Header({ children }: { children?: ReactNode }) {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const handleMenuOpen = useCallback(() => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  }, [isBurgerMenuOpen]);

  const handleMenuClose = useCallback(() => {
    setBurgerMenuOpen(false);
  }, []);

  return (
    <Fragment>
      <header
        className={clsx(
          'bg-haqq-black h-[63px] w-full border-b border-t border-[#464647] sm:h-[72px]',
          'sticky top-0 z-50',
        )}
      >
        <div className="relative z-50 mx-auto flex h-full w-full flex-row items-center pr-[16px] sm:pr-[64px] lg:pr-[80px]">
          <div className="flex h-full w-[48px] flex-none items-center justify-center border-r border-[#464647] sm:w-[64px] lg:w-[80px]">
            <div className="relative h-[26px] w-[26px] sm:h-[32px] sm:w-[32px]">
              <Link href="/">
                <Image src={logoImageData} alt="HAQQ" fill />
              </Link>
            </div>
          </div>
          <div className="flex flex-row items-center gap-x-[8px] sm:ml-[20px] lg:ml-[32px]">
            <Link
              href="/"
              className="font-clash text-[20px] font-medium leading-none sm:text-[24px]"
            >
              HAQQ
            </Link>
            <div className="text-haqq-black w-fit rounded-[30px] bg-white px-[8px] py-[3px] text-center text-[12px] font-[700] uppercase leading-[15px]">
              Token
            </div>
          </div>

          <div className="flex-1" />
          <div className="lg:block">{children}</div>

          <div className="block pl-[8px] leading-[0] lg:hidden">
            <HaqqBurgerButton
              isOpen={isBurgerMenuOpen}
              onClick={handleMenuOpen}
              className="h-[24px] w-[24px] sm:h-[30px] sm:w-[30px]"
            />
          </div>
        </div>
      </header>
      <BurgerMenuComponent
        isOpen={isBurgerMenuOpen}
        onClose={handleMenuClose}
      />
    </Fragment>
  );
}

function BurgerMenuComponent({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <div className="lg:hidden">
      <ScrollLock isActive={isOpen} />

      <div
        className={clsx(
          'fixed right-0 top-[62px] z-[45] h-[calc(100vh-62px)] w-full sm:top-[72px] sm:h-[calc(100vh-72px)] sm:w-[468px]',
          'transform-gpu transition-transform duration-200 will-change-transform',
          isOpen
            ? 'translate-y-[0px] ease-in-out sm:translate-x-[0px]'
            : 'translate-y-[100%] ease-out sm:translate-x-[100%] sm:translate-y-[0%]',
        )}
      >
        <BurgerMenu onClose={onClose} />
      </div>

      {isOpen && (
        <div
          onClick={onClose}
          className="fixed right-0 top-[0] z-40 h-full w-full bg-black/80"
        />
      )}
    </div>
  );
}

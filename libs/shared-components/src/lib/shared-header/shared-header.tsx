'use client';

import {
  Fragment,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';
import clsx from 'clsx';
import { debounce } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import ScrollLock from 'react-scrolllock';
import { HaqqBurgerButton } from '@haqq-nft/ui-kit';
import logoImageData from '../../assets/haqq-logo-sign.svg';
import { BurgerMenu } from '../burger-menu/burger-menu';

export function HeaderLinks() {
  return (
    <>
      <Link href="/">AirDrop</Link>
      <Link href="/">Staking</Link>
      <Link href="/">Governance</Link>
      <Link href="/">SBT</Link>
    </>
  );
}

export function SharedHeader({ children }: PropsWithChildren) {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);
  const [headerBackground, setHeaderBackground] = useState<
    'bg-transparent' | 'bg-haqq-black'
  >('bg-transparent');

  const handleMenuOpen = useCallback(() => {
    setBurgerMenuOpen(!isBurgerMenuOpen);
  }, [isBurgerMenuOpen]);

  const handleMenuClose = useCallback(() => {
    setBurgerMenuOpen(false);
  }, []);

  const changeHeaderBackground = debounce(() => {
    setHeaderBackground(
      document.body.scrollTop > 10 ? 'bg-haqq-black' : 'bg-transparent',
    );
  }, 50);

  useEffect(() => {
    document.body.addEventListener('scroll', changeHeaderBackground);
    return () => {
      document.body.removeEventListener('scroll', changeHeaderBackground);
    };
  }, [changeHeaderBackground]);

  return (
    <Fragment>
      <header
        className={clsx(
          'h-[63px] w-full border-b border-t border-[#464647] sm:h-[72px]',
          'sticky top-0 z-50',
          'transition-color linear duration-200 will-change-[background]',
          headerBackground,
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

          <div className="ml-[12px] flex flex-row items-center gap-x-[8px] sm:ml-[20px] lg:ml-[32px]">
            <Link
              href="/"
              className="font-clash text-[20px] font-medium leading-none sm:text-[24px]"
            >
              HAQQ
            </Link>
          </div>

          <div className="flex-1" />

          <div className="hidden gap-[40px] pr-[80px] lg:flex">
            <HeaderLinks />
          </div>

          <div className="hidden lg:block">{children}</div>

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

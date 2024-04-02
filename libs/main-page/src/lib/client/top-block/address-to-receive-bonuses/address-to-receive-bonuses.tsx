'use client';

import { ChangeEvent, useState } from 'react';
import clsx from 'clsx';
import { HaqqButton, Input } from '@haqq-nft/ui-kit';

export function AddressToReceiveBonuses({ className }: { className?: string }) {
  const [address, setAddress] = useState('');

  const onChangeAddress = (e: ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };

  const isDisabled = address.length === 0;

  return (
    <div
      className={clsx(
        'flex w-full flex-col items-center gap-[16px] sm:w-fit',
        className,
      )}
    >
      <div>
        <div className="font-clash text-[20px]">
          Address for receiving bonuses
        </div>
        <div className="text-[12px]">
          You can enter any address in EVM/HAQQ format
        </div>
      </div>
      <Input
        value={address}
        onChange={onChangeAddress}
        className="w-full lg:w-[412px]"
        placeholder="Enter address"
      />
      <HaqqButton
        className={clsx(
          'w-full sm:w-fit',
          isDisabled ? 'opacity-50' : 'opacity-100',
        )}
        disabled={isDisabled}
        variant={2}
      >
        Save address
      </HaqqButton>
    </div>
  );
}

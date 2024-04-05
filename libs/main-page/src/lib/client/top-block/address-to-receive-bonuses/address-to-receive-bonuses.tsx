/* eslint-disable no-debugger */
'use client';

import { useCallback, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { Hex } from 'viem';
import * as yup from 'yup';
import { FormError, HaqqButton, HookedFormInput } from '@haqq-nft/ui-kit';
import { ethToHaqq } from '@haqq-nft/utils';
import { useAirdropActions } from '../../hooks/use-airdrop-actions/use-airdrop-actions';

const schema = yup
  .object({
    address: yup
      .string()
      .defined('Address is required')
      .required("Address can't be empty"),
  })
  .required();

interface IFields {
  address: string;
}

export function AddressToReceiveBonuses({
  className,
  address,
  setNotAllowed,
  setSuccess,
}: {
  className?: string;
  address: string;
  setSuccess: (value: boolean) => void;
  setNotAllowed: (value: boolean) => void;
}) {
  const { register, handleSubmit, formState, setValue } = useForm<IFields>({
    resolver: yupResolver(schema),
    values: {
      address: '',
    },
  });

  const isDisabled = !address || address.length === 0;

  const {
    signEvm,
    signKeplr,
    checkAirdropAvailability,
    participateEvm,
    participateCosmos,
  } = useAirdropActions();

  const [pending, setPending] = useState(false);

  const onCheck = useCallback(
    async (data: IFields) => {
      if (!data.address || data.address.length === 0) {
        return;
      }

      setPending(true);
      try {
        const result = await checkAirdropAvailability(data.address);

        debugger;
        if (result.id) {
          try {
            if (address.startsWith('0x')) {
              const signature = await signEvm(address as Hex, data.address);

              debugger;
              const result = await participateEvm(
                ethToHaqq(address),
                data.address,
                signature,
              );

              if (!result.id) {
                setNotAllowed(true);
              } else {
                setSuccess(true);
              }
            } else if (address.startsWith('haqq')) {
              const signature = await signKeplr(address, data.address);

              debugger;
              const result = await participateCosmos(
                data.address,
                signature.signature,
                address,
              );

              if (!result.id) {
                setNotAllowed(true);
              } else {
                setSuccess(true);
              }
            }
          } catch (e) {
            console.error(e);
            setNotAllowed(true);
          }
        } else {
          setNotAllowed(true);
        }
      } catch (e) {
        console.error(e);
        setNotAllowed(true);
      } finally {
        setPending(false);
      }
    },
    [
      setSuccess,
      setNotAllowed,
      address,
      checkAirdropAvailability,
      participateCosmos,
      participateEvm,
      signEvm,
      signKeplr,
    ],
  );

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onCheck)}
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
          You can enter any address in EVM/HAQQ format with connected wallet
        </div>
      </div>

      <div className="flex w-full flex-col">
        <HookedFormInput
          name="address"
          id="address"
          error={formState.errors.address as FormError}
          register={register}
          className="w-full lg:w-[412px]"
          placeholder="Enter address"
          disabled={pending}
        />

        <div
          className="text-main-red mt-[8px] cursor-pointer text-[12px] underline"
          onClick={() => {
            setValue('address', address);
          }}
        >
          Use the current wallet address
        </div>
      </div>

      <HaqqButton
        className={clsx(
          'w-full sm:w-fit',
          isDisabled ? 'opacity-50' : 'opacity-100',
        )}
        disabled={isDisabled || pending}
        variant={2}
        type="submit"
      >
        Save address
      </HaqqButton>
    </form>
  );
}

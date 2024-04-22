'use client';

import { useCallback, useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import { Hex, isAddress } from 'viem';
import * as yup from 'yup';
import {
  FormError,
  HaqqButton,
  HookedFormInput,
  PageLoading,
} from '@haqq-nft/ui-kit';
import { ethToHaqq, haqqToEth } from '@haqq-nft/utils';
import { useAirdropActions } from '../../hooks/use-airdrop-actions/use-airdrop-actions';

function validAddressChecker(address?: string) {
  if (address) {
    try {
      if (address.startsWith('0x')) {
        return isAddress(address);
      } else if (address.startsWith('haqq1')) {
        const eth = haqqToEth(address);
        return isAddress(eth);
      } else {
        return false;
      }
    } catch {
      return false;
    }
  }

  return false;
}

const ADDRESS_VALIDATION_ERROR = 'Address is not EVM/Haqq format';

const schema = yup
  .object({
    address: yup
      .string()
      .defined('Address is required')
      .required("Address can't be empty")
      .test('address', ADDRESS_VALIDATION_ERROR, function (value: any) {
        if (!validAddressChecker(value)) {
          return new yup.ValidationError(
            ADDRESS_VALIDATION_ERROR,
            null,
            'choices',
          );
        }

        return true;
      }),
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
  const { register, handleSubmit, formState, setValue, watch } =
    useForm<IFields>({
      resolver: yupResolver(schema),
      values: {
        address: '',
      },
    });

  const watchingAddress = watch('address');

  const isValidAddress =
    !watchingAddress ||
    (watchingAddress && validAddressChecker(watchingAddress));

  const isEth = address && address.startsWith('0x');
  const isDisabled = !address || address.length === 0;

  const {
    signEvm,
    signKeplr,
    checkAirdropAvailability,
    participateEvm,
    participateCosmos,
  } = useAirdropActions();

  const [pending, setPending] = useState(false);

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const check = async () => {
      setLoading(true);

      try {
        const result = await checkAirdropAvailability(
          isEth ? ethToHaqq(address) : address,
        );

        if (result.id) {
          setValue('address', result.haqq_address);
          setNotAllowed(false);
        } else {
          setNotAllowed(true);
        }
      } catch (e) {
        console.error(e);
        setNotAllowed(true);
      } finally {
        setLoading(false);
      }
    };

    check();
  }, [address, setNotAllowed, setValue, checkAirdropAvailability, isEth]);

  const onCheck = useCallback(
    async (data: IFields) => {
      if (!data.address || data.address.length === 0) {
        return;
      }

      setPending(true);
      try {
        try {
          if (isEth) {
            const signature = await signEvm(address as Hex, data.address);

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
            const signature = await signKeplr('haqq_11235-1', data.address);

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
      participateCosmos,
      participateEvm,
      signEvm,
      signKeplr,
      isEth,
    ],
  );

  if (loading) {
    return <PageLoading />;
  }

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
          error={
            (formState.errors.address ||
              (isValidAddress
                ? undefined
                : {
                    message: ADDRESS_VALIDATION_ERROR,
                  })) as FormError
          }
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

'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import clsx from 'clsx';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { FormError, HaqqButton, HookedFormInput } from '@haqq-nft/ui-kit';

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
}: {
  className?: string;
  address: string;
}) {
  const { register, handleSubmit, formState } = useForm<IFields>({
    resolver: yupResolver(schema),
    values: {
      address: address,
    },
  });

  const isDisabled = !address || address.length === 0;

  const onCheck = (data: IFields) => {
    console.log(data);
  };

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

      <HookedFormInput
        name="address"
        id="address"
        error={formState.errors.address as FormError}
        register={register}
        className="w-full lg:w-[412px]"
        placeholder="Enter address"
        disabled
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
    </form>
  );
}

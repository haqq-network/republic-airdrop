'use client';

import { useCallback } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { Container, IFields, MintForm, withTxResolver } from '@haqq-nft/ui-kit';
import { useMintAction, useIslmEstimated } from '@haqq-nft/web3-connections';

export const schema = yup
  .object({
    gap: yup
      .number()
      .typeError('Gap must be a number')
      .defined('Gap is required')
      .required("Gap can't be empty")
      .max(99, 'Gap should be less than 100')
      .min(0, 'Gap should be more or equal 0'),
    tokenAmount: yup
      .number()
      .typeError('Token amount must be a number')
      .defined('Token amount is required')
      .required("Token amount can't be empty")
      .min(1, 'Token amount should be more than 0'),
  })
  .required();

const MintFormData = () => {
  const { action, isPending } = useMintAction();

  const { value, loading } = useIslmEstimated(1);

  const { register, handleSubmit, formState, watch } = useForm<IFields>({
    resolver: yupResolver(schema),
    values: {
      gap: 10,
      tokenAmount: undefined,
    },
  });

  const gap = watch('gap');
  const tokenAmount = watch('tokenAmount');

  const { value: estimated, loading: loadingEstimation } = useIslmEstimated(
    tokenAmount,
    gap,
  );

  const handleMint = useCallback(
    async (data: IFields) => {
      data.tokenAmount && action(data.tokenAmount, estimated);
    },
    [action, estimated],
  );

  return (
    <Container className="">
      <MintForm
        isLoading={loading}
        isPending={isPending}
        onMint={handleMint}
        price={value}
        tokenAmount={tokenAmount}
        register={register}
        handleSubmit={handleSubmit}
        formState={formState}
        loadingEstimation={loadingEstimation}
        estimated={estimated}
      />
    </Container>
  );
};

export const MintFormWrapper = withTxResolver(MintFormData);

'use client';

import { useMemo } from 'react';
import { parseEther } from 'viem';
import { useReadContract } from 'wagmi';
import { useConfig } from '@haqq-nft/data-api';
import abi from '../abi/ecosystem-mint-abi.json';

const convertWithGap = (gap: number, value: bigint) => {
  return (value * BigInt(+gap + 100)) / BigInt(100);
};

export function useIslmEstimated(amount: number | undefined = 0, gap = 0) {
  const { mintAddress } = useConfig();

  const result = useReadContract({
    abi,
    address: mintAddress,
    functionName: 'estimateISLMAmount',
    args: [BigInt(parseEther(amount.toString()))],
  });

  return useMemo(() => {
    return {
      value: convertWithGap(gap, (result.data as bigint) || BigInt(0)),
      loading: result.isLoading,
      error: result.error,
    };
  }, [result, gap]);
}

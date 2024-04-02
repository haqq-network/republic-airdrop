'use client';

import { useMemo } from 'react';
import { useReadContract } from 'wagmi';
import { useConfig } from '@haqq-nft/data-api';
import abi from '../abi/ecosystem-mint-abi.json';

export function useTotalSupply() {
  const { mintAddress } = useConfig();

  const result = useReadContract({
    abi,
    address: mintAddress,
    functionName: 'totalSupply',
  });

  console.log('result', result.data, result.data?.toString());

  return useMemo(() => {
    return {
      value: (result.data as bigint) || BigInt(0),
      loading: result.isLoading,
      error: result.error,
    };
  }, [result]);
}

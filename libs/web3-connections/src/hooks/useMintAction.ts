'use client';

import { useCallback } from 'react';
import { parseEther } from 'viem';
import { useConfig } from '@haqq-nft/data-api';
import { useTxResolver } from '@haqq-nft/types';
import abi from '../abi/ecosystem-mint-abi.json';

export function useMintAction() {
  const { walletAction, isConfirmed, isConfirming, isPending } =
    useTxResolver();

  const { mintAddress } = useConfig();

  const action = useCallback(
    async (amountRequested: number, value: bigint) => {
      return await walletAction({
        address: mintAddress,
        abi,
        functionName: 'mint',
        args: [parseEther(amountRequested.toString())],
        value: value,
      });
    },
    [walletAction, mintAddress],
  );

  return { action, isPending, isConfirming, isConfirmed };
}

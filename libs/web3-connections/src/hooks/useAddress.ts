'use client';

import { useAccount } from 'wagmi';

export function useCurrentAddress() {
  const { address: ethAddress } = useAccount();

  return {
    ethAddress,
  };
}

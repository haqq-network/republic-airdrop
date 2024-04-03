import { useMemo } from 'react';
import { useAccount } from 'wagmi';
import { ethToHaqq } from '@haqq-nft/utils';

export function useAddress() {
  const { address: ethAddress } = useAccount();
  const haqqAddress = useMemo(() => {
    if (ethAddress) {
      return ethToHaqq(ethAddress);
    }

    return undefined;
  }, [ethAddress]);

  return {
    ethAddress,
    haqqAddress,
  };
}

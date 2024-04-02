'use client';

import { useCallback } from 'react';
import { watchAsset } from 'viem/actions';
import { haqqMainnet } from 'viem/chains';
import { useAccount, useChainId, useWalletClient } from 'wagmi';
import { HaqqButton } from '@haqq-nft/ui-kit';

const TESTNET_TOKEN_ADDRESS = '0x4305afEc41f595000aaFa4bE5fa6071Ffc822Fc5';
const MAINNET_TOKEN_ADDRESS = '';

export const AddTokenBtn = ({ className }: { className?: string }) => {
  const chainId = useChainId();
  const { address } = useAccount();

  const { data: walletClient } = useWalletClient();

  const addAsset = useCallback(async () => {
    if (!walletClient) {
      return;
    }

    await watchAsset(walletClient, {
      type: 'ERC20',
      options: {
        address:
          chainId === haqqMainnet.id
            ? MAINNET_TOKEN_ADDRESS
            : TESTNET_TOKEN_ADDRESS,
        symbol: 'EST',
        decimals: 18,
        image: window.location.origin + '/assets/tokens/est.svg',
      },
    });
  }, [chainId, walletClient]);

  if (!address) {
    return null;
  }

  return (
    <HaqqButton variant={2} onClick={addAsset}>
      Add token in wallet
    </HaqqButton>
  );
};

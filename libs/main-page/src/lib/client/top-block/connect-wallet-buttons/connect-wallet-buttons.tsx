import { useCallback, useState } from 'react';
import { Keplr } from '@keplr-wallet/types';
import clsx from 'clsx';
import { useAddress } from '@haqq-nft/hooks';
import { HaqqButton } from '@haqq-nft/ui-kit';
import { haqqToEth } from '@haqq-nft/utils';
import {
  getKeplrWallet,
  useEvmConnectors,
  useWallet,
} from '@haqq-nft/web3-connections';
import { Instructions } from '../instructions/instructions';
import { AddressToReceiveBonuses } from '../address-to-receive-bonuses/address-to-receive-bonuses';

async function enableChains(keplrWallet: Keplr) {
  await keplrWallet.enable(['haqq_11235-1', 'cosmoshub-4', 'evmos_9001-2']);
}

export async function addHaqqNetwork(keplrWallet: Keplr) {
  const basePrefix = 'haqq';
  try {
    await keplrWallet.experimentalSuggestChain({
      features: ['ibc-transfer', 'ibc-go', 'eth-address-gen', 'eth-key-sign'],
      chainId: 'haqq_11235-1',
      chainName: 'HAQQ Mainnet',
      rpc: 'https://rpc.tm.haqq.network',
      rest: 'https://rest.cosmos.haqq.network',
      bip44: {
        coinType: 60,
      },
      bech32Config: {
        bech32PrefixAccAddr: basePrefix,
        bech32PrefixAccPub: `${basePrefix}pub`,
        bech32PrefixValAddr: `${basePrefix}valoper`,
        bech32PrefixValPub: `${basePrefix}valoperpub`,
        bech32PrefixConsAddr: `${basePrefix}valcons`,
        bech32PrefixConsPub: `${basePrefix}valconspub`,
      },
      currencies: [
        {
          // Coin denomination to be displayed to the user.
          coinDenom: 'ISLM',
          coinMinimalDenom: 'aISLM',
          coinDecimals: 18,
        },
      ],
      feeCurrencies: [
        {
          coinDenom: 'ISLM',
          coinMinimalDenom: 'aISLM',
          coinDecimals: 18,
        },
      ],
      stakeCurrency: {
        coinDenom: 'ISLM',
        coinMinimalDenom: 'aISLM',
        coinDecimals: 18,
      },
    });
  } catch (error) {
    console.error(error);
  }
}

export function ConnectWalletButtons({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  const { ethAddress } = useAddress();
  const hasMetamaskConnected = !!ethAddress;
  const [ethAddressFromKeplr, setEthAddressFromKepler] = useState('');

  const targetHexAddress = ethAddress || ethAddressFromKeplr;

  const [keplrAccounts, setKeplrAccounts] = useState<Record<string, string>>(
    {},
  );

  const { disconnect } = useWallet();

  const notConnectedKeplr =
    Object.keys(keplrAccounts).length === 0 || hasMetamaskConnected;

  const connectKeplrWallet = useCallback(async () => {
    const keplrWallet = await getKeplrWallet();

    if (hasMetamaskConnected) {
      disconnect();
    }

    if (keplrWallet) {
      try {
        await enableChains(keplrWallet);
      } catch (e) {
        await addHaqqNetwork(keplrWallet);
      } finally {
        await enableChains(keplrWallet);
      }

      const [haqq, cosmos, evmos] = await Promise.all([
        await keplrWallet.getKey('haqq_11235-1'),
        await keplrWallet.getKey('cosmoshub-4'),
        await keplrWallet.getKey('evmos_9001-2'),
      ]);

      setEthAddressFromKepler(haqqToEth(haqq.bech32Address));

      setKeplrAccounts({
        haqq: haqq.bech32Address,
        cosmos: cosmos.bech32Address,
        evmos: evmos.bech32Address,
      });
    }
  }, [disconnect, setEthAddressFromKepler, hasMetamaskConnected]);

  const { handleWalletConnect, selectWalletModalConnectors } =
    useEvmConnectors();

  if (targetHexAddress) {
    return (
      <div
        className={clsx(
          'flex w-full flex-col items-center gap-[12px] sm:w-fit',
          className,
        )}
      >
        <AddressToReceiveBonuses address={targetHexAddress} />
      </div>
    );
  }

  return (
    <>
      <Instructions />

      <div
        className={clsx(
          'flex w-full flex-col items-center gap-[12px] sm:w-fit',
          className,
        )}
      >
        <div>You should connect wallet first</div>

        {selectWalletModalConnectors.map((connector) => {
          return (
            <HaqqButton
              variant={2}
              className="w-full uppercase sm:w-fit"
              key={connector.id}
              onClick={() => {
                handleWalletConnect(connector.id);
              }}
            >
              {connector.name}
            </HaqqButton>
          );
        })}

        <HaqqButton
          variant={2}
          className="w-full uppercase sm:w-fit"
          onClick={connectKeplrWallet}
        >
          Keplr Wallet
        </HaqqButton>
      </div>

      <CaptchaModal
        turnstileSiteKey={turnstileSiteKey}
        isClosable={!!targetHexAddress}
      />
    </>
  );
}

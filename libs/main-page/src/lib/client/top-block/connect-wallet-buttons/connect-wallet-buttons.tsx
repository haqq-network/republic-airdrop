import { useCallback, useState } from 'react';
import { Keplr } from '@keplr-wallet/types';
import clsx from 'clsx';
import { useAddress } from '@haqq-nft/hooks';
import { CaptchaModal, HaqqButton } from '@haqq-nft/ui-kit';
import { haqqToEth } from '@haqq-nft/utils';
import {
  getKeplrWallet,
  useEvmConnectors,
  useWallet,
} from '@haqq-nft/web3-connections';
import { AddressToReceiveBonuses } from '../address-to-receive-bonuses/address-to-receive-bonuses';
import { Instructions } from '../instructions/instructions';
import { PurchaseFailureBlock } from '../purchase-failure-block/purchase-failure-block';

async function enableChains(keplrWallet: Keplr) {
  await keplrWallet.enable(['haqq_11235-1', 'cosmoshub-4', 'evmos_9001-2']);
}

async function addHaqqNetwork(keplrWallet: Keplr) {
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

const TURNSTILE_SITEKEY = process.env['NEXT_PUBLIC_TURNSTILE_SITEKEY'];

export function ConnectWalletButtons({ className }: { className?: string }) {
  const { ethAddress } = useAddress();
  const hasMetamaskConnected = !!ethAddress;

  const [keplrAccounts, setKeplrAccounts] = useState<Record<string, string>>(
    {},
  );

  const targetHexAddress = ethAddress || keplrAccounts.haqq;

  const { disconnect } = useWallet();

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

      const [haqq] = await Promise.all([
        await keplrWallet.getKey('haqq_11235-1'),
      ]);

      setKeplrAccounts({
        haqq: haqq.bech32Address,
      });
    }
  }, [disconnect, hasMetamaskConnected]);

  const { handleWalletConnect, selectWalletModalConnectors } =
    useEvmConnectors();

  const [notAllowed, setNotAllowed] = useState(false);
  const [success, setSuccess] = useState(false);

  if (notAllowed) {
    return (
      <div
        className={clsx(
          'm-auto flex w-full flex-col items-center gap-[12px] sm:w-fit',
          className,
        )}
      >
        <PurchaseFailureBlock />
      </div>
    );
  }

  if (success) {
    return (
      <div
        className={clsx(
          'text-default-green m-auto flex w-full flex-col items-center gap-[12px] sm:w-fit',
          className,
        )}
      >
        <div className={clsx('max-w-[600px] text-[18px]', className)}>
          Congrats! You have successfully participated in the airdrop.
        </div>
      </div>
    );
  }

  if (targetHexAddress) {
    return (
      <>
        <Instructions />
        <div
          className={clsx(
            'flex w-full flex-col items-center gap-[12px] sm:w-fit',
            className,
          )}
        >
          <AddressToReceiveBonuses
            address={targetHexAddress}
            setNotAllowed={setNotAllowed}
            setSuccess={setSuccess}
          />
        </div>
      </>
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
              className="w-full min-w-[200px] uppercase sm:w-fit"
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
          className="w-full min-w-[200px] uppercase sm:w-fit"
          onClick={connectKeplrWallet}
        >
          Keplr Wallet
        </HaqqButton>
      </div>

      <CaptchaModal
        turnstileSiteKey={TURNSTILE_SITEKEY}
        isClosable={!!targetHexAddress}
      />
    </>
  );
}

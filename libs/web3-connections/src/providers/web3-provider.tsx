'use client';

import { createContext, PropsWithChildren, useContext, useMemo } from 'react';
import { Chain, haqqTestedge2 } from '@wagmi/chains';
import { createConfig, CreateConnectorFn, http, WagmiProvider } from 'wagmi';
import { walletConnect } from 'wagmi/connectors';
import { ReactQueryProvider } from './react-query-provider';

export const SUPPORTED_CHAINS = [haqqTestedge2];
const SupportedChainsContext = createContext<Chain[]>(SUPPORTED_CHAINS);

export const isAllowedChain = (chainId: number) => {
  return SUPPORTED_CHAINS.some((x) => {
    return x.id === chainId;
  });
};

export function useSupportedChains() {
  const supportedChains = useContext(SupportedChainsContext);

  if (!supportedChains) {
    throw new Error(
      'useSupportedChains should be used only from child of SupportedChainsContext',
    );
  }

  return supportedChains;
}

export function Web3Provider({
  children,
  withDevtools = false,
  walletConnectProjectId,
}: PropsWithChildren<{
  withDevtools?: boolean;
  walletConnectProjectId?: string;
}>) {
  const connectors: CreateConnectorFn[] = useMemo(() => {
    const connectors = [];

    if (walletConnectProjectId) {
      connectors.push(
        walletConnect({
          projectId: walletConnectProjectId,
          showQrModal: true,
        }),
      );
    }

    return connectors;
  }, [walletConnectProjectId]);

  const config = useMemo(() => {
    return createConfig({
      chains: [haqqTestedge2],
      transports: {
        [haqqTestedge2.id]: http(),
      },
      connectors,
    });
  }, [connectors]);

  return (
    <ReactQueryProvider withDevtools={withDevtools}>
      <SupportedChainsContext.Provider value={SUPPORTED_CHAINS}>
        <WagmiProvider config={config}>{children}</WagmiProvider>
      </SupportedChainsContext.Provider>
    </ReactQueryProvider>
  );
}

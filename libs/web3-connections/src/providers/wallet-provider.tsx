'use client';

import '@wagmi/core/window';

import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { haqqMainnet, haqqTestedge2 } from 'viem/chains';
import { useAccount, useDisconnect, useSwitchChain } from 'wagmi';
import { isAllowedChain, useSupportedChains } from './web3-provider';

export interface WalletProviderInterface {
  disconnect: () => void;
  selectNetwork: () => Promise<void>;
  isNetworkSupported: boolean;
  openSelectWallet: () => void;
  closeSelectWallet: () => void;
  isSelectWalletOpen: boolean;
}

const WalletContext = createContext<WalletProviderInterface | undefined>(
  undefined,
);

export function WalletProvider({ children }: { children: ReactNode }) {
  const { chain } = useAccount();
  const { switchChainAsync } = useSwitchChain();
  const { disconnect } = useDisconnect();
  const [isWalletSelectModalOpen, setWalletSelectModalOpen] = useState(false);

  const handleNetworkChange = useCallback(async () => {
    if (switchChainAsync) {
      await switchChainAsync({ chainId: haqqTestedge2.id });
    } else {
      console.warn('useWallet(): handleNetworkChange error');
    }
  }, [switchChainAsync]);

  const isNetworkSupported = useMemo(() => {
    return chain ? isAllowedChain(chain.id) : false;
  }, [chain]);

  const memoizedContext = useMemo(() => {
    return {
      disconnect,
      selectNetwork: handleNetworkChange,
      isNetworkSupported,
      openSelectWallet: () => {
        setWalletSelectModalOpen(true);
      },
      closeSelectWallet: () => {
        setWalletSelectModalOpen(false);
      },
      isSelectWalletOpen: isWalletSelectModalOpen,
    };
  }, [
    disconnect,
    handleNetworkChange,
    isNetworkSupported,
    setWalletSelectModalOpen,
    isWalletSelectModalOpen,
  ]);

  return (
    <WalletContext.Provider value={memoizedContext}>
      {children}
    </WalletContext.Provider>
  );
}

export function useWallet() {
  const walletService = useContext(WalletContext);

  if (!walletService) {
    throw new Error(
      'useWallet should be used only from child of WalletProvider',
    );
  }

  return walletService;
}

export const useChainId = () => {
  const { chain } = useAccount();
  const chains = useSupportedChains();

  const chainId = useMemo(() => {
    return chain?.id ?? chains[0].id;
  }, [chain, chains]);

  return chainId;
};

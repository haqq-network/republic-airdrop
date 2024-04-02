'use client';

import { createContext, useContext } from 'react';
import { ContractTransactionReceipt } from 'ethers';

type PromisFunc = () => Promise<any>;

export interface ITxResolverProps {
  walletAction: (d: any) => Promise<void>;
  isConfirming: boolean;
  isPending: boolean;
  isConfirmed: boolean;
  contractDeployAction: (
    func: PromisFunc,
  ) => Promise<ContractTransactionReceipt | null>;
  signAction: (a: PromisFunc) => Promise<string>;
}

export const TxResolverContext = createContext<ITxResolverProps>({
  walletAction: async () => {
    console.log('TxResolverContext');
  },
  isConfirming: false,
  isPending: false,
  isConfirmed: false,
  contractDeployAction: async () => {
    console.log('TxResolverContext');
    return null;
  },
  signAction: async () => {
    console.log('TxResolverContext');
    return '';
  },
});

export const useTxResolver = () => {
  return useContext<ITxResolverProps>(TxResolverContext);
};

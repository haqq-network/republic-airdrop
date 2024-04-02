'use client';

import { useCallback, useMemo } from 'react';
import { ContractTransactionReceipt } from 'ethers';
import { useWaitForTransactionReceipt, useWriteContract } from 'wagmi';
import { useDialogHook } from '@haqq-nft/hooks';
import { ITxResolverProps, TxResolverContext } from '@haqq-nft/types';
import { RequestErrorModal } from '../modal/request-error-modal/request-error-modal';
import { WaitingTxSignModal } from '../modal/waiting-tx-sign-modal/waiting-tx-sign-modal';

export const withTxResolver = (Component: any) => {
  return (props: any) => {
    const {
      isOpen: isOpenPending,
      onClose: onClosePendingTx,
      onOpen: onOpenPending,
    } = useDialogHook();

    const {
      isOpen: isOpenError,
      onClose: onCloseError,
      onOpen: onOpenError,
    } = useDialogHook();

    const { data: hash, isPending, writeContract } = useWriteContract();

    const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt(
      {
        hash,
      },
    );

    const walletAction = useCallback(
      async (data: any) => {
        try {
          onOpenPending();

          await writeContract(data);
        } catch (err) {
          onOpenError();
          console.error(err);
        } finally {
          onClosePendingTx();
        }
      },
      [writeContract, onOpenPending, onOpenError, onClosePendingTx],
    );

    const contractDeployAction = useCallback(
      async (func: () => Promise<ContractTransactionReceipt>) => {
        let result: ContractTransactionReceipt | null = null;

        try {
          onOpenPending();

          result = await func();
        } catch (err) {
          onOpenError();
          console.error(err);
        } finally {
          onClosePendingTx();
        }

        return result;
      },
      [onOpenPending, onOpenError, onClosePendingTx],
    );

    const signAction = useCallback(
      async (func: () => Promise<string>) => {
        let result = '';

        try {
          onOpenPending();

          result = await func();
        } catch (err) {
          onOpenError();
          console.error(err);
        } finally {
          onClosePendingTx();
        }

        return result;
      },
      [onOpenPending, onOpenError, onClosePendingTx],
    );

    const value = useMemo((): ITxResolverProps => {
      return {
        walletAction,
        isConfirming,
        isPending,
        isConfirmed: isSuccess,
        contractDeployAction,
        signAction,
      };
    }, [
      walletAction,
      isConfirming,
      isPending,
      isSuccess,
      contractDeployAction,
      signAction,
    ]);

    return (
      <TxResolverContext.Provider value={value}>
        <Component {...props} />

        <WaitingTxSignModal
          isOpen={isOpenPending}
          onClose={onClosePendingTx}
          onConfirmClick={onClosePendingTx}
        />

        <RequestErrorModal
          isOpen={isOpenError}
          onClose={onCloseError}
          onTryAgainClick={onCloseError}
        />
      </TxResolverContext.Provider>
    );
  };
};

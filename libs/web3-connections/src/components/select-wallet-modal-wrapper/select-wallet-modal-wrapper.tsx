'use client';

import { PropsWithChildren, useCallback, useMemo } from 'react';
import { useConnect } from 'wagmi';
import { SelectWalletModal } from '@haqq-nft/ui-kit';
import { useWallet } from '../../providers';

export function SelectWalletModalWrapper({
  children,
  showConnector = false,
  handleChallengedLogin,
}: PropsWithChildren & {
  showConnector?: boolean;
  handleChallengedLogin?: () => void;
}) {
  const { connectAsync, connectors, error, isPending } = useConnect();
  const { closeSelectWallet, isSelectWalletOpen } = useWallet();

  const handleClose = useCallback(async () => {
    handleChallengedLogin && (await handleChallengedLogin());
    closeSelectWallet();
  }, [closeSelectWallet, handleChallengedLogin]);

  const handleWalletConnect = useCallback(
    async (connectorIdx: number) => {
      await connectAsync({ connector: connectors[connectorIdx] });
      handleClose();
    },
    [handleClose, connectAsync, connectors],
  );

  const selectWalletModalConnectors = useMemo(() => {
    return connectors.map((connector, index) => {
      return {
        id: index,
        name: connector.name,
        isPending: isPending,
      };
    });
  }, [connectors, isPending]);

  const showConnectors = isSelectWalletOpen || showConnector;
  return (
    <>
      {children}

      <SelectWalletModal
        isOpen={showConnectors}
        connectors={selectWalletModalConnectors}
        error={error?.message}
        onConnectClick={handleWalletConnect}
        onClose={handleClose}
      />
    </>
  );
}

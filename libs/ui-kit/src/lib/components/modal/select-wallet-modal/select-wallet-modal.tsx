import clsx from 'clsx';
import { Button } from '../../button/button';
import { Heading } from '../../typography/heading';
import { Modal, ModalCloseButton } from '../modal';

export function SelectWalletModal({
  isOpen,
  onClose,
  onConnectClick,
  connectors,
  error,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConnectClick: (connectorId: number) => void;
  connectors: {
    id: number;
    name: string;
    isPending: boolean;
  }[];
  error: string | undefined;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div
        className={clsx(
          'mx-auto w-full lg:min-w-[500px] lg:rounded-[24px] lg:bg-black lg:p-8 lg:shadow-md',
          'min-w-[300px]',
        )}
      >
        <div className="flex flex-col space-y-6">
          <div className="flex flex-row items-center justify-center lg:justify-between">
            <Heading level={4}>Select wallet</Heading>
            <div className="hidden lg:block">
              <ModalCloseButton onClick={onClose} />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            {connectors.map((connector) => {
              return (
                <Button
                  className="w-full text-[14px] uppercase"
                  key={connector.id}
                  onClick={() => {
                    onConnectClick(connector.id);
                  }}
                >
                  {connector.name}
                </Button>
              );
            })}

            {error && <div className="pt-4 text-red-500">{error}</div>}
          </div>
        </div>
      </div>
    </Modal>
  );
}

'use client';

import { noop } from '@haqq-nft/utils';
import { Button } from '../../button/button';
import { Text } from '../../typography/text';
import { MobileHeading, Modal, ModalCloseButton } from '../modal';

export function WrongNetworkModal({
  isOpen,
  onClose = noop,
  onChangeNetwork,
  onDisconnect,
}: {
  isOpen: boolean;
  onClose?: () => void;
  onChangeNetwork: () => void;
  onDisconnect: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-modal-background drop-shadow-modal-drop-shadow relative mx-auto w-full max-w-[500px] rounded-[16px] p-[36px]">
        <div className="flex flex-col gap-y-[20px]">
          <MobileHeading>Wrong network</MobileHeading>

          <div className="flex flex-col items-center gap-x-[20px]">
            <Text
              className="text-light-graphite"
              size="large"
              weight="semibold"
            >
              You connected to not allowed network but to prevent mistakes you
              must be connected to HAQQ network
            </Text>

            <div className="mt-[24px] flex w-full flex-col  gap-[15px]">
              <Button onClick={onChangeNetwork} className="w-full uppercase">
                Change network
              </Button>
              <Button
                variant="default"
                onClick={onDisconnect}
                className="w-full uppercase"
              >
                Disconnect
              </Button>
            </div>
          </div>
        </div>
        <ModalCloseButton
          onClick={onClose}
          className="absolute right-[16px] top-[16px] outline-none"
        />
      </div>
    </Modal>
  );
}

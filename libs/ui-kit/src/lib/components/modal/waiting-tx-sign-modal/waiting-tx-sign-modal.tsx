import { Button } from '../../button/button';
import { SpinnerLoader } from '../../spinner-loader/spinner-loader';
import { Text } from '../../typography/text';
import { MobileHeading, Modal, ModalCloseButton } from '../modal';

export function WaitingTxSignModal({
  isOpen,
  onClose,
  onConfirmClick,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirmClick: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-modal-background drop-shadow-modal-drop-shadow relative mx-auto flex h-screen w-screen max-w-[500px] justify-center rounded-[16px] px-[16px] py-[36px] sm:h-auto sm:w-full sm:p-[36px]">
        <div className="mt-auto flex h-2/3 flex-col items-center sm:mt-0 sm:h-auto">
          <SpinnerLoader className="h-[48px] w-[48px]" />
          <MobileHeading className="mt-[20px]">Waiting</MobileHeading>
          <div className="mt-[8px]">
            <Text>To continue send transaction with your wallet</Text>
          </div>

          <Button
            className="mt-auto w-full sm:mt-[30px]"
            onClick={onConfirmClick}
          >
            Cancel
          </Button>
        </div>
        <ModalCloseButton
          onClick={onClose}
          className="absolute right-[16px] top-[16px] outline-none"
        />
      </div>
    </Modal>
  );
}

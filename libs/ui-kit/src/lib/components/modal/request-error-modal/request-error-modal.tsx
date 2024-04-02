import { Button } from '../../button/button';
import { Text } from '../../typography/text';
import { MobileHeading, Modal, ModalCloseButton } from '../modal';

export function RequestErrorModal({
  isOpen,
  onClose,
  onTryAgainClick,
}: {
  isOpen: boolean;
  onClose: () => void;
  onTryAgainClick: () => void;
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-modal-background drop-shadow-modal-drop-shadow relative mx-auto flex h-screen w-screen justify-center rounded-[16px] px-[16px] py-[36px] pb-[36px] pt-[60px] sm:h-auto sm:w-full sm:min-w-[340px] sm:p-[36px] lg:min-w-[500px]">
        <div className="mt-auto flex h-2/3 w-full flex-col items-center sm:mt-0 sm:h-auto">
          <MobileHeading>Error</MobileHeading>
          <div className="mt-[8px]">
            <Text>Request cancelled by user.</Text>
          </div>
          <div className="mt-auto flex w-full flex-row gap-x-[12px] sm:mt-[30px]">
            <Button onClick={onClose} className="w-1/2">
              Close
            </Button>
            <Button onClick={onTryAgainClick} className="w-1/2">
              Try again
            </Button>
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

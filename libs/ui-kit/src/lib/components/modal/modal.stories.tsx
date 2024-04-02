import { Fragment, useState } from 'react';
import { Meta } from '@storybook/react';
import {
  Modal as ModalComponent,
  ModalCloseButton,
  MobileHeading,
  MobileBody,
} from './modal';
import { Button } from '../button/button';
import { Text } from '../typography/text';

const meta: Meta<typeof ModalComponent> = {
  component: ModalComponent,
  title: 'ui-kit/modals',
  parameters: {
    layout: 'centered',
  },
};

export default meta;

export const Modal = () => {
  const [opened, setOpened] = useState(true);

  return (
    <Fragment>
      <Button
        onClick={() => {
          setOpened(true);
        }}
      >
        Open Modal
      </Button>
      <ModalComponent
        onClose={() => {
          setOpened(!opened);
        }}
        isOpen={opened}
      >
        <MobileBody className="max-w-[480px]">
          <ModalCloseButton
            className="absolute right-[16px] top-[16px]"
            onClick={() => {
              setOpened(false);
            }}
          />

          <div className="flex flex-col gap-[24px]">
            <MobileHeading className="mt-[24px] sm:mt-[4px]">
              Modal
            </MobileHeading>

            <p>
              <Text>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat error, qui odit adipisci quibusdam vero quam
                repellendus maiores
              </Text>
            </p>
            <p>
              <Text>
                Eveniet optio nesciunt veritatis deleniti aliquam quo! Ut nulla
                asperiores officia ducimus?
              </Text>
            </p>
          </div>
        </MobileBody>
      </ModalComponent>
    </Fragment>
  );
};

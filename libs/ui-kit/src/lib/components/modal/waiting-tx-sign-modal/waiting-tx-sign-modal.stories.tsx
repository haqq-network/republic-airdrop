import { Meta, StoryObj } from '@storybook/react';
import { WaitingTxSignModal as WaitingTxSignModalComponent } from './waiting-tx-sign-modal';

const meta: Meta<typeof WaitingTxSignModalComponent> = {
  component: WaitingTxSignModalComponent,
  title: 'ui-kit/modals/plug-and-play',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof WaitingTxSignModalComponent>;

export const WaitingTxSignModal: Story = {
  args: {
    isOpen: true,
  },
};

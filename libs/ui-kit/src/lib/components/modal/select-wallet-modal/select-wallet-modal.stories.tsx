import { Meta, StoryObj } from '@storybook/react';
import { SelectWalletModal as SelectWalletModalComponent } from './select-wallet-modal';

const meta: Meta<typeof SelectWalletModalComponent> = {
  component: SelectWalletModalComponent,
  title: 'ui-kit/modals/plug-and-play',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SelectWalletModalComponent>;

export const SelectWalletModal: Story = {
  args: {
    isOpen: true,
    connectors: [{ id: 1, name: 'Kek Network', isPending: true }],
  },
};

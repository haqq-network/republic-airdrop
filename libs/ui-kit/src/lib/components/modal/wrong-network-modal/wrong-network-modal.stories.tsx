import { Meta, StoryObj } from '@storybook/react';
import { WrongNetworkModal as WrongNetworkModalComponent } from './wrong-network-modal';

const meta: Meta<typeof WrongNetworkModalComponent> = {
  component: WrongNetworkModalComponent,
  title: 'ui-kit/modals/plug-and-play',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof WrongNetworkModalComponent>;

export const WrongNetworkModal: Story = {
  args: {
    isOpen: true,
  },
};

import { Meta, StoryObj } from '@storybook/react';
import { Toast as ToastComponent } from './toast';
import { FilledStarIcon } from '../icons/icons';

const meta: Meta<typeof ToastComponent> = {
  component: ToastComponent,
  title: 'ui-kit',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ToastComponent>;

export const Toast: Story = {
  args: {
    icon: <FilledStarIcon />,
    children: 'NFT successfully listed for sale',
  },
};

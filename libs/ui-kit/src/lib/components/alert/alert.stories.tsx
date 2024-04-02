import { Meta, StoryObj } from '@storybook/react';
import { Alert as AlertComponent } from './alert';
import { AlertIcon } from '../icons/icons';

const meta: Meta<typeof AlertComponent> = {
  component: AlertComponent,
  title: 'ui-kit/alert',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof AlertComponent>;

export const WarningAlert: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit amet esse cupiditate ipsum quam, saepe ipsa reiciendis fuga quo ut, quis eaque repellendus enim beatae maxime aperiam cumque id! Incidunt?',
    icon: <AlertIcon />,
    type: 'warning',
  },
};

export const DangerAlert: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit amet esse cupiditate ipsum quam, saepe ipsa reiciendis fuga quo ut, quis eaque repellendus enim beatae maxime aperiam cumque id! Incidunt?',
    icon: <AlertIcon />,
    type: 'danger',
  },
};

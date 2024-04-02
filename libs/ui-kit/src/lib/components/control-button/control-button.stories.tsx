import { Meta, StoryObj } from '@storybook/react';
import { ControlButton as ControlButtonComponent } from './control-button';

const meta: Meta<typeof ControlButtonComponent> = {
  component: ControlButtonComponent,
  title: 'ui-kit/control-button',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ControlButtonComponent>;

export const Plus: Story = {
  args: {
    variant: 'add',
  },
};

export const Close: Story = {
  args: {
    variant: 'close',
  },
};

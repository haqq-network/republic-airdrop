import { Meta, StoryObj } from '@storybook/react';
import { Switch as SwitchComponent } from './switch';

const meta: Meta<typeof SwitchComponent> = {
  component: SwitchComponent,
  title: 'ui-kit/switch',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SwitchComponent>;

export const SwitchDefault: Story = {};

export const SwitchBig: Story = {
  args: {
    size: 'big',
  },
};

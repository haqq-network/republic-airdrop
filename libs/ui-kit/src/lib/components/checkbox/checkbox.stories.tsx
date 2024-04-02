import { Meta, StoryObj } from '@storybook/react';
import { Checkbox as CheckboxComponent } from './checkbox';

const meta: Meta<typeof CheckboxComponent> = {
  component: CheckboxComponent,
  title: 'ui-kit/checkbox',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxComponent>;

export const Checkbox: Story = {
  args: {
    children: 'checkbox',
    id: 'test',
  },
};

export const CheckboxDisabled: Story = {
  args: {
    children: 'checkbox disabled',
    disabled: true,
  },
};

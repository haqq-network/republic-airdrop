import { Meta, StoryObj } from '@storybook/react';
import { Button as ButtonComponent } from './button';

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: 'ui-kit/button',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const DefaultButton: Story = {
  args: {
    children: 'Default button',
  },
};

export const DefaultDisabled: Story = {
  args: {
    children: 'Disabled button',
    disabled: true,
  },
};

export const DefaultLoading: Story = {
  args: {
    children: 'Default Loading button',
    isLoading: true,
  },
};

export const GreenButton: Story = {
  args: {
    children: 'Green button',
    variant: 'green',
  },
};

export const GreenButtonDisabled: Story = {
  args: {
    children: 'Green disabled button',
    variant: 'green',
    disabled: true,
  },
};

export const GreenButtonLoading: Story = {
  args: {
    children: 'Green loading button',
    isLoading: true,
    variant: 'green',
  },
};

export const RedButton: Story = {
  args: {
    children: 'Green button',
    variant: 'red',
  },
};

export const RedButtonDisabled: Story = {
  args: {
    children: 'Green disabled button',
    variant: 'red',
    disabled: true,
  },
};

export const RedButtonLoading: Story = {
  args: {
    children: 'Green loading button',
    isLoading: true,
    variant: 'red',
  },
};

export const SmallDefault: Story = {
  args: {
    children: 'Default small button',
    size: 'small',
  },
};

export const SmallDefaultDisabled: Story = {
  args: {
    children: 'Default small disabled button',
    size: 'small',
    disabled: true,
  },
};

export const SmallDefaultButtonLoading: Story = {
  args: {
    children: 'Default small loading button',
    isLoading: true,
    size: 'small',
  },
};

export const SmallGreenButton: Story = {
  args: {
    children: 'Green small button',
    variant: 'green',
    size: 'small',
  },
};

export const SmallGreenButtonDisabled: Story = {
  args: {
    children: 'Green small disabled button',
    variant: 'green',
    size: 'small',
    disabled: true,
  },
};

export const SmallGreenButtonLoading: Story = {
  args: {
    children: 'Green small loading button',
    isLoading: true,
    variant: 'green',
    size: 'small',
  },
};

export const SmallRedButton: Story = {
  args: {
    children: 'Green small button',
    variant: 'red',
    size: 'small',
  },
};

export const SmallRedButtonDisabled: Story = {
  args: {
    children: 'Green small disabled button',
    variant: 'red',
    size: 'small',
    disabled: true,
  },
};

export const SmallRedButtonLoading: Story = {
  args: {
    children: 'Green small loading button',
    isLoading: true,
    variant: 'red',
    size: 'small',
  },
};

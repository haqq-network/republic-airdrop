import { Meta, StoryObj } from '@storybook/react';
import { BagButton as BagButtonComponent } from './bag-button';

const meta: Meta<typeof BagButtonComponent> = {
  component: BagButtonComponent,
  title: 'ui-kit/bag-button',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof BagButtonComponent>;

export const DefaultBagButton: Story = {
  args: {
    count: 10,
  },
};

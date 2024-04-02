import { Meta, StoryObj } from '@storybook/react';
import { NFTLabel as NFTLabelComponent } from './nft-label';

const meta: Meta<typeof NFTLabelComponent> = {
  component: NFTLabelComponent,
  title: 'ui-kit/nft-label',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof NFTLabelComponent>;

export const OnModeration: Story = {
  args: {
    type: 'moderation',
  },
};

export const Rejected: Story = {
  args: {
    type: 'rejected',
  },
};
export const InBasket: Story = {
  args: {
    type: 'basket',
  },
};
export const Favorite: Story = {
  args: {
    type: 'favorite',
  },
};

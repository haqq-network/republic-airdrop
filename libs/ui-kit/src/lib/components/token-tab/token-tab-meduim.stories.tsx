import { Meta, StoryObj } from '@storybook/react';
import { TokenTabMedium as TokenTabMediumComponent } from './token-tab';

const meta: Meta<typeof TokenTabMediumComponent> = {
  component: TokenTabMediumComponent,
  title: 'ui-kit/token-tab/medium',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TokenTabMediumComponent>;

export const TokenTabMediumSingle: Story = {
  args: {
    type: 'single',
    isActive: true,
  },
};

export const TokenTabMediumMultiple: Story = {
  args: {
    type: 'multiple',
  },
};

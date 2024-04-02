import { Meta, StoryObj } from '@storybook/react';
import { TokenTabLarge as TokenTabLargeComponent } from './token-tab';

const meta: Meta<typeof TokenTabLargeComponent> = {
  component: TokenTabLargeComponent,
  title: 'ui-kit/token-tab/large',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TokenTabLargeComponent>;

export const TokenTabLargeSingle: Story = {
  args: {
    type: 'single',
  },
};

export const TokenTabLargeMultiple: Story = {
  args: {
    type: 'multiple',
  },
};

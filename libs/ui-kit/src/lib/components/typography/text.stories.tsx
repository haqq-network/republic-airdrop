import { Meta, StoryObj } from '@storybook/react';
import { Text as TextComponent } from './text';

const meta: Meta<typeof TextComponent> = {
  component: TextComponent,
  title: 'ui-kit/Typography',
};

export default meta;
type Story = StoryObj<typeof TextComponent>;

export const Text: Story = {
  args: {
    size: 'medium',
    weight: 'normal',
    isStretched: false,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, error?',
  },
};

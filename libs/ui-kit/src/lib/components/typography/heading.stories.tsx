import { Meta, StoryObj } from '@storybook/react';
import { Heading as HeadingComponent } from './heading';

const meta: Meta<typeof HeadingComponent> = {
  component: HeadingComponent,
  title: 'ui-kit/Typography',
};

export default meta;
type Story = StoryObj<typeof HeadingComponent>;

export const Heading: Story = {
  args: {
    weight: 'extrabold',
    isStretched: false,
    level: 3,
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
};

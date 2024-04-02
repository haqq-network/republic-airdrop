import { Meta, StoryObj } from '@storybook/react';
import { Link as LinkComponent } from './link';

const meta: Meta<typeof LinkComponent> = {
  component: LinkComponent,
  title: 'ui-kit/Typography',
};

export default meta;
type Story = StoryObj<typeof LinkComponent>;

export const Link: Story = {
  args: {
    href: '#',
    children: 'I`am link!',
  },
};

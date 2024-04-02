import { Meta, StoryObj } from '@storybook/react';
import { AvatarImage as AvatarImageComponent } from './avatar-image';

const meta: Meta<typeof AvatarImageComponent> = {
  component: AvatarImageComponent,
  title: 'ui-kit',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof AvatarImageComponent>;

export const AvatarImage: Story = {
  args: {
    image: 'https://placekitten.com/200/200',
  },
};

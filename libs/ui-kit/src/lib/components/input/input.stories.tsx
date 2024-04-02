import { Meta, StoryObj } from '@storybook/react';
import { Input as InputComponent } from './input';
import { MagnifierIcon, SlashIcon } from '../icons/icons';

const meta: Meta<typeof InputComponent> = {
  component: InputComponent,
  title: 'ui-kit/input',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof InputComponent>;

export const Default: Story = {
  args: {
    placeholder: 'Search collection or NFT',
    label: 'Label',
    type: 'text',
    id: 'id',
  },
};

export const WithError: Story = {
  args: {
    placeholder: 'Search collection or NFT',
    label: 'Label',
    type: 'text',
    error: 'Error message',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'Search collection or NFT',
    label: 'Label',
    type: 'text',
    disabled: true,
    id: 'id',
  },
};

export const WithIcons: Story = {
  args: {
    placeholder: 'Search collection or NFT',
    label: 'Label',
    type: 'text',
    leftSlot: <MagnifierIcon />,
    rightSlot: <SlashIcon />,
  },
};

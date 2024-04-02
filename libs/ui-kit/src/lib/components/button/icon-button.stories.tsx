import { Meta, StoryObj } from '@storybook/react';
import { IconButton as IconButtonComponent } from './icon-button';
import { BagIcon, TwitterIcon } from '../icons/icons';

const meta: Meta<typeof IconButtonComponent> = {
  component: IconButtonComponent,
  title: 'ui-kit/icon-button',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof IconButtonComponent>;

export const DefaultButtonWithIcon: Story = {
  args: {
    children: <BagIcon />,
    disabled: false,
  },
};

export const GreenWithIcon: Story = {
  args: {
    children: <TwitterIcon />,
    variant: 'green',
  },
};

export const SmallGreenWithIcon: Story = {
  args: {
    children: <BagIcon className="mx-[-9px] my-[-5px] scale-[0.9]" />,
    variant: 'green',
    size: 'small',
  },
};

export const SmallDefaultWithIcon: Story = {
  args: {
    children: <BagIcon className="mx-[-9px] my-[-5px] scale-[0.9]" />,
    size: 'small',
  },
};

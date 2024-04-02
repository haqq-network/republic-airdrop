import { Meta, StoryObj } from '@storybook/react';
import { Logo as LogoComponent } from './logo';

const meta: Meta<typeof LogoComponent> = {
  component: LogoComponent,
  title: 'ui-kit',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof LogoComponent>;

export const Logo: Story = {};

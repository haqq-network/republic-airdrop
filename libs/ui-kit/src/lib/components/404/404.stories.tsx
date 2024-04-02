import { Meta, StoryObj } from '@storybook/react';
import { ErrorPage as ErrorPageComponent } from './404';

const meta: Meta<typeof ErrorPageComponent> = {
  component: ErrorPageComponent,
  title: 'ui-kit/404',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof ErrorPageComponent>;

export const ErrorBlock: Story = {};

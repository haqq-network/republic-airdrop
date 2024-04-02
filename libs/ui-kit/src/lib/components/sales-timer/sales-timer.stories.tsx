import { Meta, StoryObj } from '@storybook/react';
import { SalesTimer as SalesTimerComponent } from './sales-timer';

const meta: Meta<typeof SalesTimerComponent> = {
  component: SalesTimerComponent,
  title: 'ui-kit',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SalesTimerComponent>;

export const SalesTimer: Story = {
  args: {
    date: new Date('10-11-2034'),
    title: 'Sales period end',
  },
};

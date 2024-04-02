import { Meta, StoryObj } from '@storybook/react';
import { Tabs as TabsComponent } from './tabs';

const meta: Meta<typeof TabsComponent> = {
  component: TabsComponent,
  title: 'ui-kit/tabs/tabs',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TabsComponent>;

export const Tabs: Story = {
  args: {
    current: '0',
    variants: [
      {
        id: '0',
        label: 'Owned',
        counter: 10,
      },
      {
        id: '1',
        label: 'On sale',
        counter: 3,
      },
      {
        id: '2',
        label: 'Created',
      },
    ],
  },
};

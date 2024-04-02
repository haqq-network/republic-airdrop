import { Meta, StoryObj } from '@storybook/react';
import { SmallTabs as SmallTabsComponent } from './small-tabs';

const meta: Meta<typeof SmallTabsComponent> = {
  component: SmallTabsComponent,
  title: 'ui-kit/tabs/small-tabs',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof SmallTabsComponent>;

export const Tabs: Story = {
  args: {
    current: 'info',
    tabs: [
      { label: 'Info', id: 'info' },
      { label: 'Properties', id: 'properties' },
      { label: 'Bids', id: 'bids' },
      { label: 'Activity', id: 'activity' },
    ],
  },
};

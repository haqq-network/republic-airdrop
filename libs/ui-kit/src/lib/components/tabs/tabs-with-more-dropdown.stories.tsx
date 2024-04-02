import { Meta, StoryObj } from '@storybook/react';
import { TabsWithMoreDropdown as TabsWithMoreDropdownComponent } from './tabs-with-more-dropdown';

const meta: Meta<typeof TabsWithMoreDropdownComponent> = {
  component: TabsWithMoreDropdownComponent,
  title: 'ui-kit/tabs/tabs-with-more-dropdown',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TabsWithMoreDropdownComponent>;

export const TabsWithMoreDropdown: Story = {
  args: {
    current: '5',
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
      {
        id: '3',
        label: 'Collections',
      },
      {
        id: '4',
        label: 'Activity',
      },
      {
        id: '5',
        label: 'Sold',
      },
      {
        id: '6',
        label: 'Favorites',
      },
      {
        id: '7',
        label: 'Moderation',
      },
    ],
    indexCollapse: 4,
  },
};

export const TabsWithMoreDropdownActiveDropdown: Story = {
  args: {
    current: '5',
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
      {
        id: '3',
        label: 'Collections',
      },
      {
        id: '4',
        label: 'Activity',
      },
      {
        id: '5',
        label: 'Sold',
      },
      {
        id: '6',
        label: 'Favorites',
      },
      {
        id: '7',
        label: 'Moderation',
      },
    ],
    indexCollapse: 4,
  },
};

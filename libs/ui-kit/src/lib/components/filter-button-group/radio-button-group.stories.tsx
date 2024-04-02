import { Meta, StoryObj } from '@storybook/react';
import { RadioButtonGroup as RadioButtonGroupComponent } from './radio-button-group';

const meta: Meta<typeof RadioButtonGroupComponent> = {
  component: RadioButtonGroupComponent,
  title: 'ui-kit/radio-button-group',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof RadioButtonGroupComponent>;

const recentAndTopFilters = [
  { id: 'recent', label: 'recent' },
  { id: 'top', label: 'top' },
];
const timeFilters = [
  { id: '1h', label: '1h' },
  { id: '6h', label: '6h' },
  { id: '24h', label: '24h' },
  { id: '7d', label: '7d' },
  { id: '30d', label: '30d' },
];

export const RadioButtonGroupRecentTop: Story = {
  args: {
    variants: recentAndTopFilters,
    current: recentAndTopFilters[1].label,
  },
};

export const RadioButtonGroupTime: Story = {
  args: {
    variants: timeFilters,
    current: timeFilters[2].label,
  },
};

import { useState } from 'react';
import { StoryObj, Meta } from '@storybook/react';
import { RadioInputGroup as RadioInputGroupComponent } from './radio-input';

const meta: Meta<typeof RadioInputGroupComponent> = {
  component: RadioInputGroupComponent,
  title: 'ui-kit/radio-input-group',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof RadioInputGroupComponent>;

const options = [
  {
    id: 'all',
    label: 'All',
  },
  {
    id: 'sales',
    label: 'Sales',
  },
  {
    id: 'listings',
    label: 'Listings',
  },
  {
    id: 'offers',
    label: 'Offers',
  },
  {
    id: 'collection-offers',
    label: 'Collection offers',
  },
  {
    id: 'transfers',
    label: 'Transfers',
  },
];

export const RadioInputGroup: Story = {
  args: {
    options,
    value: null,
  },
};

export const RadioInputGroupDisabled: Story = {
  args: {
    options,
    value: null,
    disabled: true,
  },
};

export const RadioInputGroup2 = () => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <RadioInputGroupComponent
      options={options}
      value={value}
      onChange={(newValue) => {
        setValue(newValue);
      }}
    />
  );
};

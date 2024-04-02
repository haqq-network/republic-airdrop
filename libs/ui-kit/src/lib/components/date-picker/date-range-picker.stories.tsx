import { Meta, StoryObj } from '@storybook/react';
import { DateRangePicker as DateRangePickerComponent } from './date-range-picker';

const meta: Meta<typeof DateRangePickerComponent> = {
  component: DateRangePickerComponent,
  title: 'ui-kit/date-range-picker',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof DateRangePickerComponent>;

export const PickerEmpty: Story = {
  args: {},
};

export const PickedDay: Story = {
  args: {
    date: [new Date('2024-02-10'), new Date('2024-02-10')],
  },
};

export const PickedWeek: Story = {
  args: {
    date: [new Date('2024-02-10'), new Date('2024-02-17')],
  },
};

export const Picked2Weeks: Story = {
  args: {
    date: [new Date('2024-02-10'), new Date('2024-02-24')],
  },
};

export const PickedMonth: Story = {
  args: {
    date: [new Date('2024-02-10'), new Date('2024-03-10')],
  },
};

export const Picked3Months: Story = {
  args: {
    date: [new Date('2024-02-10'), new Date('2024-05-10')],
  },
};

export const Picked6Months: Story = {
  args: {
    date: [new Date('2024-02-10'), new Date('2024-08-10')],
  },
};

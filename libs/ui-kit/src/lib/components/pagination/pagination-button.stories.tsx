import { Meta, StoryObj } from '@storybook/react';
import { PaginationButton as PaginationButtonComponent } from './pagination';

const meta: Meta<typeof PaginationButtonComponent> = {
  component: PaginationButtonComponent,
  title: 'ui-kit/pagination',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof PaginationButtonComponent>;

export const PaginationButton: Story = {
  args: {
    children: '1',
    disabled: false,
    isActive: false,
  },
};

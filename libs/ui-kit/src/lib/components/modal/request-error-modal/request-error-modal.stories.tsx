import { Meta, StoryObj } from '@storybook/react';
import { RequestErrorModal as RequestErrorModalComponent } from './request-error-modal';

const meta: Meta<typeof RequestErrorModalComponent> = {
  component: RequestErrorModalComponent,
  title: 'ui-kit/modals/plug-and-play',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof RequestErrorModalComponent>;

export const RequestErrorModal: Story = {
  args: {
    isOpen: true,
  },
};

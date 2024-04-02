import { Meta, StoryObj } from '@storybook/react';
import { MintForm as MintFormComponent } from './mint-form';

const meta: Meta<typeof MintFormComponent> = {
  component: MintFormComponent,
  title: 'ui-kit/forms/mint-form',
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => {
      return (
        <div className="w-[343px] sm:w-[600px]">
          <Story />
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof MintFormComponent>;

export const MintForm: Story = {};

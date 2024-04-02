import { Meta, StoryObj } from '@storybook/react';
import { Tag as TagComponent } from './tag';

const meta: Meta<typeof TagComponent> = {
  component: TagComponent,
  title: 'ui-kit/tags',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TagComponent>;

export const TagMaxWidth: Story = {
  args: {
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet officia corrupti mollitia tempore dolore asperiores delectus, rem consectetur adipisci sequi veritatis provident tempora in ex quae quo repellat iusto nesciunt',
  },
};

export const TagShort: Story = {
  args: {
    text: 'Lorem ipsum',
  },
};

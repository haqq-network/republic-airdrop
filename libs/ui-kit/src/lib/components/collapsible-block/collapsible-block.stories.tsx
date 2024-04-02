import { Meta, StoryObj } from '@storybook/react';
import { CollapsibleBlock as CollapsibleBlockComponent } from './collapsible-block';

const meta: Meta<typeof CollapsibleBlockComponent> = {
  component: CollapsibleBlockComponent,
  title: 'ui-kit',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof CollapsibleBlockComponent>;

export const CollapsibleBlock: Story = {
  args: {
    children: (
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
        sapiente aliquam nulla illo qui nam officiis quia perspiciatis
        consequatur quam, facilis reiciendis porro vitae distinctio quod rerum
        quo maxime omnis?
      </div>
    ),
    title: 'Lorem ipsum dolor',
  },
};

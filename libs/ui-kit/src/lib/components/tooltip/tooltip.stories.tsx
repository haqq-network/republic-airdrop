import { Meta, StoryObj } from '@storybook/react';
import { Tooltip as TooltipComponent } from './tooltip';

const meta: Meta<typeof TooltipComponent> = {
  component: TooltipComponent,
  title: 'ui-kit/tooltip',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TooltipComponent>;

export const Tooltip: Story = {
  args: {
    children: (
      <div className="text-base">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        facilis harum dolorum mollitia tenetur error veritatis ipsum culpa
        corrupti pariatur ea, quod nostrum voluptatem autem est molestias fugit
        nulla suscipit.
      </div>
    ),
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt facilis harum dolorum mollitia tenetur error veritatis ipsum culpa corrupti pariatur ea, quod nostrum voluptatem autem est molestias fugit nulla suscipit.',
  },
};

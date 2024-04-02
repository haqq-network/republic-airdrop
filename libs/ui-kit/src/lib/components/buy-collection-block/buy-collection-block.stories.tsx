import { Meta, StoryObj } from '@storybook/react';
import { BuyCollectionBlock as BuyCollectionBlockComponent } from './buy-collection-block';

const meta: Meta<typeof BuyCollectionBlockComponent> = {
  component: BuyCollectionBlockComponent,
  title: 'ui-kit',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof BuyCollectionBlockComponent>;

const mockNftImg = 'https://placekitten.com/g/200/200';

export const BuyCollectionBlock: Story = {
  args: {
    commission: 10,
    image: mockNftImg,
    title: 'lorem ipsum dolor sit amet consectetur adipisicing elit',
  },
};

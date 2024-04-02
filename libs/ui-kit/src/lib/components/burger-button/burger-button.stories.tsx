import { Meta, StoryObj } from '@storybook/react';
import { BurgerButton as BuyCollectionBlockComponent } from './burger-button';

const meta: Meta<typeof BuyCollectionBlockComponent> = {
  component: BuyCollectionBlockComponent,
  title: 'ui-kit',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof BuyCollectionBlockComponent>;

export const BurgerButton: Story = {};

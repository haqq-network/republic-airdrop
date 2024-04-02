import { Meta, StoryObj } from '@storybook/react';
import { Header as HeaderComponent } from './header';
import { withoutPadding } from '../../../../../storybook/.storybook/decorators';

const meta: Meta<typeof HeaderComponent> = {
  component: HeaderComponent,
  title: 'ui-kit/Layout/Header',
  decorators: [withoutPadding],
};

export default meta;
type Story = StoryObj<typeof HeaderComponent>;

export const Header: Story = {};

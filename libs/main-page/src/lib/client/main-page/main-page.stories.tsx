import { Meta, StoryObj } from '@storybook/react';
import { MainPage as MainPageComponent } from './main-page';

const meta: Meta<typeof MainPageComponent> = {
  component: MainPageComponent,
  title: 'Pages',
};

export default meta;
type Story = StoryObj<typeof MainPageComponent>;

export const MainPage: Story = {};

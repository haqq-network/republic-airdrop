import { Meta, StoryObj } from '@storybook/react';
import { Drawer as DrawerComponent } from './drawer';
import { Button } from '../button/button';

const meta: Meta<typeof DrawerComponent> = {
  component: DrawerComponent,
  title: 'ui-kit/drawer',
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof DrawerComponent>;

export const Default: Story = {
  args: {
    isOpen: true,
    children: (
      <div className="flex flex-col gap-8">
        <div>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
          sapiente incidunt qui sint tempora, reiciendis explicabo? Sequi
          reprehenderit vitae provident officia molestias? Eveniet inventore
          nostrum ex, repellendus error rerum doloremque.
        </div>
        <div>
          Commodi eveniet dolor omnis. Maxime atque aliquam, excepturi fugit
          dolorem sapiente autem, impedit quod facilis dolore, fuga vero! Nobis
          aliquid eligendi, placeat quas dolor officia distinctio dignissimos
          maxime deleniti at.
        </div>
        <div>
          Nobis, cum nulla reprehenderit hic nesciunt aperiam mollitia, velit
          reiciendis quibusdam officia possimus laudantium quia maiores minima
          voluptate, excepturi consequatur vitae enim dolores optio. Sequi
          necessitatibus tempore rem pariatur nobis.
        </div>
        <div>
          <Button
            variant="green"
            className="w-full uppercase"
            onClick={console.log}
          >
            Buy
          </Button>
        </div>
      </div>
    ),
  },
};

export const WithCustomClass: Story = {
  args: {
    isOpen: true,
    className: 'bg-red-500',
  },
};

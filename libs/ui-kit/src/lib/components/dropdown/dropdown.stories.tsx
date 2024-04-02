import { Meta, StoryObj } from '@storybook/react';
import { Dropdown as DropdownComponent } from './dropdown';
import { Button } from '../button/button';
import { Link } from '../typography/link';

const meta: Meta<typeof DropdownComponent> = {
  component: DropdownComponent,
  title: 'ui-kit/dropdown',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof DropdownComponent>;

const dropdownItems = [
  { title: 'kek1', href: '#' },
  { title: 'kek2', href: '#' },
  { title: 'kek3', href: '#' },
  { title: 'kek4', href: '#' },
];

export const LeftDropdown: Story = {
  args: {
    children: <Button className="uppercase ">click on me</Button>,
    content: (
      <div className="flex flex-col py-[12px] text-[24px] font-[600] leading-[30px]">
        {dropdownItems.map((el, idx) => {
          return (
            <Link
              className="px-[24px] py-[12px]"
              href={el.href}
              title={el.title}
              key={idx}
            >
              {el.title}
            </Link>
          );
        })}
      </div>
    ),
  },
};

export const RightDropdown: Story = {
  args: {
    position: 'right',
    children: <Button className="uppercase ">click on me</Button>,
    content: (
      <div className="flex flex-col py-[12px] text-[24px] font-[600] leading-[30px]">
        {dropdownItems.map((el, idx) => {
          return (
            <Link
              className="px-[24px] py-[12px]"
              href={el.href}
              title={el.title}
              key={idx}
            >
              {el.title}
            </Link>
          );
        })}
      </div>
    ),
  },
};

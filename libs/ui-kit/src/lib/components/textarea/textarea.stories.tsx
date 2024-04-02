import { Meta, StoryObj } from '@storybook/react';
import { Textarea as TextareaComponent } from './textarea';

const meta: Meta<typeof TextareaComponent> = {
  component: TextareaComponent,
  title: 'ui-kit/textarea',
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof TextareaComponent>;

export const Default: Story = {
  args: {
    placeholder: 'Very simple gray textarea :(',
    label: 'I am just a textarea',
    id: 'id',
  },
};

export const AutoFocus: Story = {
  args: {
    placeholder: 'I am autofocused',
    label: 'I am autofocused',
    id: 'id',
    autoFocus: true,
  },
};

export const NonResizable: Story = {
  args: {
    placeholder: 'Try to resize me!',
    label: 'I am non-resizable',
    id: 'id',
    resizable: false,
  },
};

export const FixedSize: Story = {
  args: {
    placeholder: 'My rows are 5 and cols are 50!',
    label: 'I am fixed size',
    id: 'id',
    resizable: false,
    rows: 5,
    cols: 50,
  },
};

export const Customisable: Story = {
  args: {
    placeholder: 'Cringe but customised textarea. You can make it better!',
    label: 'I am cringe',
    id: 'id',
    containerClassName: '!w-[50vw]',
    inputWrapperClassName: '!bg-violet-300',
    inputClassName: 'bg-violet-500',
  },
};

export const WithError: Story = {
  args: {
    label: 'Textarea with error',
    error: 'Angry error message',
  },
};

export const WithExtraLabel: Story = {
  args: {
    label: 'Field name',
    isOptional: true,
    placeholder: 'I have an extra label',
  },
};

export const Disabled: Story = {
  args: {
    placeholder: 'I am a disabled textarea',
    label: 'Disabled sad textarea :(',
    disabled: true,
    resizable: false,
    id: 'id',
  },
};

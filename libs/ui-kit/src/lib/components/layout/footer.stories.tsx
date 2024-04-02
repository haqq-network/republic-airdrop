import { Meta, StoryObj, StoryFn, StoryContext } from '@storybook/react';
import { Footer as FooterComponent } from './footer';
import { withoutPadding } from '../../../../../storybook/.storybook/decorators';

const meta: Meta<typeof FooterComponent> = {
  component: FooterComponent,
  title: 'ui-kit/Layout/Footer',
  decorators: [
    withoutPadding,
    (Story: StoryFn, context: StoryContext) => {
      return (
        <>
          <style>{`
            #storybook-root { width: 100%; height: 100%;, display: flex; }
          `}</style>
          <div className="flex h-full w-full flex-1 flex-col">
            <div className="flex-1" />
            <Story {...context} />
          </div>
        </>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof FooterComponent>;

export const Footer: Story = {};

import { StoryFn } from '@storybook/react';
import { Footer } from './footer';
import { Header } from './header';
import { Container, Page } from './layout';
import { withoutPadding } from '../../../../../storybook/.storybook/decorators';
import { Heading } from '../typography/heading';

export default {
  title: 'ui-kit/Layout/Page',
  decorators: [withoutPadding],
};

export const EmptyPage: StoryFn = () => {
  return (
    <Page>
      <Container className="py-12 text-center">
        <Heading level={4}>I'm an empty page component</Heading>
      </Container>
    </Page>
  );
};

export const PageWithHeader: StoryFn = () => {
  return (
    <Page header={<Header />}>
      <Container className="py-12 text-center">
        <Heading level={4}>I'm a page with header</Heading>
      </Container>
    </Page>
  );
};

export const PageWithFooter: StoryFn = () => {
  return (
    <Page footer={<Footer />}>
      <Container className="py-12 text-center">
        <Heading level={4}>I'm a page with footer</Heading>
      </Container>
    </Page>
  );
};

export const PageWithHeaderAndFooter: StoryFn = () => {
  return (
    <Page header={<Header />} footer={<Footer />}>
      <Container className="py-12 text-center">
        <Heading level={4}>I'm a page with footer and footer (=</Heading>
      </Container>
    </Page>
  );
};

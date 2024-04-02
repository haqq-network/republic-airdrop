import { Container, Heading } from '@haqq-nft/ui-kit';

// React server components are async so you make database or API calls.
export async function MainServer() {
  return (
    <div className="py-4">
      <Container>
        <Heading level={4}>Hello from server!</Heading>
      </Container>
    </div>
  );
}

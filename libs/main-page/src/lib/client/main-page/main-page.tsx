'use client';
import { Container } from '@haqq-nft/ui-kit';
import { TopBlock } from '../top-block/top-block';

export function MainPage() {
  return (
    <Container className="flex h-full flex-1 flex-col">
      <TopBlock />
    </Container>
  );
}

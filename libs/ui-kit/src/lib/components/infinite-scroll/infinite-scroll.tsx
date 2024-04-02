'use client';

import InfiniteScroll from 'react-infinite-scroll-component';
import { PageLoading } from '../page-loader/page-loader';

interface IScrollProps {
  itemsTotal: any[];
  className?: string;
  renderContent: (props: { items: any[] }) => any;
  fetchNext: () => void;
  hasMore: boolean;
}

export const InfiniteScrollList = ({
  className,
  itemsTotal,
  renderContent: RenderContent,
  fetchNext,
  hasMore,
}: IScrollProps) => {
  return (
    <InfiniteScroll
      className={className}
      dataLength={itemsTotal.length} //This is important field to render the next data
      next={fetchNext}
      hasMore={hasMore}
      loader={<PageLoading />}
      scrollableTarget="body_over"
    >
      <RenderContent items={itemsTotal} />
    </InfiniteScroll>
  );
};

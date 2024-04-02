import { useState } from 'react';
import { StoryFn } from '@storybook/react';
import { Pagination as PaginationComponent } from './pagination';

export default {
  title: 'ui-kit/pagination',
  parameters: {
    layout: 'centered',
  },
};

export const Pagination: StoryFn = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 15;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <PaginationComponent
      current={currentPage}
      total={totalPages}
      onChange={handlePageChange}
    />
  );
};

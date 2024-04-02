'use client';

import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import clsx from 'clsx';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons/icons';

export function usePagination<T>(
  pages: T[][],
  hasNextPage: boolean,
  handleNextPage: () => Promise<any>,
) {
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage((prev) => {
      if (pages.length === 0) {
        return 0;
      }

      if (prev > pages.length - 1) {
        return pages.length - 1;
      }

      return prev;
    });
  }, [pages]);

  const handleSetPage = useCallback(
    (newPage: number) => {
      if (newPage >= pages.length) {
        if (hasNextPage) {
          handleNextPage().then(() => {
            setPage(newPage);
          });
        }
      } else {
        setPage(newPage);
      }
    },
    [handleNextPage, pages, hasNextPage],
  );

  return {
    page,
    setPage: handleSetPage,
    totalPages: pages.length,
    items: pages[page] || [],
  };
}

interface PaginationProps {
  onChange: (page: number) => void;
  current: number;
  total: number;
  hasMore?: boolean;
  hasPreviousPage?: boolean;
  isLoading?: boolean;
}

const BUTTON_LIMIT = 5;

export function Pagination({
  current,
  onChange,
  total,
  hasMore,
  hasPreviousPage,
  isLoading,
}: PaginationProps) {
  const handlePageClick = useCallback(
    (pageNumber: number) => {
      if (pageNumber === 0) {
        onChange(pageNumber);
      } else if (pageNumber === total) {
        onChange(total);
      } else {
        onChange(pageNumber);
      }
    },
    [onChange, total],
  );

  const handlePrevClick = useCallback(() => {
    if (current > 0) {
      handlePageClick(current - 1);
    }
  }, [current, handlePageClick]);

  const handleNextClick = useCallback(() => {
    if (current < total) {
      handlePageClick(current + 1);
    }
  }, [current, handlePageClick, total]);

  const paginationValues = useMemo(() => {
    const pages = [];
    const offset = Math.trunc(BUTTON_LIMIT / 2);

    let startPage = 0;
    let endPage = 0;
    if (total <= BUTTON_LIMIT) {
      startPage = 0;
      endPage = Math.min(total, BUTTON_LIMIT);
    } else if (current - offset <= 0) {
      startPage = 0;
      endPage = startPage + BUTTON_LIMIT - 1;
    } else if (current + offset > total) {
      endPage = total;
      startPage = endPage - BUTTON_LIMIT + 1;
    } else {
      startPage = Math.max(0, current - offset);
      endPage = Math.min(total, current + offset);
    }

    // Show "First" button if current page is not the first
    if (current > offset + 1 && startPage > 0) {
      pages.push(
        <PaginationButton
          key={1}
          onClick={() => {
            handlePageClick(1);
          }}
          disabled={isLoading}
          className="px-[2px] py-[4px]"
        >
          1
        </PaginationButton>,
      );

      // Show ellipsis if startPage is greater than 2
      if (startPage > 2) {
        pages.push(
          <div
            key="ellipsis-end"
            className="flex select-none items-center px-[2px] py-[4px] text-[14px] font-[800] leading-[20px] text-white/50"
          >
            ...
          </div>,
        );
      }
    }

    for (let i = startPage; i < endPage; i++) {
      pages.push(
        <PaginationButton
          key={i}
          isActive={i === current}
          onClick={() => {
            handlePageClick(i);
          }}
          disabled={isLoading}
          className="px-[2px] py-[4px]"
        >
          {i + 1}
        </PaginationButton>,
      );
    }

    // Show ellipsis if endPage is less than total
    if (endPage < total - 1) {
      pages.push(
        <div
          key="ellipsis-end"
          className="flex select-none items-center px-[2px] py-[4px] text-[14px] font-[800] leading-[20px] text-white/50"
        >
          ...
        </div>,
      );
    }

    // Show "Last" button if current page is not the last
    if (endPage < total) {
      pages.push(
        <PaginationButton
          key={total}
          onClick={() => {
            handlePageClick(total);
          }}
          disabled={isLoading}
          className="px-[2px] py-[4px]"
        >
          {total}
        </PaginationButton>,
      );
    }

    return pages;
  }, [current, handlePageClick, total, isLoading]);

  return (
    <div className="flex flex-row gap-x-[8px]">
      <PaginationButton
        onClick={handlePrevClick}
        disabled={current === 0 || !hasPreviousPage || isLoading}
        className="w-[28px] p-[5px]"
      >
        <ChevronLeftIcon className="h-[18px] w-[18px] leading-none" />
      </PaginationButton>

      {paginationValues}

      <PaginationButton
        onClick={handleNextClick}
        disabled={current === total || !hasMore || isLoading}
        className="w-[28px] p-[5px]"
      >
        <ChevronRightIcon className="h-[18px] w-[18px] leading-none" />
      </PaginationButton>
    </div>
  );
}

export function PaginationButton({
  disabled,
  isActive,
  children,
  onClick,
  className,
}: PropsWithChildren<{
  isActive?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}>) {
  return (
    <div
      className={clsx(
        'border-graphite text-graphite flex h-[28px] min-w-[28px] select-none flex-row items-center justify-center rounded-[8px] border text-[14px] font-[700] leading-[20px] transition-colors duration-150',
        disabled
          ? 'cursor-not-allowed opacity-50'
          : 'cursor-pointer hover:border-white/50 hover:text-white',
        isActive && 'bg-graphite border-none text-white',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

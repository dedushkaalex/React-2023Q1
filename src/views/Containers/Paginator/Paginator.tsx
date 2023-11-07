import { FC } from 'react';

import cn from 'classnames';

import { usePagintaion } from '@/hooks/usePagination';
import { DOTS } from '@/utils/constants/Pagination';

import styles from './Paginator.module.css';

interface PaginatorProps {
  onPageChange: (data: unknown) => void;
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
  className?: string;
}

export const Paginator: FC<PaginatorProps> = ({
  totalCount,
  pageSize,
  currentPage,
  className = '',
  onPageChange,
  siblingCount = 1,
}) => {
  const paginationRange = usePagintaion({
    currentPage,
    pageSize,
    totalCount,
    siblingCount,
  });

  if (currentPage === 0 || (paginationRange && paginationRange.length < 2)) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className={cn(styles['pagination-container'], { [className]: className })}>
      <li
        className={cn(styles['pagination-item'], {
          [styles.disabled]: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className={cn(styles.arrow, styles.left)} />
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li
                className={cn(styles['pagination-item'], styles.dots)}
                key={index}
              >
                &#8230;
              </li>
            );
          }

          return (
            <li
              className={cn(styles['pagination-item'], {
                [styles.selected]: pageNumber === currentPage,
              })}
              onClick={() => onPageChange(pageNumber)}
              key={index}
            >
              {pageNumber}
            </li>
          );
        })}
      <li
        className={cn(styles['pagination-item'], {
          [styles.disabled]: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className={cn(styles.arrow, styles.right)} />
      </li>
    </ul>
  );
};

import { FC } from 'react';

import classnames from 'classnames';

import { DOTS, usePagintaion } from '@/hooks/usePagination';

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
    <ul className={classnames(styles['pagination-container'], { [className]: className })}>
      <li
        className={classnames(styles['pagination-item'], {
          [styles.disabled]: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        <div className={classnames(styles.arrow, styles.left)} />
      </li>
      {paginationRange &&
        paginationRange.map((pageNumber, index) => {
          if (pageNumber === DOTS) {
            return (
              <li
                className={classnames(styles['pagination-item'], styles.dots)}
                key={index}
              >
                &#8230;
              </li>
            );
          }

          return (
            <li
              className={classnames(styles['pagination-item'], {
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
        className={classnames(styles['pagination-item'], {
          [styles.disabled]: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div className={classnames(styles.arrow, styles.right)} />
      </li>
    </ul>
  );
};

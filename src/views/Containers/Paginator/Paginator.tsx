import { FC } from 'react';

import styles from './Paginator.module.css';

interface PaginatorProps {
  maxPage: number;
  currentPage: number;
}

export const Paginator: FC<PaginatorProps> = ({ maxPage, currentPage }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.counter}>{`${currentPage} / ${maxPage}`}</div>

      <button className={`${styles.paginate} ${styles.left}`}>
        <i></i>
        <i></i>
      </button>
      <button className={`${styles.paginate} ${styles.right}`}>
        <i></i>
        <i></i>
      </button>
    </div>
  );
};

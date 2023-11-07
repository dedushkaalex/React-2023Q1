import cn from 'classnames';

import styles from './Loader.module.css';

type Props = {
  className?: string;
};
export const Loader = ({ className }: Props) => {
  return <div className={cn(styles.loader, className)}></div>;
};

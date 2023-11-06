import React from 'react';

import classnames from 'classnames';

import styles from './Loader.module.css';

type Props = {
  className?: string;
};
export const Loader = ({ className }: Props) => {
  return <div className={classnames(styles.loader, className)}></div>;
};

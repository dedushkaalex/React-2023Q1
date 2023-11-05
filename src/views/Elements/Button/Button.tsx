import { FC, HTMLAttributes, PropsWithChildren } from 'react';

import styles from './Button.module.css';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  loading?: boolean;
  disabled?: boolean;
  className?: string;
}

export const Button: FC<PropsWithChildren<Props>> = ({
  type = 'button',
  loading = false,
  disabled = false,
  onClick,
  children,
  className,
}) => {
  return (
    <button
      type={type}
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
    >
      {loading && <div className={`${styles.loading}`} />}
      {children}
    </button>
  );
};

import { ReactNode, forwardRef } from 'react';

import cn from 'classnames';

import styles from './button.module.css';

interface Props {
  className?: string;
  children?: ReactNode;
  type?: 'submit' | 'button';
}
export type Ref = HTMLButtonElement;

export const Button = forwardRef<Ref, Props>(({ className, children, type = 'button' }, ref) => (
  <button
    ref={ref}
    className={cn(styles.button, className)}
    type={type}
  >
    {children}
  </button>
));

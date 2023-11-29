import React, { HTMLAttributes } from 'react';

import cn from 'classnames';

import styles from './Input.module.css';

type Ref = HTMLInputElement;

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
  placeholder?: string;
  value: string;
}

export const Input = React.forwardRef<Ref, InputProps>(
  ({ className = '', type = 'text', placeholder = '' }, ref) => {
    return (
      <div>
        <label className={styles.label}>
          <input
            type={type}
            ref={ref}
            className={cn(styles.input, className)}
            autoComplete='off'
            placeholder=''
          />
          <span className={cn(styles.placeholder)}>{placeholder}</span>
        </label>
      </div>
    );
  }
);

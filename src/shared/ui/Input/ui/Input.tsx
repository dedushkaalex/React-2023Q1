import React, { HTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';

import cn from 'classnames';

import styles from './Input.module.css';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
  placeholder?: string;
  fieldName?: string;
}

export const Input = ({
  className = '',
  type = 'text',
  placeholder = '',
  fieldName,
  ...props
}: InputProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={styles.field}>
      <div>
        <label className={styles.label}>
          {fieldName ? (
            <input
              type={type}
              className={cn(styles.input, className)}
              autoComplete='off'
              placeholder=''
              {...register(fieldName)}
              name={fieldName}
            />
          ) : (
            <input
              type={type}
              className={cn(styles.input, className)}
              autoComplete='off'
              placeholder=''
              {...props}
            />
          )}

          <span className={cn(styles.placeholder)}>{placeholder}</span>
        </label>
      </div>

      {Object.keys(errors).length > 0 && fieldName && (
        <p className={styles.error__notify}>{errors[fieldName]?.message as string}</p>
      )}
    </div>
  );
};

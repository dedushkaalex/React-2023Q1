/* eslint-disable @typescript-eslint/no-unused-vars */
import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

import cn from 'classnames';

import styles from './Radio.module.css';

interface RadioProps<TFieldValues extends FieldValues> {
  title: string;
  className?: string;
  value: string;
  name: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  error?: string;
}

export const Radio = <TFieldValues extends Record<string, unknown>>({
  title,
  value,
  name,
  register,
  error,
  className = '',
  ...props
}: RadioProps<TFieldValues>) => {
  const inputId = `${name}_radio_item_with_value__${value}`;

  return (
    <label
      className={cn(className, styles['mcui-radio'])}
      htmlFor={inputId}
      {...props}
    >
      <input
        type='radio'
        id={inputId}
        value={value}
        {...register(name)}
      />
      <div>
        <svg
          className={styles['mcui-check']}
          viewBox='-2 -2 35 35'
          aria-hidden='true'
        >
          <title>checkmark-circle</title>
          <polyline points='7.57 15.87 12.62 21.07 23.43 9.93' />
        </svg>
      </div>
      <p className={styles.title}>{title}</p>
    </label>
  );
};

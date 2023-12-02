import { FC } from 'react';

import cn from 'classnames';

import styles from './Radio.module.css';

interface RadioProps {
  title: string;
  htmlFor: string;
  className?: string;
  value: string;
  name: string;
}

export const Radio: FC<RadioProps> = ({
  title,
  htmlFor,
  value,
  name,
  className = '',
  ...props
}) => {
  return (
    <label
      className={cn(className, styles['mcui-radio'])}
      htmlFor={htmlFor}
      {...props}
    >
      <input
        type='radio'
        id={htmlFor}
        value={value}
        name={name}
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

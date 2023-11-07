import { HTMLAttributes } from 'react';

import styles from './Input.module.css';

interface InputProps extends HTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

export const Input = ({ placeholder = '', value, onChange, ...props }: InputProps) => {
  return (
    <label className={styles.field}>
      <input
        type='text'
        id='search'
        className={styles.input__field}
        autoComplete='off'
        {...props}
        placeholder=''
        onChange={onChange}
        value={value}
      />
      <span className={styles.label}>{placeholder}</span>
    </label>
  );
};

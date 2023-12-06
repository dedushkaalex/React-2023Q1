import { useFormContext } from 'react-hook-form';

import cn from 'classnames';

import styles from './Checkbox.module.css';

interface CheckboxProps {
  title: string;
  className?: string;
  name: string;
}

export const Checkbox = ({ title, name, className = '', ...props }: CheckboxProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const inputId = `${name}_radio_item`;

  return (
    <div className={styles.checkbox__wrapper}>
      <label
        className={cn(className, styles['mcui-checkbox'])}
        htmlFor={inputId}
        {...props}
      >
        <input
          type='checkbox'
          id={inputId}
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
      {Object.keys(errors).length > 0 && name && (
        <p className={styles.error__notify}>{errors[name]?.message as string}</p>
      )}
    </div>
  );
};

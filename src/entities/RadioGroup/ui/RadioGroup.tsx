import { useFormContext } from 'react-hook-form';

import cn from 'classnames';

import { Radio } from '@/shared/ui/Radio';

import styles from './RadioGroup.module.css';

type OptionType = {
  value: string;
  title: string;
};

interface RadioGroupProps {
  name: string;
  options: OptionType[];
  className?: string;
}

export const RadioGroup = ({ name, options, className }: RadioGroupProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className={cn(styles.radio__group, className)}>
      <div>
        {options.map(({ value, title }) => (
          <Radio
            key={value}
            name={name}
            value={value}
            title={title}
            register={register}
            error={errors[name]?.message as string}
          />
        ))}
      </div>

      {Object.keys(errors).length > 0 && name && (
        <p className={styles.error__notify}>{errors[name]?.message as string}</p>
      )}
    </div>
  );
};

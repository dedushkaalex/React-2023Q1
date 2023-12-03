import { FC } from 'react';

import { FormWithValidation } from '@/entities/Form';
import { RadioGroup } from '@/entities/RadioGroup/ui/RadioGroup';
import { registerSchema } from '@/shared/lib/validation';
import { Button } from '@/shared/ui/Button';
import { Checkbox } from '@/shared/ui/Checkbox/ui/Checkbox';
import { FileLoader } from '@/shared/ui/FileLoader/ui/FileLoader';
import { Input } from '@/shared/ui/Input';

import styles from './RegisterForm.module.css';

type FormFalues = {
  name: string;
  age: number;
  email: string;
  password: string;
  confirm_password: string;
  sex: string;
  terms_of_use?: boolean;
  picture: FileList;
};

interface RegisterFormProps {}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const RegisterForm: FC<RegisterFormProps> = () => {
  const onSubmit = (data: FormFalues) => {
    console.log(data);
  };

  return (
    <FormWithValidation
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      onSubmit={onSubmit}
      schema={registerSchema}
    >
      <Input
        className={styles.field}
        placeholder='Name'
        fieldName='name'
      />

      <Input
        className={styles.field}
        placeholder='Age'
        type='number'
        fieldName='age'
      />

      <Input
        className={styles.field}
        placeholder='Email'
        type='text'
        fieldName='email'
      />

      <Input
        className={styles.field}
        placeholder='Password'
        type='password'
        fieldName='password'
      />

      <Input
        className={styles.field}
        placeholder='Confirm password'
        type='password'
        fieldName='confirm_password'
      />

      <div className={styles.sex}>
        <RadioGroup
          name='sex'
          options={[
            { title: 'Man', value: 'man' },
            { title: 'Woman', value: 'woman' },
          ]}
        />
      </div>

      <div className={styles.terms}>
        <Checkbox
          name='terms_of_use'
          title='accept T&C'
        />
      </div>
      <FileLoader fieldName='picture' />

      <Button type='submit'>Register </Button>
    </FormWithValidation>
  );
};

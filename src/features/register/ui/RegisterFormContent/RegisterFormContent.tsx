import { Form } from 'react-router-dom';

import { RadioGroup } from '@/entities/RadioGroup';
import { Button } from '@/shared/ui/Button';
import { Checkbox } from '@/shared/ui/Checkbox';
import { FileLoader } from '@/shared/ui/FileLoader';
import { Input } from '@/shared/ui/Input';

import styles from './RegisterFormContent.module.css';

type RegisterFormContentProps = {
  onSubmit: () => void;
};

export const RegisterFormContent = ({ onSubmit }: RegisterFormContentProps) => {
  return (
    <Form onSubmit={onSubmit}>
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
    </Form>
  );
};

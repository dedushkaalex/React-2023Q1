import { FormProvider, useForm } from 'react-hook-form';

import { RadioGroup } from '@/entities/RadioGroup/ui/RadioGroup';
import { registerSchema } from '@/shared/lib/validation';
import { Button } from '@/shared/ui/Button';
import { Container } from '@/shared/ui/Container';
import { Form } from '@/shared/ui/Form';
import { Input } from '@/shared/ui/Input';

import { yupResolver } from '@hookform/resolvers/yup';

import styles from './RegisterPage.module.css';

type FormFalues = {
  name: string;
  age: number;
  email: string;
  password: string;
  confirm_password: string;
  sex: string;
};

export const RegisterPage = () => {
  const methods = useForm<FormFalues>({
    resolver: yupResolver(registerSchema),
    mode: 'onSubmit',
  });
  const onSubmit = (data: FormFalues) => console.log(data);
  return (
    <Container>
      <section className={styles.register}>
        <div className={styles.form__container}>
          <h2 className={styles.form__title}>Create a new account</h2>
          <p className={styles.form__subtitle}>RSSchool Top</p>
          <FormProvider {...methods}>
            <Form onSubmit={methods.handleSubmit(onSubmit)}>
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

              <Button type='submit'>Register </Button>
            </Form>
          </FormProvider>
        </div>
      </section>
    </Container>
  );
};

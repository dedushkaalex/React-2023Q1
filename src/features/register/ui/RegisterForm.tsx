import { FC } from 'react';
import { FieldValues, SubmitHandler } from 'react-hook-form';

import { registerSchema } from '@/shared/lib/validation';
import { FormWithProvider } from '@/shared/ui/FormWithProvider';

import { yupResolver } from '@hookform/resolvers/yup';

import { RegisterFormContent } from './RegisterFormContent/RegisterFormContent';

interface RegisterFormProps {}

export const RegisterForm: FC<RegisterFormProps> = () => {
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <FormWithProvider
      render={(handleSubmit) => <RegisterFormContent onSubmit={handleSubmit(onSubmit)} />}
      formHookParams={{ resolver: yupResolver(registerSchema) }}
      debug
    />
  );
};

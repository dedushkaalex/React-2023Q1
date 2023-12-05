import { FieldValues, SubmitHandler } from 'react-hook-form';

import { useAppDispatch } from '@/shared/lib/hooks/store';
import { registerSchema } from '@/shared/lib/validation';
import { FormWithProvider } from '@/shared/ui/FormWithProvider';

import { yupResolver } from '@hookform/resolvers/yup';

import { RegisterFormState, saveFormFields } from '../model/slice';
import { RegisterFormContent } from './RegisterFormContent/RegisterFormContent';

export const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    dispatch(saveFormFields(data as RegisterFormState));
    console.log(data);
  };

  return (
    <FormWithProvider
      render={(handleSubmit) => <RegisterFormContent onSubmit={handleSubmit(onSubmit)} />}
      formHookParams={{ resolver: yupResolver(registerSchema) }}
      debug
    />
  );
};

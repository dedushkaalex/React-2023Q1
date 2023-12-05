import { SubmitHandler } from 'react-hook-form';

import { useAppDispatch } from '@/shared/lib/hooks/store';
import { registerSchema } from '@/shared/lib/validation';
import { TRegisterFormFalues } from '@/shared/lib/validation/types/types';
import { FormWithProvider } from '@/shared/ui/FormWithProvider';

import { yupResolver } from '@hookform/resolvers/yup';

import { saveFormFields } from '../model/slice';
import { RegisterFormContent } from './RegisterFormContent/RegisterFormContent';

export const RegisterForm = () => {
  const dispatch = useAppDispatch();

  const readerFile = (fileList: FileList) => {
    const file = fileList[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return reader;
  };

  const onSubmit: SubmitHandler<TRegisterFormFalues> = (data) => {
    const reader = readerFile(data.picture);
    reader.onload = () => {
      dispatch(
        saveFormFields({
          ...data,
          picture: reader.result ? (reader.result as string) : '',
        })
      );
    };
  };

  return (
    <FormWithProvider<TRegisterFormFalues>
      render={(handleSubmit) => <RegisterFormContent onSubmit={handleSubmit(onSubmit)} />}
      formHookParams={{ resolver: yupResolver(registerSchema) }}
      debug
    />
  );
};

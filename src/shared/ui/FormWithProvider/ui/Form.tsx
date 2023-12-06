import React from 'react';
import {
  FieldValues,
  FormProvider,
  UseFormHandleSubmit,
  UseFormProps,
  useForm,
} from 'react-hook-form';

import { DevTool } from '@hookform/devtools';

interface FormProps<T extends FieldValues = FieldValues> {
  formHookParams: UseFormProps<T>;
  debug?: boolean;
  render: (methods: UseFormHandleSubmit<T>) => JSX.Element;
}

export const FormWithProvider = <T extends FieldValues = FieldValues>({
  formHookParams,
  render,
  debug = false,
}: FormProps<T>) => {
  const methods = useForm(formHookParams);

  return (
    <FormProvider {...methods}>
      {render(methods.handleSubmit)}
      {debug && <DevTool control={methods.control} />}
    </FormProvider>
  );
};

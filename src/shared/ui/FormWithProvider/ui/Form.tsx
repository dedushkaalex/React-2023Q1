import React from 'react';
import { FieldValues, FormProvider, UseFormHandleSubmit, useForm } from 'react-hook-form';

import { DevTool } from '@hookform/devtools';

interface FormProps {
  formHookParams: FieldValues;
  debug?: boolean;
  render: (methods: UseFormHandleSubmit<FieldValues>) => JSX.Element;
}

export const FormWithProvider = ({ formHookParams, render, debug = false }: FormProps) => {
  const methods = useForm(formHookParams);

  return (
    <FormProvider {...methods}>
      {render(methods.handleSubmit)}
      {debug && <DevTool control={methods.control} />}
    </FormProvider>
  );
};

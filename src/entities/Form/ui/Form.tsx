import React from 'react';
import { FieldValues, FormProvider, useForm } from 'react-hook-form';

import { ObjectSchema, lazy } from 'yup';

import { Form } from '@/shared/ui/Form';

import { DevTool } from '@hookform/devtools';
import { yupResolver } from '@hookform/resolvers/yup';

interface FormProps<T extends FieldValues> {
  schema: ObjectSchema<T> | ReturnType<typeof lazy<ObjectSchema<T>>>;
  children?: React.ReactNode;
  onSubmit: () => void;
}

export const FormWithValidation = <T extends FieldValues>({
  schema,
  onSubmit,
  children,
}: FormProps<T>) => {
  const methods = useForm<FormProps<T>>({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  return (
    <FormProvider {...methods}>
      <Form onSubmit={methods.handleSubmit(onSubmit)}>{children}</Form>
      <DevTool control={methods.control} />
    </FormProvider>
  );
};

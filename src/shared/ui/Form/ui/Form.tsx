import { FC, PropsWithChildren } from 'react';

interface FormProps {
  onSubmit: () => void;
}

export const Form: FC<PropsWithChildren<FormProps>> = ({ children, onSubmit }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit();
      }}
    >
      {children}
    </form>
  );
};

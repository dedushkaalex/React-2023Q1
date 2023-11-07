import React, { FC, PropsWithChildren } from 'react';

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}

export const Form: FC<PropsWithChildren<Props>> = ({ handleSubmit, children, className }) => {
  return (
    <form
      className={className}
      onSubmit={handleSubmit}
    >
      {children}
    </form>
  );
};

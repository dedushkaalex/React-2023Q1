import React, { PropsWithChildren } from 'react';

interface Props {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
}

class Form extends React.Component<PropsWithChildren<Props>, Record<string, never>> {
  constructor(props: Props) {
    super(props);
  }

  static defaultProps: Pick<Props, 'className'> = {
    className: '',
  };

  render() {
    const { children, handleSubmit, className } = this.props;

    return (
      <form
        className={className}
        onSubmit={handleSubmit}
      >
        {children}
      </form>
    );
  }
}

export default Form;

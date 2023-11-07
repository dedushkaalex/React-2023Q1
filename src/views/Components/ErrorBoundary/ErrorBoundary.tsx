import React, { PropsWithChildren } from 'react';

import ErrorBoundaryContainer from '../../Containers/ErrorBoundaryContainer/ErrorBoundaryContainer';

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<PropsWithChildren, State> {
  constructor(props: PropsWithChildren) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;
    if (hasError) {
      return <ErrorBoundaryContainer />;
    }

    return children;
  }
}

export default ErrorBoundary;

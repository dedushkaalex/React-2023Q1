import React from 'react';

import { Button } from '@views/Elements/Button/Button';

import styles from './ErrorBoundary.module.css';

type Props = Record<string, never>;

type State = Record<string, never>;

class ErrorBoundaryContainer extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  private reloadPage = () => {
    localStorage.clear();
    location.reload();
  };

  render() {
    return (
      <div className={styles.error}>
        <h1>Something weng wrong...</h1>
        <Button onClick={this.reloadPage}>Reload page</Button>
      </div>
    );
  }
}

export default ErrorBoundaryContainer;

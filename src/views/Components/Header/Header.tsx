import { Component } from 'react';

import styles from './Header.module.css';

interface Props {
  children: React.ReactNode;
}

interface State {}

class Header extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.header}>
        <div className="container">
          <nav className={styles.nav}>{this.props.children}</nav>
        </div>
      </div>
    );
  }
}

export default Header;

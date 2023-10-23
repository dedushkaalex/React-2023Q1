import { Component } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

import styles from './Header.module.css';

interface Props {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  value: string;
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
          <nav className={styles.nav}>
            <Input
              placeholder="Search"
              onChange={(e) => this.props.onChange(e)}
              value={this.props.value}
            />
            <Button title="Найти" onClick={this.props.onClick} />
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;

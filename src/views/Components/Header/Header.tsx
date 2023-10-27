import { Component } from 'react';
import Input from '../../Elements/Input/Input';
import Button from '../../Elements/Button/Button';

import styles from './Header.module.css';

interface Props {
  // onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  // value: string;
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
              onChange={(e) => console.log(e)}
              value={''}
            />
            <Button
              title="Найти"
              onClick={() => null}
            />
          </nav>
        </div>
      </div>
    );
  }
}

export default Header;

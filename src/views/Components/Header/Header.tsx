import { FC, PropsWithChildren } from 'react';

import styles from './Header.module.css';

export const Header: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.header__wrapper}>
          <h1 className="header__logo">PokeWiki</h1>
          <nav className={styles.nav}>{children}</nav>
        </div>
      </div>
    </div>
  );
};

export default Header;

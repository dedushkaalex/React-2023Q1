import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import cn from 'classnames';

import { Container } from '@/shared/ui/Container';

import styles from './Header.module.css';

interface HeaderProps {
  className?: string;
}

export const Header: FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(styles.header, {}, [className])}>
      <Container>
        <nav>
          <ul className={styles.menu}>
            <li className={styles.menu__item}>
              <NavLink
                to={'/control_form'}
                className={({ isActive }) =>
                  cn({
                    [styles.active]: isActive,
                  })
                }
              >
                Control Form
              </NavLink>
            </li>
            <li className={styles.menu__item}>
              <NavLink to={'/ref_form'}>Ref Form</NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

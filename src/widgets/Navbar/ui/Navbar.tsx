import { FC } from 'react';
import { Link } from 'react-router-dom';

import cn from 'classnames';

import styles from './Navbar.module.css';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={cn(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <Link to={'/ref_form'}>Ref Form</Link>
        <Link to={'/control_form'}>Control Form</Link>
      </div>
    </div>
  );
};

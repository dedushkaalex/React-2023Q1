import { Outlet } from 'react-router-dom';

import { Navbar } from '@/widgets/Navbar';

import styles from './RootLayout.module.css';

export const RootLayout = () => {
  return (
    <div className={styles.content}>
      <Navbar />
      <main className={styles.content}>
        <Outlet />
      </main>
    </div>
  );
};

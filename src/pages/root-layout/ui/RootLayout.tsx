import { Outlet } from 'react-router-dom';

import { Header } from '@/widgets/Header';

import styles from './RootLayout.module.css';

export const RootLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <Outlet />
      </main>
    </>
  );
};

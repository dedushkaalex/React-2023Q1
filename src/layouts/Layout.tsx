import { Outlet, useSearchParams } from 'react-router-dom';

import { HomePage } from '@/pages/HomePage/HomePage';

import { Header } from '@views/Components/Header';

export const Layout = () => {
  const [params] = useSearchParams();
  return (
    <div className={'app'}>
      <Header />

      <main className={'main'}>
        <div className={`left ${params.get('detail') ? 'open' : ''}`}>
          <HomePage />
        </div>
        <Outlet />
        {/* <div className={'right'}></div> */}
      </main>
    </div>
  );
};

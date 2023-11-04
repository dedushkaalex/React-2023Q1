import { SearchFormPokemon } from '@views/Containers/SearchFormPokemon/SearchFormPokemon';

import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className='container'>
        <div className={styles.header__wrapper}>
          <h1 className='header__logo'>PokeWiki</h1>
          <SearchFormPokemon />
        </div>
      </div>
    </div>
  );
};

export default Header;

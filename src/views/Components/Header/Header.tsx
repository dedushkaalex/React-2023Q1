import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className='container'>
        <div className={styles.header__wrapper}>
          <h1>PokeWiki</h1>
        </div>
      </div>
    </div>
  );
};

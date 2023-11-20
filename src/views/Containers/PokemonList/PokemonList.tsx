/* eslint-disable @typescript-eslint/no-unused-vars */
import cn from 'classnames';

import { useAppSelector } from '@/store/hooks';

import { Loader } from '@views/Components/Loader';
import { PokemonCard } from '@views/Containers/PokemonList/components/PokemonCard';

import styles from './PokemonList.module.css';

export const PokemonList = () => {
  const { loadingMainPage: isLoading, pokemons: data } = useAppSelector((state) => state.pokemons);
  return (
    <div className={cn(styles.content, 'container')}>
      {!isLoading && data && data.length === 0 && (
        <h2 className={styles.data__empty}>Data is empty...</h2>
      )}
      {!isLoading && data ? (
        data.map((card) => (
          <PokemonCard
            key={card.id}
            data={card}
          />
        ))
      ) : (
        <Loader className={styles.loader} />
      )}
    </div>
  );
};

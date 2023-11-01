import { FC } from 'react';

import { PokeCard } from '@api/modules/Pokemon/types';
import Loader from '@views/Components/Loader/Loader';

import styles from './PokemonList.module.css';
import { PokemonCard } from './components/PokemonCard/PokemonCard';

interface PokemonListProps {
  data: PokeCard[];
  isLoading: boolean;
}

export const PokemonList: FC<PokemonListProps> = ({ data, isLoading }) => {
  return (
    <div className={`${styles.content} container`}>
      {!isLoading && data.length === 0 && <h2 className={styles.data__empty}>Data is empty...</h2>}
      {!isLoading ? (
        data.map((card) => (
          <PokemonCard
            key={card.id}
            data={card}
          />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

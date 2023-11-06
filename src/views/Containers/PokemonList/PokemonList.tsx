import { PokeCard } from '@api/modules/Pokemon/types';
import { Loader } from '@views/Components/Loader';

import styles from './PokemonList.module.css';
import { PokemonCard } from './components/PokemonCard';

interface PokemonListProps {
  data: PokeCard[];
  isLoading: boolean;
}

export const PokemonList = ({ data, isLoading }: PokemonListProps) => {
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
        <Loader className={styles.loader} />
      )}
    </div>
  );
};

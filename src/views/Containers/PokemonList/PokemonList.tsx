import cn from 'classnames';

import { usePokemon } from '@/contexts/pokemon-context';

// import type { PokeCard } from '@api/modules/Pokemon/types';
import { Loader } from '@views/Components/Loader';
import { PokemonCard } from '@views/Containers/PokemonList/components/PokemonCard';

import styles from './PokemonList.module.css';

interface PokemonListProps {
  isLoading: boolean;
}

export const PokemonList = ({ isLoading }: PokemonListProps) => {
  const { data, searchValue } = usePokemon();
  console.log(data, searchValue);
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

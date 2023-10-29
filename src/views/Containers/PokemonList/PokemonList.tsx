import React from 'react';
import { PokeCard } from '../../../api/modules/Pokemon/types';

import styles from './PokemonList.module.css';
import PokemonCard from './components/PokemonCard/PokemonCard';
import Loader from '../../Components/Loader/Loader';

interface Props {
  data: PokeCard[];
  isLoading: boolean;
}

interface State {}

class PokemonList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { data, isLoading } = this.props;
    return (
      <div className={`${styles.content} container`}>
        {!isLoading && data.length === 0 && (
          <h2 className={styles.data__empty}>Data is empty...</h2>
        )}
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
  }
}

export default PokemonList;

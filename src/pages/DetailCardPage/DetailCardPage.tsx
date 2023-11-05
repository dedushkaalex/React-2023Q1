import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { pokemonApi } from '@api/modules/Pokemon';
import { FetchPokemonResponse, PokeCard } from '@api/modules/Pokemon/types';
import { Loader } from '@views/Components/Loader';
import { Button } from '@views/Elements/Button';

import styles from './DetailCardPage.module.css';

export const DetailCardPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<PokeCard>();
  const [params, setSearchParams] = useSearchParams();

  useEffect(() => {
    getFetchPokemons();
  }, [params]);

  const getFetchPokemons = () => {
    setIsLoading(true);
    pokemonApi.pokemons
      .getById(params.get('detail') || '')
      .then((data: Omit<FetchPokemonResponse, 'data'> & { data: PokeCard }) => {
        if (data) {
          setData(data.data);
        }
      })
      .finally(() => setIsLoading(false));
  };

  if (!data) {
    return null;
  }

  const { abilities, images, name, supertype, rarity } = data;

  return (
    <div className={`${styles.wrapper} ${params.get('detail') ? styles.open : ''}`}>
      <Button
        className={styles.close}
        onClick={() => {
          params.delete('detail');
          setSearchParams(params);
        }}
      >
        X
      </Button>
      {!isLoading && images?.large && images && (
        <img
          src={images.large}
          className={styles['cover-image']}
        />
      )}
      {!isLoading ? (
        <div className={styles.text__content}>
          <p>Name: {name}</p>
          <p>Supertype: {supertype}</p>
          <p>Rarity: {rarity}</p>
          <ul>
            {abilities &&
              abilities.length > 0 &&
              abilities.map(({ name, text }, id) => (
                <li key={id}>
                  <p>{name}</p>
                  <p>{text}</p>
                </li>
              ))}
          </ul>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

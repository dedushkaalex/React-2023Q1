/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import cn from 'classnames';

import type { FetchPokemonResponse, PokeCard } from '@api/Pokemon/types';
import { Loader } from '@views/Components/Loader';
import { Button } from '@views/Elements/Button';

import styles from './DetailCardPage.module.css';

export const DetailCardPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<PokeCard>();
  const [params, setSearchParams] = useSearchParams();

  const paramsDetail = params.get('detail');

  useEffect(() => {
    if (paramsDetail) {
      // getFetchPokemons();
    }
  }, [paramsDetail]);

  // const getFetchPokemons = () => {
  //   setIsLoading(true);
  //   if (!paramsDetail) {
  //     return;
  //   }
  //   pokemonApi.pokemons
  //     .getById(paramsDetail)
  //     .then((data: Omit<FetchPokemonResponse, 'data'> & { data: PokeCard }) => {
  //       if (data) {
  //         setData(data.data);
  //       }
  //     })
  //     .finally(() => setIsLoading(false));
  // };

  if (!data) {
    return null;
  }

  const { abilities, images, name, supertype, rarity } = data;

  return (
    <div
      className={cn(styles.wrapper, {
        [styles.open]: paramsDetail,
      })}
    >
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
        <div className={styles.img__wrapper}>
          <img
            src={images.large}
            className={styles['cover-image']}
            width={'200px'}
          />
        </div>
      )}
      {!isLoading ? (
        <div className={styles.text__content}>
          <p>Name: {name}</p>
          <p>Supertype: {supertype}</p>
          <p>Rarity: {rarity}</p>
          <ul>
            {abilities &&
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

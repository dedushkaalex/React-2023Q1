import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import type { PokeCard } from '@api/Pokemon/types';
import { Button } from '@views/Elements/Button';

import styles from './PokemonCard.module.css';

interface PokemonCardProps {
  data: PokeCard;
}

export const PokemonCard: FC<PokemonCardProps> = ({ data }) => {
  const { set, attacks, hp, retreatCost, weaknesses, images, id } = data;

  const [searchParams, setSearchParams] = useSearchParams();

  const handleNavigate = () => {
    searchParams.set('detail', id);
    setSearchParams(searchParams, { replace: true });
  };
  return (
    <div className={styles.pokemon__card}>
      <div className={styles.wrapper}>
        <img
          src={images.large}
          className={styles['cover-image']}
        />
      </div>

      <div className={styles.logo}>
        <img
          src={set.images.logo}
          alt=''
        />
      </div>

      <div className={styles.hp}>
        <span className={styles.hp__title}>HP:</span>
        <img
          src='/pokeCardImg/attack.png'
          width={30}
          height={30}
          alt=''
        />
        <span className={styles.hp__quantity}>{hp}</span>
      </div>
      <div className={styles.text__content}>
        <ul>
          {attacks && attacks.length > 0 && (
            <>
              <li>
                Name: <span>{attacks[0].name}</span>
              </li>
              <li className={styles.damage}>
                Damage:
                <img
                  src='/pokeCardImg/attack.png'
                  width={30}
                  height={30}
                  alt=''
                />
                <span>{attacks[0].damage}</span>
              </li>
            </>
          )}

          {weaknesses && weaknesses.length > 0 && (
            <li className={styles.weakness}>
              Weakness:
              <img
                src='/pokeCardImg/weakness.png'
                width={30}
                height={30}
                alt=''
              />
              <span>x4</span>
            </li>
          )}
          {retreatCost && retreatCost.length > 0 && (
            <li className={styles.retreat}>
              Retreat Cost:
              <img
                src='/pokeCardImg/retreatCost.png'
                width={30}
                height={30}
                alt=''
              />
              <img
                src='/pokeCardImg/retreatCost.png'
                width={30}
                height={30}
                alt=''
              />
              <img
                src='/pokeCardImg/retreatCost.png'
                width={30}
                height={30}
                alt=''
              />
            </li>
          )}
        </ul>
        <Button
          className={styles.button}
          onClick={handleNavigate}
        >
          Подробнее
        </Button>
      </div>
    </div>
  );
};

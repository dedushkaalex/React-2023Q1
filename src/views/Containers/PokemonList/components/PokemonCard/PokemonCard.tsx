/* eslint-disable @typescript-eslint/no-unused-vars */
import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';

import type { PokeCard } from '@api/modules/Pokemon/types';
import { Button } from '@views/Elements/Button';

import styles from './PokemonCard.module.css';

interface PokemonCardProps {
  data: PokeCard;
}

// const mock = {
//   id: 'dp3-3',
//   name: 'Charizard',
//   supertype: 'Pokémon',
//   subtypes: ['Stage 2'],
//   level: '55',
//   hp: '130',
//   types: ['Fire'],
//   evolvesFrom: 'Charmeleon',
//   abilities: [
//     {
//       name: 'Fury Blaze',
//       text: "If your opponent has 3 or less Prize cards left, each of Charizard's attacks does 50 more damage to the Active Pokémon (before applying Weakness and Resistance).",
//       type: 'Poké-Body',
//     },
//   ],
//   attacks: [
//     {
//       name: 'Blast Burn',
//       cost: ['Fire', 'Fire', 'Fire', 'Colorless'],
//       convertedEnergyCost: 4,
//       damage: '120',
//       text: "Flip a coin. If heads, discard 2 Energy cards attached to Charizard. If tails, discard 4 Energy cards attached to Charizard. (If you can't, this attack does nothing.)",
//     },
//   ],
//   weaknesses: [
//     {
//       type: 'Water',
//       value: '+40',
//     },
//   ],
//   resistances: [
//     {
//       type: 'Fighting',
//       value: '-20',
//     },
//   ],
//   retreatCost: ['Colorless', 'Colorless', 'Colorless'],
//   convertedRetreatCost: 3,
//   set: {
//     id: 'dp3',
//     name: 'Secret Wonders',
//     series: 'Diamond & Pearl',
//     printedTotal: 132,
//     total: 132,
//     legalities: {
//       unlimited: 'Legal',
//     },
//     ptcgoCode: 'SW',
//     releaseDate: '2007/11/01',
//     updatedAt: '2018/03/04 10:35:00',
//     images: {
//       symbol: 'https://images.pokemontcg.io/dp3/symbol.png',
//       logo: 'https://images.pokemontcg.io/dp3/logo.png',
//     },
//   },
//   number: '3',
//   artist: 'Daisuke Ito',
//   rarity: 'Rare Holo',
//   flavorText: "It is said that CHARIZARD's fire burns hotter if it has experienced harsh battles.",
//   nationalPokedexNumbers: [6],
//   legalities: {
//     unlimited: 'Legal',
//   },
//   images: {
//     small: 'https://images.pokemontcg.io/dp3/3.png',
//     large: 'https://images.pokemontcg.io/dp3/3_hires.png',
//   },
//   tcgplayer: {
//     url: 'https://prices.pokemontcg.io/tcgplayer/dp3-3',
//     updatedAt: '2023/10/28',
//     prices: {
//       holofoil: {
//         low: 59.94,
//         mid: 89.98,
//         high: 224.97,
//         market: 195.63,
//         directLow: 59.94,
//       },
//       reverseHolofoil: {
//         low: 63.99,
//         mid: 93.74,
//         high: 141.47,
//         market: 137.51,
//         directLow: 93.74,
//       },
//     },
//   },
//   cardmarket: {
//     url: 'https://prices.pokemontcg.io/cardmarket/dp3-3',
//     updatedAt: '2023/10/28',
//     prices: {
//       averageSellPrice: 17.44,
//       lowPrice: 7.98,
//       trendPrice: 24.81,
//       germanProLow: 0.0,
//       suggestedPrice: 0.0,
//       reverseHoloSell: 28.31,
//       reverseHoloLow: 7.98,
//       reverseHoloTrend: 27.0,
//       lowPriceExPlus: 20.0,
//       avg1: 22.5,
//       avg7: 19.05,
//       avg30: 19.31,
//       reverseHoloAvg1: 14.99,
//       reverseHoloAvg7: 27.12,
//       reverseHoloAvg30: 25.55,
//     },
//   },
// };

export const PokemonCard: FC<PokemonCardProps> = ({ data }) => {
  const { set, abilities, attacks, hp, retreatCost, weaknesses, types, images, id } = data;

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

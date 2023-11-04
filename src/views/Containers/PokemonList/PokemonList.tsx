// import { FC, useContext } from 'react';

// import { PokemonDataContext } from '@/context/pokemon/PokemonContext';

// // import { PokeCard } from '@api/modules/Pokemon/types';
// import { Loader } from '@views/Components/Loader';

// import styles from './PokemonList.module.css';
// import { PokemonCard } from './components/PokemonCard';

// // interface PokemonListProps {
// //   data: PokeCard[];
// //   isLoading: boolean;
// // }

// export const PokemonList: FC = () => {
//   const { isLoading, pokemonData } = useContext(PokemonDataContext);
//   return (
//     <div className={`${styles.content} container`}>
//       {!isLoading && pokemonData.length === 0 && (
//         <h2 className={styles.data__empty}>Data is empty...</h2>
//       )}
//       {!isLoading ? (
//         pokemonData.map((card) => (
//           <PokemonCard
//             key={card.id}
//             data={card}
//           />
//         ))
//       ) : (
//         <Loader />
//       )}
//     </div>
//   );
// };

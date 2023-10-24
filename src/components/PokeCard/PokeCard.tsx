import React from 'react';
import { Pokemon } from '../../api/types';

import styles from './PokeCard.module.css';

interface Props extends Pokemon {}

interface State {}

export class PokeCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { name, species, sprites, stats } = this.props;
    return (
      <div className={styles.card}>
        <h2>name: {name}</h2>
        <img src={sprites.front_default || ''}></img>
        <p>species: {species.name}</p>
        <p>hp: {stats[0].base_stat}</p>
        <p>attack: {stats[1].base_stat}</p>
        <p>deffense: {stats[2].base_stat}</p>
      </div>
    );
  }
}

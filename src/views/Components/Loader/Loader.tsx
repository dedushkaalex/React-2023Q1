import React from 'react';

import styles from './Loader.module.css';

export class Loader extends React.PureComponent {
  render() {
    return <div className={styles.loader}></div>;
  }
}

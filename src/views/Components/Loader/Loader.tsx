import React from 'react';

import styles from './Loader.module.css';

class Loader extends React.PureComponent {
  render() {
    return <div className={styles.loader}></div>;
  }
}

export default Loader;

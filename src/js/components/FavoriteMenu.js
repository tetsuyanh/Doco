import React from 'react';

import styles from './TextMenu.css';

const FavoriteMenu = ({ clickBack }) => {
  return (
    <div className={styles.operation}>
      <div className={styles.backWrapper}>
        <button className={styles.back} onClick={clickBack}>
          もどる
        </button>
      </div>
    </div>
  );
};

export default FavoriteMenu;

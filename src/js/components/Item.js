import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Item.css';

const Item = (item, onClick) => {
  <li className={styles.item} key={index}>
    <span className={styles.category}>{item.category}</span>
    <span className={styles.name}>{item.name}</span>
    <span className={styles.price}>{item.price}</span>
    <span
      className={`${styles.favorite} ${styles.favoriteEnable}`}
      onClick={() => onClick}
    >
      {item.isFavorite ? (
        <FontAwesomeIcon icon='star' />
      ) : (
        <FontAwesomeIcon icon={['far', 'star']} />
      )}
    </span>
    )}
  </li>;
};

export default Item;

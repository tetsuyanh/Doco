import React from 'react';
import styles from './ItemList.css';
// import Item from './Item';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ItemList = ({ items, clickFavorite }) => {
  return (
    <ul className={styles.itemList}>
      {items.map((item, index) => {
        const style = item.isFavorite ? styles.favoriteEnable : styles.favorite;
        const icon = item.isFavorite ? (
          <FontAwesomeIcon icon='star' />
        ) : (
          <FontAwesomeIcon icon={['far', 'star']} />
        );

        return (
          <li className={styles.item} key={index}>
            <span className={styles.category}>{item.category}</span>
            <span className={styles.name}>{item.name}</span>
            <span className={styles.price}>{item.price}</span>
            <span className={style} onClick={() => clickFavorite(item.id)}>
              {icon}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

// return keyword === '' || item.name.match(new RegExp('^' + keyword));

export default ItemList;

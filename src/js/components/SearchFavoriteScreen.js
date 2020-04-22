import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import styles from './SearchFavoriteScreen.css';

import items from '../dummy';

const SearchFavoriteScreen = withRouter((props) => {
  const [category, setFavorite] = useState('');

  const changeFavorite = (event) => {
    setFavorite(event.target.value);
  };

  return (
    <div className={styles.searchFavoriteScreen}>
      {props.favoriteItemIds.length === 0 && (
        <p className={styles.favoriteEmpty}>お気に入りはありません</p>
      )}
      {props.favoriteItemIds.length > 0 && (
        <ul className={styles.itemList}>
          {items
            .filter((item) => {
              return props.favoriteItemIds.includes(item.id);
            })
            .map((item, index) => {
              return (
                <li className={styles.item} key={index}>
                  <span className={styles.name}>{item.name}</span>
                  <span className={styles.category}>{item.category}</span>
                  <span className={styles.price}>{item.price}</span>
                </li>
              );
            })}
        </ul>
      )}
      <div className={styles.operation}>
        <div className={styles.backWrapper}>
          <button
            className={styles.back}
            onClick={() => props.history.goBack()}
          >
            もどる
          </button>
        </div>
      </div>
    </div>
  );
});

export default SearchFavoriteScreen;

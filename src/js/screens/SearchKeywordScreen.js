import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './SearchKeywordScreen.css';

const SearchKeywordScreen = withRouter((props) => {
  const [keyword, setKeyword] = useState('');

  const changeKeyword = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className={styles.searchKeywordScreen}>
      <ul className={styles.itemList}>
        {props.items
          .filter((item) => {
            return keyword === '' || item.name.match(new RegExp('^' + keyword));
          })
          .map((item, index) => {
            return (
              <li className={styles.item} key={index}>
                <span className={styles.category}>{item.category}</span>
                <span className={styles.name}>{item.name}</span>
                <span className={styles.price}>{item.price}</span>
                {props.favoriteItemIds.includes(item.id) && (
                  <span
                    className={`${styles.favorite} ${styles.favoriteEnable}`}
                    onClick={() => props.removeFavoriteItemId(item.id)}
                  >
                    <FontAwesomeIcon icon='star' />
                  </span>
                )}
                {!props.favoriteItemIds.includes(item.id) && (
                  <span
                    className={`${styles.favorite} ${styles.favoriteDisable}`}
                    onClick={() => props.addFavoriteItemId(item.id)}
                  >
                    <FontAwesomeIcon icon={['far', 'star']} />
                  </span>
                )}
              </li>
            );
          })}
      </ul>
      <div className={styles.operation}>
        <form className={styles.form}>
          <input
            type='text'
            className={styles.input}
            value={keyword}
            placeholder='キーワードを入力'
            onChange={changeKeyword}
          />
        </form>
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

export default SearchKeywordScreen;

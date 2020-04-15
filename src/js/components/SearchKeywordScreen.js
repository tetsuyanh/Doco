import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './SearchKeywordScreen.css';

import items from '../dummy';

const SearchKeywordScreen = (props) => {
  const [keyword, setKeyword] = useState('');

  const changeKeyword = (event) => {
    setKeyword(event.target.value);
  };

  return (
    <div className={styles.searchKeywordScreen}>
      <ul className={styles.itemList}>
        {keyword !== '' &&
          items
            .filter((item) => {
              return item.name.match(new RegExp('^' + keyword));
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
          <Link className={styles.back} to='/'>
            もどる
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchKeywordScreen;

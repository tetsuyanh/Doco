import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

import styles from './SearchCategoryScreen.css';

const SearchCategoryScreen = withRouter((props) => {
  const [category, setCategory] = useState('');

  const changeCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className={styles.searchCategoryScreen}>
      <ul className={styles.itemList}>
        {props.items
          .filter((item) => {
            return (category === '') | (item.category === category);
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
          <select
            className={styles.select}
            value={category}
            onChange={changeCategory}
          >
            <option value='' key='init'>
              カテゴリーを選択
            </option>
            {props.categories.map((c, index) => {
              return (
                <option value={c} key={index}>
                  {c}
                </option>
              );
            })}
          </select>
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

export default SearchCategoryScreen;

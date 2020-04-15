import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './SearchCategoryScreen.css';

import items from '../dummy';

const SearchCategoryScreen = (props) => {
  const [category, setCategory] = useState('');

  const categories = [
    'Home',
    'Kids',
    'Baby',
    'Toys',
    'Clothing',
    'Beauty',
    'Shoes',
    'Jewelery',
    'Health',
    'Outdoors',
    'Garden',
    'Industrial',
    'Grocery',
    'Computers',
    'Books',
    'Music',
    'Movies',
    'Sports',
    'Games',
    'Tools',
    'Automotive',
    'Electronics',
  ];

  const changeCategory = (event) => {
    setCategory(event.target.value);
  };

  return (
    <div className={styles.searchCategoryScreen}>
      <ul className={styles.itemList}>
        {category !== '' &&
          items
            .filter((item) => {
              return item.category === category;
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
            {categories.map((c, index) => {
              return (
                <option value={c} key={index}>
                  {c}
                </option>
              );
            })}
          </select>
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

export default SearchCategoryScreen;

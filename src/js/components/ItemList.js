import React from 'react';
import styles from './ItemList.css';

const ItemList = (items, toggleFavorite) => {
  <ul className={styles.itemList}>
    {items.map((item, index) => {
      return <Item key={index} item={item} onClick={toggleFavorite} />;
    })}
  </ul>;
};

// return keyword === '' || item.name.match(new RegExp('^' + keyword));

export default ItemList;

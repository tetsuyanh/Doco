import React, { useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from './SearchCategoryScreen.css';

import ItemList from './ItemList';
import SelectMenu from './SelectMenu';

const SearchCategoryScreen = withRouter(
  ({ items, toggleFavorite, history }) => {
    const [filteredItems, setFilteredItems] = useState([]);
    const [category, setCategory] = useState('');

    useEffect(() => {
      console.log('category:' + category);
      if (category === '') {
        setFilteredItems(items);
      }
      setFilteredItems(items.filter((item) => item.category === category));
    }, [items, category]);

    const updateCategory = (category) => {
      setCategory(category);
    };

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

    return (
      <div className={styles.searchCategoryScreen}>
        <ItemList items={filteredItems} clickFavorite={toggleFavorite} />
        <SelectMenu
          placeholder='カテゴリーを選択'
          candidates={categories}
          updateCandidate={updateCategory}
          clickBack={() => history.goBack()}
        />
      </div>
    );
  }
);

const mapStateToProps = (state, ownProps) => {
  return { items: state.items };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    toggleFavorite: (id) => dispatch(toggleItemFavorite(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchCategoryScreen);
